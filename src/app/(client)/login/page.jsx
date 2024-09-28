import { LoginForm } from "@/components/forms/login-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

export default function Page() {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
