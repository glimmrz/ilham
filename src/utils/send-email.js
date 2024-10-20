import { ResetPasswordTemplate } from "@/components/email-templates/reset-password-template";
import { WelcomeTemplate } from "@/components/email-templates/welcome-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeMail(name, subject, emails) {
  await resend.emails.send({
    from: "Support <contact@ilham.com.bd>",
    to: emails,
    subject: subject,
    react: <WelcomeTemplate firstName={name} />,
  });
}

export async function sendResetPasswordLink(name, resetLink, emails) {
  await resend.emails.send({
    from: "Support <contact@ilham.com.bd>",
    to: emails,
    subject: "Reset Password",
    react: <ResetPasswordTemplate name={name} resetPasswordLink={resetLink} />,
  });
}
