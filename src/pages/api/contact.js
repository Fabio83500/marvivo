import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ nom, email, sujet, message }) {
  const errors = {};

  if (!nom || nom.trim().length < 2) {
    errors.nom = "Veuillez indiquer votre nom.";
  }

  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.email = "Veuillez indiquer une adresse email valide.";
  }

  if (!sujet || sujet.trim().length < 2) {
    errors.sujet = "Veuillez indiquer un sujet.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  }

  return errors;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const { nom, email, sujet, message } = req.body || {};
  const errors = validate({ nom, email, sujet, message });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL_TO) {
    console.error(
      "Formulaire de contact : configuration SMTP manquante (SMTP_HOST, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL_TO)."
    );
    return res.status(500).json({
      error:
        "Le service de contact est momentanément indisponible. Merci de nous contacter par téléphone.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Site AS Mar Vivo" <${SMTP_USER}>`,
      to: CONTACT_EMAIL_TO,
      replyTo: email.trim(),
      subject: `[Site web] ${sujet.trim()}`,
      text: `Nom : ${nom.trim()}\nEmail : ${email.trim()}\nSujet : ${sujet.trim()}\n\n${message.trim()}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Formulaire de contact : échec de l'envoi de l'email.", err);
    return res.status(500).json({
      error:
        "Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer ou de nous contacter par téléphone.",
    });
  }
}
