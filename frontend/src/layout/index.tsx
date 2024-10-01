import { Box } from "@mui/material";
import Footer from "./footer";
import Header from "./header";

export default function CommonLayout({ children }: { children: JSX.Element }) {
  return (
    <Box
      component={"img"}
      src="../public/assets/lawHome.svg"
      sx={{ width: "100%", height: "100vh" }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
