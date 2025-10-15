// /api/verify-admin.js
module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Method not allowed" });
    let body = req.body;
    if (typeof body === "string") { try { body = JSON.parse(body || "{}"); } catch { body = {}; } }
    const pin = (body && body.pin) ? String(body.pin) : "";
    const adminPin = process.env.ADMIN_KEY || "";
    if (!adminPin) return res.status(500).json({ ok:false, error:"ADMIN_KEY not set" });
    if (pin === adminPin) return res.status(200).json({ ok:true });
    return res.status(401).json({ ok:false, error:"invalid pin" });
  } catch (e) {
    return res.status(500).json({ ok:false, error:String(e) });
  }
};
