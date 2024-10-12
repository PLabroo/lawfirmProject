import "./App.css";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <AppRoutes />
      </SnackbarProvider>
    </BrowserRouter>
  );
}
