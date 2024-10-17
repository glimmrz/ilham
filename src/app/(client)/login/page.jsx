import { LoginForm } from "@/components/forms/login-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

export function metadata() {
  return {
    title: "Login",
  };
}

export default async function Page() {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  );
}
