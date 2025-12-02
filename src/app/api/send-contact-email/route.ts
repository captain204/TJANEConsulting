import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      specialty,
      requestType,
      message,
    } = body;

    // Send email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "Email-hello@tjanehealth.com", // change to your email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Specialty:</strong> ${specialty}</p>
        <p><strong>Request Type:</strong> ${requestType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
