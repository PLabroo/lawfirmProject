import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  );
} else {
  console.error("Root element not found");
}
