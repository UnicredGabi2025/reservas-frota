// /api/verify-admin.js — PIN fixo e GET de diagnóstico
module.exports = async (req, res) => {
  try {
    // Diagnóstico rápido: abra /api/verify-admin (GET) no navegador
    if (req.method === "GET") {
      return res.status(200).json({ ok:true, runtime:"node", version:"pin-fixo-827361-v1" });
    }
    if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });

    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body || "{}"); } catch { body = {}; } }
    const pin = (body && body.pin) ? String(body.pin).trim() : "";

    const PIN_CORRETO = "827361"; // 🔒 PIN fixo
    if (pin === PIN_CORRETO) return res.status(200).json({ ok:true });
    return res.status(401).json({ ok:false, error:"invalid pin" });
  } catch (e) {
    return res.status(500).json({ ok:false, error:String(e) });
  }
};
