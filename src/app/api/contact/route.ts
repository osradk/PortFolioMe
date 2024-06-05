import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message, projectType } = await req.json();

        // Log miljøvariablerne
        console.log('SMTP_HOST:', process.env.SMTP_HOST);
        console.log('SMTP_PORT:', process.env.SMTP_PORT);
        console.log('SMTP_USER:', process.env.SMTP_USER);
        console.log('SMTP_PASS:', process.env.SMTP_PASS);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.SMTP_USER,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
