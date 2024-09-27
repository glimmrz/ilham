import { Container } from "../container";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { User } from "../user";

export const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icon icon="search" />
            </Button>
            <Button variant="outline">
              <Icon icon="heart" />
              <span>0</span>
            </Button>

            <User />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
};
