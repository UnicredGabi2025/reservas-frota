// /api/verify-admin.js
// Versão com PIN fixo no código (sem depender da Vercel)

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body || "{}"); } catch { body = {}; }
    }

    const pinInformado = (body && body.pin) ? String(body.pin).trim() : "";

    // 🔒 PIN fixo definido aqui
    const PIN_CORRETO = "827361";

    if (pinInformado === PIN_CORRETO) {
      return res.status(200).json({ ok: true });
    }

    return res.status(401).json({ ok: false, error: "invalid pin" });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
};
