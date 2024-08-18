import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, subject , body } = await req.json();

    await sendMail({to : to, subject : subject, body : body})
      .then((response) => {
          return NextResponse.json(
            { message: response },
            { status: 200 }
          );
      })
      .catch((error) => {
        console.error("Error:", error);
        return NextResponse.json(
          { message: "Error sending email" },
          { status: 500 }
        );
      });
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
  } catch (error) {
    console.error("Error in sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
