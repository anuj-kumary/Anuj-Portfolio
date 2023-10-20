import { Stack, VStack, Text, Box, Image } from "@chakra-ui/react";
import { COLORS } from "../../utils/chakra-ui/palette.util";
import HeroImage from "../../assets/hero.jpg";

function HeroSection() {
  return (
    <Stack
      padding="0 1rem"
      width="100%"
      bgColor={COLORS.PRIMARY}
      direction={{ base: "column", md: "row" }}
    >
      <VStack
        mt={{ base: "10", md: "28" }}
        width={{ base: "100%", md: "50%" }}
        spacing={4}
        align="stretch"
      >
        <Text fontSize={{ base: "4xl", md: "6xl" }} color={COLORS.WHITE}>
          Hello! I'm
        </Text>
        <Text fontSize={{ base: "5xl", md: "6xl" }} color={COLORS.WHITE}>
          Anujkumar Yadav
        </Text>
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
