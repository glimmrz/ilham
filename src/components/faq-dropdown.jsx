"use client";
import { useState } from "react";
import { Container } from "./wrappers/container";
import { Heading } from "./heading";
import { Icon } from "./icon";

export function FaqDropodown({ faq }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-accent rounded-md overflow-hidden">
      <div
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-colors duration-300 select-none cursor-pointer ${
          isOpen && "bg-primary text-background"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <Heading>{faq?.question}</Heading>
            <Icon icon={!isOpen ? "arrowDown" : "arrowUp"} size={20} />
          </div>
        </Container>
      </div>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${
          isOpen && "max-h-[500px]"
        }`}
      >
        <Container>
          <p>{faq?.answer}</p>
        </Container>
      </div>
    </div>
  );
}
