// api/verify-admin.js — runtime Node + compat CJS/ESM, PIN 827361
export const config = { runtime: 'nodejs' };

function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({ ok: true, runtime: 'node', version: 'pin-fixo-827361-v3' });
    }
    if (req.method !== 'POST') {
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch { body = {}; }
    }
    const pin = (body && body.pin) ? String(body.pin).trim() : '';
    const PIN_CORRETO = '827361';
    if (pin === PIN_CORRETO) return res.status(200).json({ ok: true });
    return res.status(401).json({ ok: false, error: 'invalid pin' });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
export default handler;
module.exports = handler;
