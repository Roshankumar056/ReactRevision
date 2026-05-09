import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router";
import { ChakraProvider } from '@chakra-ui/react'
createRoot(document.getElementById("root")).render(
  <ChakraProvider>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </ChakraProvider>,
);
