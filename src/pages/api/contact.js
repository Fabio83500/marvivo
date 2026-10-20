import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITES = { nom: 100, email: 200, telephone: 30, sujet: 100, message: 5000 };

const nettoyer = (valeur) => (typeof valeur === "string" ? valeur.trim() : "");

const echapper = (texte) =>
  texte.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function validate({ nom, email, telephone, sujet, message, consentement }) {
  const errors = {};

  if (nom.length < 2) {
    errors.nom = "Veuillez indiquer votre nom.";
  }

  if (!EMAIL_REGEX.test(email)) {
    errors.email = "Veuillez indiquer une adresse email valide.";
  }

  if (telephone && !/^[+\d\s.()-]{6,}$/.test(telephone)) {
    errors.telephone = "Veuillez indiquer un numéro de téléphone valide.";
  }

  if (sujet.length < 2) {
    errors.sujet = "Veuillez choisir un sujet.";
  }

  if (message.length < 10) {
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  }

  if (!consentement) {
    errors.consentement = "Merci d'accepter l'utilisation de vos données pour vous répondre.";
  }

  for (const [champ, max] of Object.entries(LIMITES)) {
    const valeur = { nom, email, telephone, sujet, message }[champ];
    if (valeur.length > max && !errors[champ]) {
      errors[champ] = `Ce champ ne doit pas dépasser ${max} caractères.`;
    }
  }

  return errors;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const body = req.body || {};

  // Champ piège : un humain ne le voit pas, un robot le remplit.
  // On répond « succès » sans rien envoyer pour ne pas renseigner le robot.
  if (nettoyer(body.site)) {
    return res.status(200).json({ success: true });
  }

  const donnees = {
    nom: nettoyer(body.nom),
    email: nettoyer(body.email),
    telephone: nettoyer(body.telephone),
    sujet: nettoyer(body.sujet),
    message: nettoyer(body.message),
    consentement: body.consentement === true,
  };

  const errors = validate(donnees);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors, error: "Merci de corriger les champs indiqués." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, CONTACT_EMAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL_TO) {
    console.error(
      "Formulaire de contact : configuration SMTP manquante (SMTP_HOST, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL_TO). Voir .env.example."
    );
    return res.status(500).json({
      error: "Le service de contact est momentanément indisponible. Merci de nous écrire à asmarvivo@orange.fr.",
    });
  }

  const { nom, email, telephone, sujet, message } = donnees;
  const port = Number(SMTP_PORT) || 587;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    const lignes = [
      ["Nom", nom],
      ["Email", email],
      ["Téléphone", telephone || "Non renseigné"],
      ["Sujet", sujet],
    ];

    await transporter.sendMail({
      from: `"Site AS Mar Vivo" <${SMTP_FROM || SMTP_USER}>`,
      to: CONTACT_EMAIL_TO,
      replyTo: `"${nom.replace(/"/g, "")}" <${email}>`,
      subject: `[Site web] ${sujet} - ${nom}`,
      text: `${lignes.map(([label, valeur]) => `${label} : ${valeur}`).join("\n")}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#12263a;max-width:600px">
          <h2 style="color:#105090;margin:0 0 16px">Nouveau message depuis le site</h2>
          <table style="border-collapse:collapse;margin-bottom:16px">
            ${lignes
              .map(
                ([label, valeur]) =>
                  `<tr><td style="padding:4px 16px 4px 0;font-weight:bold">${label}</td><td style="padding:4px 0">${echapper(valeur)}</td></tr>`
              )
              .join("")}
          </table>
          <div style="padding:16px;background:#f7f9fc;border-left:4px solid #f0b050;white-space:pre-wrap">${echapper(message)}</div>
          <p style="color:#888;font-size:12px;margin-top:16px">Répondez directement à cet email pour écrire à ${echapper(nom)}.</p>
        </div>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Formulaire de contact : échec de l'envoi de l'email.", err);
    return res.status(500).json({
      error:
        "Une erreur est survenue lors de l'envoi de votre message. Merci de réessayer ou de nous écrire à asmarvivo@orange.fr.",
    });
  }
}
