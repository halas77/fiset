import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MainProvider } from "./context/MainContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MainProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MainProvider>
);
