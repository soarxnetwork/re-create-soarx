import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import { activationTemplate } from "../emailTemplates";
interface sendMailProps {
  to: string;
  subject: string;
  body: string;
}
export const sendMail = async ({ to, subject, body }: sendMailProps) => {
  const { SMPT_EMAIL, SMTP_PASS } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMPT_EMAIL,
      pass: SMTP_PASS,
    },
  });

  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (error) {
    console.log(error);
  }
};

export const compileActivationTemplate = (name: string, url: string) => {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });
  return htmlBody;
};
export const compileResetPasswordTemplate = (name: string, url: string) => {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });
  return htmlBody;
};
