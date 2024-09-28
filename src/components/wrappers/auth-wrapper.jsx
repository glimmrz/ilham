import { Button } from "../ui/button";
import { Container } from "./container";

export function AuthWrapper({ children }) {
  return (
    <Container>
      <div className="flex items-center justify-center min-h-[calc(theme(height.screen)-120px)]">
        <div className="max-w-[500px] w-full">
          {/* Main Form */}
          <div className="md:p-8">
            {/* Login / Register Form */}
            <div className="w-full">{children}</div>

            {/* Social Login */}
            <div className="w-full">
              <p className="flex items-center justify-center gap-2 mt-2 mb-2 text-muted-foreground text-center after:content-[''] after:h-[1px] after:w-full after:bg-accent before:content-[''] before:h-[1px] before:w-full before:bg-accent">
                or
              </p>
              <div className="flex flex-col gap-2">
                <Button variant="outline">continue with google</Button>
                <Button variant="outline">continue with facebook</Button>
                <Button variant="outline">continue with twitter</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
