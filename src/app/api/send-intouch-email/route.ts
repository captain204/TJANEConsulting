import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userFullName, userEmail, userMessage } = body;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "Email-hello@tjanehealth.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>Keep In Touch Message</h2>
        <p><strong>Name:</strong> ${userFullName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong><br/>${userMessage}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
