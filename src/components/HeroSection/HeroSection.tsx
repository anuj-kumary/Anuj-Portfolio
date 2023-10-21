import { Stack, VStack, Text, Box, Image, Button } from "@chakra-ui/react";
import HeroImage from "../../assets/hero.jpg";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

function HeroSection() {
  return (
    <Stack
      padding="0 1rem"
      width="100%"
      direction={{ base: "column", md: "row" }}
    >
      <VStack
        mt={{ base: "10", md: "28" }}
        width={{ base: "100%", md: "50%" }}
        spacing={4}
        align="stretch"
      >
        <Text fontSize={{ base: "4xl", md: "6xl" }}>Hello! I'm</Text>
        <Text fontSize={{ base: "5xl", md: "6xl" }}>Anujkumar Yadav</Text>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Download CV
          </Button>
          <Button leftIcon={<PhoneIcon />} colorScheme="teal" variant="outline">
            Get in touch
          </Button>
        </Stack>
      </VStack>
      <VStack
        marginRight=".3rem"
        width={{ base: "100%", md: "50%" }}
        spacing={4}
      >
        <Box>
          <Image src={HeroImage} alt="Dan Abramov" />
        </Box>
      </VStack>
    </Stack>
  );
}

export default HeroSection;
