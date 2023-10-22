"use client";

import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { SERVICE_CARD_DETAILS } from "../../constant/serviceCard.constant";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ServiceCard() {
  return (
    <Stack direction="row" >
      {SERVICE_CARD_DETAILS.map((service) => {
        return (
          <Center key={service.id} py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg="white"
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${IMAGE})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={IMAGE}
                  alt="#"
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {service.heading}
                </Text>
                <Heading
                  color={"gray.500"}
                  fontSize={"sm"}
                  fontFamily={"body"}
                  fontWeight={500}
                >
                  {service.subHeading}
                </Heading>
              </Stack>
            </Box>
          </Center>
        );
      })}
    </Stack>
  );
}
