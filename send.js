// /api/send.js
// Envia e-mail para o destinatário central (RESERVAS_TO) com assunto detalhado.
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });

    let body = req.body;
    if (typeof body === "string") { try{ body = JSON.parse(body || "{}"); } catch { body = {}; } }
    const { html, veiculo, placa, motorista, inicio, fim } = body || {};

    const user = process.env.M365_USER, pass = process.env.M365_PASS, toCentral = process.env.RESERVAS_TO;
    if (!user || !pass || !toCentral) return res.status(500).json({ ok:false, error:"Missing envs (M365_USER, M365_PASS, RESERVAS_TO)" });

    const transporter = nodemailer.createTransport({ host:"smtp.office365.com", port:587, secure:false, requireTLS:true, auth:{ user, pass } });
    await transporter.verify().catch(()=>{ throw new Error("SMTP verify failed"); });

    const fmt = (d)=>{ try{ const x=new Date(d); return x.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})+' '+x.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});}catch{return d;} };
    const periodo = `${fmt(inicio)}–${fmt(fim)}`;
    const subject = `[Frota] ${veiculo || 'Veículo'} • ${periodo} • ${motorista || ''}`;

    const info = await transporter.sendMail({ from:`"Reservas Frota" <${user}>`, to: toCentral, subject, html: html || "<p>Reserva criada.</p>" });
    return res.status(200).json({ ok:true, id: info.messageId });
  } catch (e) {
    console.error("SEND ERROR:", e);
    return res.status(500).json({ ok:false, error: String(e) });
  }
};
