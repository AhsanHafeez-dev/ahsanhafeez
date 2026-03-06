import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Configure your SMTP transporter
        // For Gmail, you can use your email and an App Password.
        // Ensure you add SMTP_EMAIL and SMTP_PASSWORD to your .env.local file.
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another service
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL, // sent to yourself
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\Project Detail:\n${message}`,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const userConfirmationOptions = {
            from: process.env.SMTP_EMAIL,
            to: email, // sent to the user
            subject: `Received your message - ${name}`,
            text: `Hi ${name},\n\nThank you for reaching out! We have received your message and our team will get back to you soon.\n\nBest regards,\nAhsan Hafeez`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! We have received your message and our team will get back to you soon.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Ahsan Hafeez</strong></p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userConfirmationOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
