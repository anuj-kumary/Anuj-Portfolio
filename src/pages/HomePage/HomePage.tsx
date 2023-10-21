import HeroSection from "../../components/HeroSection/HeroSection";
import { VStack } from "@chakra-ui/react";
import AboutSection from "../../components/AboutSection/AboutSection";
import React from "react";

function HomePage() {
  return (
    <VStack mt={5} width="100%" height="100%">
      <HeroSection />
      <AboutSection />
    </VStack>
  );
}

export default HomePage;
