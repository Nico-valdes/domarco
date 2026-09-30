import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos requeridos.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingrese un correo electrónico válido.' },
        { status: 400 }
      )
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'info@domarco.com.ar'

    // Logo attachment
    const logoPath = path.join(process.cwd(), 'public', 'logo_domarco.png')
    const hasLogo = fs.existsSync(logoPath)
    const attachments = hasLogo
      ? [
        {
          filename: 'logo_domarco.png',
          path: logoPath,
          cid: 'domarco_logo',
        },
      ]
      : []

    const formattedDate = new Intl.DateTimeFormat('es-AR', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'America/Argentina/Buenos_Aires',
    }).format(new Date())

    const cleanPhone = phone ? String(phone).replace(/[^\d+]/g, '') : ''
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : ''

    const emailHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva consulta web · DOMARCO</title>
</head>
<body style="margin: 0; padding: 0; background-color: #ebede9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #121315;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #ebede9; padding: 30px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border: 1px solid #d5d8dc; border-collapse: collapse; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
          
          <!-- Top Header Brand -->
          <tr>
            <td style="background-color: #0a0e14; padding: 26px 32px; border-bottom: 3px solid #315c8d;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td valign="middle" align="left">
                    ${hasLogo
        ? `<img src="cid:domarco_logo" alt="DOMARCO" height="38" style="display: block; max-height: 38px; width: auto; border: 0;" />`
        : `<span style="color: #ffffff; font-size: 22px; font-weight: bold; letter-spacing: 0.08em;">DOMARCO</span>`
      }
                  </td>
                  <td valign="middle" align="right">
                    <span style="display: inline-block; padding: 5px 10px; background-color: #162438; border: 1px solid #315c8d; font-family: monospace; font-size: 10px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; color: #84d2f6;">
                      ● Consulta Web
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Technical Subheader -->
          <tr>
            <td style="background-color: #111a26; padding: 9px 32px; border-bottom: 1px solid #23344d;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="font-family: monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.16em; color: #94b8db;">
                    PRENSAS HIDRÁULICAS · FABRICACIÓN & SERVICIO TÉCNICO
                  </td>
                  <td align="right" style="font-family: monospace; font-size: 10px; color: #6482a4;">
                    ${formattedDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 34px 32px 28px 32px;">
              
              <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.02em; color: #0a0e14;">
                Nueva consulta de cliente
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 13.5px; line-height: 1.5; color: #555b66;">
                Has recibido una nueva consulta enviada desde el formulario de contacto en <strong>domarco.com.ar</strong>:
              </p>

              <!-- Technical Data Sheet -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse; border: 1px solid #e1e4e8; background-color: #fafbfc; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; width: 140px; font-family: monospace; font-size: 10.5px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em; color: #315c8d; background-color: #f1f4f8;">
                    CLIENTE / EMPRESA
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; font-size: 14px; font-weight: bold; color: #121315;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; font-family: monospace; font-size: 10.5px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em; color: #315c8d; background-color: #f1f4f8;">
                    CORREO ELECTRÓNICO
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; font-size: 14px; color: #121315;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #315c8d; text-decoration: underline; font-weight: 600;">
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>
                ${phone
        ? `<tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; font-family: monospace; font-size: 10.5px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em; color: #315c8d; background-color: #f1f4f8;">
                    TELÉFONO / WHATSAPP
                  </td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e1e4e8; font-size: 14px; color: #121315;">
                    <a href="tel:${cleanPhone}" style="color: #121315; text-decoration: none; font-weight: 600;">
                      ${escapeHtml(phone)}
                    </a>
                  </td>
                </tr>`
        : ''
      }
              </table>

              <!-- Message / Inquiry Box -->
              <div style="margin-bottom: 28px;">
                <div style="font-family: monospace; font-size: 10.5px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.14em; color: #315c8d; margin-bottom: 8px;">
                  DETALLE DE LA CONSULTA:
                </div>
                <div style="background-color: #f7f9fb; border-left: 4px solid #315c8d; border: 1px solid #dde1e6; border-left-width: 4px; padding: 18px 20px; font-size: 14px; line-height: 1.65; color: #1f242e; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
${escapeHtml(message)}
                </div>
              </div>

              <!-- Action Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 10px;">
                <tr>
                  <td style="background-color: #315c8d; text-align: center;">
                    <a href="mailto:${escapeHtml(email)}?subject=RE: Consulta DOMARCO" style="display: inline-block; padding: 12px 22px; font-family: monospace; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em; color: #ffffff; text-decoration: none;">
                      Responder por Email ↗
                    </a>
                  </td>
                  ${waLink
        ? `<td style="padding-left: 12px;">
                    <a href="${waLink}" target="_blank" style="display: inline-block; padding: 11px 20px; border: 1px solid #25d366; font-family: monospace; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.12em; color: #128c7e; text-decoration: none; background-color: #f3fdf8;">
                      Escribir por WhatsApp ↗
                    </a>
                  </td>`
        : ''
      }
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f2f0; padding: 22px 32px; border-top: 1px solid #dcdfe3;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="font-size: 11px; color: #626770; line-height: 1.5;">
                    <strong style="color: #121315;">DOMARCO · Prensas Hidráulicas</strong><br />
                    Av. Centenario 3615 · Quilmes, Buenos Aires, Argentina<br />
                    Asistencia técnica directa: <a href="mailto:info@domarco.com.ar" style="color: #315c8d;">info@domarco.com.ar</a>
                  </td>
                  <td align="right" valign="bottom" style="font-family: monospace; font-size: 9.5px; color: #8c9199; letter-spacing: 0.1em; text-transform: uppercase;">
                    Desde 1964
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    // MODO ETHEREAL (Testing): Solo si se activa explícitamente con USE_ETHEREAL=true
    // o en desarrollo local si no se configuró ninguna contraseña.
    const isEthereal =
      process.env.USE_ETHEREAL === 'true' ||
      (process.env.NODE_ENV !== 'production' &&
        (!process.env.SMTP_PASS || process.env.SMTP_PASS === 'tu_contraseña_aqui'))

    if (isEthereal) {
      console.log('🔄 [DOMARCO Testing] Creando cuenta de prueba en Ethereal Email...')
      const testAccount = await nodemailer.createTestAccount()

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      })

      const info = await transporter.sendMail({
        from: `"${name} (Web DOMARCO)" <${testAccount.user}>`,
        to: recipient,
        replyTo: email,
        subject: `Nueva consulta web: ${name}`,
        html: emailHtml,
        attachments,
      })

      const previewUrl = nodemailer.getTestMessageUrl(info)
      console.log('========================================================')
      console.log('📬 [ETHEREAL EMAIL] Vista previa del correo:')
      console.log(previewUrl)
      console.log('========================================================')

      return NextResponse.json({
        success: true,
        isTest: true,
        previewUrl,
        message: 'Consulta enviada en modo de prueba (Ethereal Email).',
      })
    }

    // MODO PRODUCCIÓN: SMTP Real
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const port = Number(process.env.SMTP_PORT) || 465
      const secure = process.env.SMTP_SECURE === 'true' || port === 465

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"${name} (Web DOMARCO)" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: `Nueva consulta web: ${name}`,
        html: emailHtml,
        attachments,
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: true, mock: true })
  } catch (error) {
    console.error('Error procesando consulta:', error)
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar la consulta.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
