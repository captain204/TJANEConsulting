import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { eemail } = await req.json();

    // Validate email
    if (!eemail || typeof eemail !== "string") {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Optional format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(eemail)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email to the APP OWNER
    await resend.emails.send({
      from: "TJANE Consulting <no-reply@yourdomain.com>",
      to: "Email-hello@tjanehealth.com", 
      subject: "New Newsletter Subscriber",
      html: `
        <h2>You have a new subscriber!</h2>
        <p><strong>Email:</strong> ${eemail}</p>
        <p>They just subscribed to your newsletter.</p>
      `,
    });

    return NextResponse.json({ message: "Subscribed Successfully!" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to subscribe", error: error.message },
      { status: 500 }
    );
  }
}
