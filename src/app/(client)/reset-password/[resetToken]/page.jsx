import { ResetPasswordForm } from "@/components/forms/reset-password-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

export default async function Page({ params }) {
  return (
    <AuthWrapper>
      <ResetPasswordForm resetToken={params.resetToken} />
    </AuthWrapper>
  );
}
