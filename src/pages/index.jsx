import React from "react";
import LayoutPage from "../components/Layout";
import { Hero, About, Experience, Projects } from "../sections";

export default function IndexPage() {
  return (
    <LayoutPage>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </LayoutPage>
  );
}
