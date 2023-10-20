import { lazy } from "react";
import { Flex } from "@chakra-ui/react";
import { COLORS } from "../src/utils/chakra-ui/palette.util";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
function App() {
  return (
    <Flex bgColor={COLORS.PRIMARY} width="100%" height="100vh">
      <HomePage />
    </Flex>
  );
}

export default App;
