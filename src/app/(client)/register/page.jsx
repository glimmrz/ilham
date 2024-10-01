import { RegisterForm } from "@/components/forms/register-form";
import { AuthWrapper } from "@/components/wrappers/auth-wrapper";

export function metadata() {
  return {
    title: "Register",
  };
}

export default function Page() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}
