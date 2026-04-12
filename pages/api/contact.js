// Fase 1: stub que acepta el submit y devuelve 200.
// Fase 2: conectar a Notion API o enviar email institucional.
//
// Para conectar a Notion:
//   npm install @notionhq/client
//   Agregar NOTION_TOKEN y NOTION_DATABASE_ID en Vercel env vars
//   Llamar notion.pages.create() con los campos del form
//
// Para enviar email:
//   npm install resend
//   Agregar RESEND_API_KEY en Vercel env vars
//   Llamar resend.emails.send() con los datos del form

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type, email, name, role, municipality } = req.body

  if (!type || !email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // TODO Fase 2: guardar en Notion o enviar email
  console.log('[contact]', { type, email, name, role, municipality, ts: new Date().toISOString() })

  return res.status(200).json({ ok: true })
}
