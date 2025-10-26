import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')?.toString() || ''
    const email = formData.get('email')?.toString() || ''
    const phone = formData.get('phone')?.toString() || ''
    const message = formData.get('message')?.toString() || ''

    const files: Array<{ name: string; size: number; type: string }> = []

    for (const entry of formData.values()) {
      // formData.values includes both fields and files; files are File objects
      // We detect file-like objects by checking for 'name' and 'size' properties
      // In the runtime these are Web File objects
      // We'll simulate storing by returning metadata only
      // @ts-ignore
      if (entry && typeof entry === 'object' && 'name' in entry && 'size' in entry) {
        // @ts-ignore
        files.push({ name: entry.name, size: entry.size, type: entry.type })
      }
    }

    // Simula un procesamiento (ej. subir a S3 y enviar email)
    await new Promise((r) => setTimeout(r, 600))

    return NextResponse.json({ ok: true, received: { name, email, phone, message, files } })
  } catch (err) {
    console.error('Error in /api/contact', err)
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
