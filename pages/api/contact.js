// Envía un email de notificación al equipo Citixen cuando alguien completa el formulario.
// Requiere RESEND_API_KEY y CONTACT_EMAIL en variables de entorno (Vercel).
// Si no están configuradas, solo logea (modo desarrollo).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type, email, name, role, municipality, level } = req.body

  if (!type || !email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const timestamp = new Date().toISOString()
  const data = { type, email, name, role, municipality, level, timestamp }

  // Si no hay API key configurada, solo logear (dev mode)
  if (!process.env.RESEND_API_KEY) {
    console.log('[contact][dev-mode]', data)
    return res.status(200).json({ ok: true })
  }

  const contactEmail = process.env.CONTACT_EMAIL || 'contacto@citixen.org'

  const subject = type === 'government'
    ? `[Citixen] Nuevo municipio interesado: ${municipality || 'Sin nombre'}`
    : `[Citixen] Nuevo ciudadano registrado`

  const htmlBody = type === 'government'
    ? `
      <h2>Nuevo registro de municipio</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:8px;font-weight:bold;">Nombre</td><td style="padding:8px;">${name || '-'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Cargo</td><td style="padding:8px;">${role || '-'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Municipio</td><td style="padding:8px;">${municipality || '-'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Nivel de interés</td><td style="padding:8px;">${level || 'No especificado'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Fecha</td><td style="padding:8px;">${timestamp}</td></tr>
      </table>
    `
    : `
      <h2>Nuevo ciudadano interesado</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Fecha:</strong> ${timestamp}</p>
    `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Citixen Landing <noreply@citixen.org>',
        to: [contactEmail],
        subject,
        html: htmlBody,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('[contact] Resend error:', err)
      // No fallar al usuario por un error de envío
      return res.status(200).json({ ok: true })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[contact] Error sending email:', error.message)
    // No fallar al usuario
    return res.status(200).json({ ok: true })
  }
}
