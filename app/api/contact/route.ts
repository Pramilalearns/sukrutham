import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { _subject, _template, ...data } = body;

        // Create a Nodemailer transporter
        // These environment variables need to be set in your CWP Pro environment or .env file
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'mail.sukruthamfarmstay.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: Number(process.env.SMTP_PORT) === 465 ? true : false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Format the email content
        let htmlContent = `<h2>${_subject || 'New Submission'}</h2>`;
        
        if (_template === 'table') {
            htmlContent += `<table style="width:100%; border-collapse: collapse;">`;
            for (const [key, value] of Object.entries(data)) {
                htmlContent += `
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${key}</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${value || '-'}</td>
                    </tr>
                `;
            }
            htmlContent += `</table>`;
        } else {
            for (const [key, value] of Object.entries(data)) {
                htmlContent += `<p><strong>${key}:</strong> ${value || '-'}</p>`;
            }
        }

        // Send the email
        const info = await transporter.sendMail({
            from: `"Sukrutham Farmstay Website" <${process.env.SMTP_USER}>`, // sender address
            to: "sukruthamfarmstay@gmail.com", // recipient (the client)
            subject: _subject || "New Form Submission", // Subject line
            html: htmlContent, // html body
            replyTo: data.Email || data.email, // Reply to the user who filled the form
        });

        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
