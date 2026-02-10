export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to Messenger</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#333;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
      <tr>
        <td align="center">
          
          <!-- Main Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
            
            <!-- Header -->
            <tr>
              <td style="background:#2563eb; padding:32px; text-align:center;">
                <img 
                  src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
                  alt="Messenger Logo"
                  width="64"
                  height="64"
                  style="border-radius:50%; background:#ffffff; padding:8px; margin-bottom:16px;"
                />
                <h1 style="margin:0; font-size:26px; font-weight:600; color:#ffffff;">
                  Welcome to Messenger
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px;">
                <p style="margin:0 0 16px; font-size:16px;">
                  Hi <strong>${name}</strong>,
                </p>

                <p style="margin:0 0 20px; font-size:15px; color:#555;">
                  We’re excited to have you on Messenger. Our platform helps you stay connected with people that matter — quickly, securely, and in real time.
                </p>

                <!-- Feature Box -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; border-radius:10px; padding:20px; margin:24px 0;">
                  <tr>
                    <td>
                      <p style="margin:0 0 12px; font-size:15px; font-weight:600;">
                        Get started with Messenger:
                      </p>
                      <ul style="padding-left:18px; margin:0; color:#555; font-size:14px;">
                        <li style="margin-bottom:8px;">Complete your profile</li>
                        <li style="margin-bottom:8px;">Add friends and contacts</li>
                        <li style="margin-bottom:8px;">Start secure conversations</li>
                        <li>Share photos, videos, and files</li>
                      </ul>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <div style="text-align:center; margin:32px 0;">
                  <a 
                    href="${clientURL}" 
                    style="background:#2563eb; color:#ffffff; text-decoration:none; padding:14px 36px; font-size:15px; font-weight:600; border-radius:999px; display:inline-block;"
                  >
                    Open Messenger
                  </a>
                </div>

                <p style="margin:0 0 10px; font-size:14px; color:#555;">
                  If you have any questions or need assistance, our team is always here to help.
                </p>

                <p style="margin:0; font-size:14px;">
                  — The Messenger Team
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:20px; text-align:center; font-size:12px; color:#888;">
                <p style="margin:0 0 8px;">
                  © 2025 Messenger. All rights reserved.
                </p>
                <p style="margin:0;">
                  <a href="#" style="color:#2563eb; text-decoration:none; margin:0 8px;">Privacy</a>
                  <a href="#" style="color:#2563eb; text-decoration:none; margin:0 8px;">Terms</a>
                  <a href="#" style="color:#2563eb; text-decoration:none; margin:0 8px;">Support</a>
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
