"use client";
import { CategoryBox } from "./category-box";
import { Section } from "./section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const CategoryView = () => {
  return (
    <Section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>{" "}
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>{" "}
          <CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-[12.5%]">
            <CategoryBox />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-1 md:left-4" />
        <CarouselNext className="right-1 md:right-4" />
      </Carousel>
    </Section>
  );
};