import { Box, IconButton, Typography } from "@mui/material";
import CommonLayout from "../../layout";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";
import DisclaimerPopup from "../DisclaimerPopup";
import { useEffect, useState } from "react";

const renderIconMap = [
  { src: "/assets/linkedin.svg", alt: "LinkedIn" },
  { src: "/assets/twitter.svg", alt: "Twitter" },
  { src: "/assets/insta.svg", alt: "Instagram" },
  { src: "/assets/facebook1.svg", alt: "Facebook" },
  ,
];

export default function Home(): JSX.Element {
  return (
    <>
      <DisclaimerPopup />
      <Box
        sx={{
          backgroundImage: 'url("/assets/lawHome.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box sx={{ marginLeft: { xs: "40px", lg: "70px" } }}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              letterSpacing: "3px",
              fontSize: {
                xs: "30px !important",
                sm: "40px !important",
                md: "45px !important",
                lg: "50px !important",
              },
              marginTop: { xs: "-300px", sm: "-350px" },
              lineHeight: { sm: "50px", lg: "60px" },
            }}
          >
            Empowering Success <br /> Through Legal Excellence
          </Typography>
          <Typography
            variant="subtitle_500"
            sx={{
              color: "white",
              marginTop: "20px",
              fontFamily: "monospace",
            }}
          >
            With Tailored Solutions and Expert Consultation, We Navigate Complex
            Legal <br /> Terrain Together, Ensuring Your Peace of Mind and
            Empowering Your Journey <br /> Toward Achieving Your Goals.
          </Typography>
        </Box>
      </Box>
      <Typography variant="h1" sx={{ height: "100vh" }}>
        Rest
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          gap: "10px",
          alignItems: "center",
          background: "#4c3228",
          padding: "20px 100px",
        }}
      >
        <Typography variant="body_500" color="#fff">
          Get connected with us on social networks!
        </Typography>

        {/* Icons container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center the icons within this box
            alignItems: "baseline",
            columnGap: "40px", // Add space between the icons
          }}
        >
          {renderIconMap.map((icon: any) => (
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.5,
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4c3228",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#5a4130", // Slight hover effect
          },
          zIndex: 1000, // Ensure it appears above other elements
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Footer />
    </>
  );
}
