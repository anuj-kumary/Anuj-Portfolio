/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { COLORS } from "../../utils/chakra-ui/palette.util";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
const Links = ["Home", "Projects", "Blog", "Contact"];

type ContainerProps = {
  children: React.ReactNode;
};

export const Navbar = (_props: ContainerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={COLORS.PRIMARY} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box color={COLORS.WHITE}>Anujkumar Yadav</Box>
          </HStack>
          <Flex alignItems={"center"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Box
                  as="a"
                  px={2}
                  py={1}
                  _hover={{
                    textDecoration: "none",
                  }}
                  color={COLORS.WHITE}
                  href={"#"}
                >
                  {link}
                </Box>
              ))}
              <ColorModeSwitcher />
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box
                  as="a"
                  px={2}
                  py={1}
                  _hover={{
                    textDecoration: "none",
                  }}
                  textColor="WHITE"
                  href={"#"}
                >
                  {link}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
