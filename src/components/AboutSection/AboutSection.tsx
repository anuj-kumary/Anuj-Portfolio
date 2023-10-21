import { VStack, Box, Text } from "@chakra-ui/react";

function AboutSection() {
  return (
    <VStack pb={10} w="100%" bgColor="black" spacing="24px">
      <Box mt={16}>
        <Text color="white" fontSize={{ base: "4xl", md: "6xl" }}>
          About me
        </Text>
      </Box>
      <Box w={{ base: "100%", md: "60%" }}>
        <Text
          textAlign={{ md: "center" }}
          color="white"
          fontSize={{ base: "xs", md: "sm" }}
          padding={{ base: "0 1rem" }}
        >
          I'm a software engineer who enjoy building things and interacting with
          people. Ability to translate business requirements into innovative
          software solutions. Energetic person with a proven set of skills,
          eager to tackle challenges and focused on the journey of improvement
          rather than just the outcomes.
        </Text>
      </Box>
    </VStack>
  );
}

export default AboutSection;
