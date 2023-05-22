import React from "react";
import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hook/useTitle";
export const HomePage = () => {
  useTitle("Access Latest Computer Science E-Books - FakeStore");
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
