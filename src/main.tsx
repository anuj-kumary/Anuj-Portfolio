import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react';
import {Navbar} from "./components/Navbar/Navbar.tsx";
import customTheme from "./utils/chakra-ui//theme.util"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Navbar>
        <App />
      </Navbar>
    </ChakraProvider>
  </React.StrictMode>
);
