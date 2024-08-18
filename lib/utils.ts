import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function sendEmail(
  userEmail: string,
  subject: string,
  emailBody: any
) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: userEmail,
        subject: subject,
        body: emailBody,
      }),
    });

    if (response.ok) {
      return { status: 200, message: "Email sent successfully!" };
    } else {
      throw new Error("Email sending failed!");
    }
  } catch (error) {
    throw new Error("Email sending failed!");
  }
}

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
