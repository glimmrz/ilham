import { ForgotPasswordForm } from "@/components/forms/forgot-password-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

export default function Page() {
  return (
    <AuthWrapper>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
}
