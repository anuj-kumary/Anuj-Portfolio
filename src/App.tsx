import { lazy } from "react";
import { Stack } from "@chakra-ui/react";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
function App() {
  return (
    <Stack width="100%">
      <HomePage />
    </Stack>
  );
}

export default App;
