import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { COLORS } from "../../utils/chakra-ui/palette.util";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      fontSize="lg"
      icon={<SwitchIcon />}
      marginLeft="2"
      size="md"
      variant="ghost"
      color={COLORS.PRIMARY}
      bgColor={COLORS.WHITE}
      onClick={toggleColorMode}
      {...props}
      _hover={{ backgroundColor: COLORS.WHITE }}
    />
  );
};
