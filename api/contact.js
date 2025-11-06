// /api/contact.js
const { Resend } = require('resend');
const dns = require('node:dns').promises;

const resend = new Resend(process.env.RESEND_API_KEY);

// Nota: En Vercel (Node 18+), fetch está disponible globalmente.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { nombre, correo, mensaje, token } = req.body || {};

    if (!nombre || !correo || !mensaje || !token) {
      res.status(400).json({ error: 'Faltan campos requeridos.' });
      return;
    }

    // 1) Validar email (formato)
    const email = String(correo).trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRe.test(email)) {
      res.status(400).json({ error: 'Correo con formato inválido.' });
      return;
    }

    // 2) Verificar CAPTCHA (Turnstile)
    try {
      const verifyResp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || '',
          response: token,
          remoteip: req.headers['x-forwarded-for'] || ''
        })
      });
      const verifyJson = await verifyResp.json();
      if (!verifyJson.success) {
        res.status(400).json({ error: 'No se pudo verificar el CAPTCHA.' });
        return;
      }
    } catch (e) {
      console.error('Turnstile error:', e);
      res.status(500).json({ error: 'Error al verificar CAPTCHA.' });
      return;
    }

    // 3) Verificación MX del dominio del correo
    try {
      const domain = email.split('@')[1];
      const mx = await dns.resolveMx(domain);
      if (!mx || mx.length === 0) {
        res.status(400).json({ error: 'El dominio del correo no tiene registros MX válidos.' });
        return;
      }
    } catch {
      res.status(400).json({ error: 'No se pudo validar el dominio del correo.' });
      return;
    }

    // 4) Envío de correo con Resend
    const to = process.env.CONTACT_TO;
    if (!to) {
      res.status(500).json({ error: 'CONTACT_TO no está configurado en el servidor.' });
      return;
    }

    const subject = `Nuevo contacto web: ${nombre}`;
    const html = `
      <div style="font-family:system-ui,Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 8px 0">Contacto desde el sitio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px;border:1px solid #eee">${escapeHtml(mensaje)}</pre>
      </div>
    `;
    const text = `Contacto desde el sitio\n\nNombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`;

    await resend.emails.send({
      from: 'Liceo Industrial <no-reply@tudominio.cl>',
      to,
      subject,
      reply_to: email,
      text,
      html
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    res.status(500).json({ error: 'No se pudo enviar el correo.' });
  }
};

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
