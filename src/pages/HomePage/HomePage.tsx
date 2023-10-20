import HeroSection from "../../components/HeroSection/HeroSection";
import { Flex } from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <Flex mt={5} width="100%" height="100%" bgColor="white">
    <HeroSection />
    </Flex>
  );
}

export default HomePage;
