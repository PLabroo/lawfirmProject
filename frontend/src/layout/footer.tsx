import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Theme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewsLetter from "./newsLetter";

const companyLabels = [
  {
    title: "About Us",
    ele: "/about",
  },
  {
    title: "Career",
    ele: "/career",
  },
  {
    title: "Team",
    ele: "/team",
  },
  {
    title: "Services",
    ele: "/services",
  },
];

const resourceLabels = [
  {
    title: "Blog",
    ele: "/blogs",
  },
  {
    title: "Newsletters",
    ele: "/newsletters",
  },
  {
    title: "Help Center",
    ele: "/help",
  },
  {
    title: "Support",
    ele: "/support",
  },
];

const bottomHeaders = [
  {
    title: "Terms",
    ele: "/terms",
  },
  {
    title: "Privacy",
    ele: "/privacy",
  },
  {
    title: "Cookies",
    ele: "/cookies",
  },
  {
    title: "License",
    ele: "/license",
  },
];

export default function Footer(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        padding: { xs: "40px 50px", sm: "40px 80px", lg: "40px 100px" },
      }}
    >
      <Grid container alignItems={"center"} rowSpacing={3} columnSpacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box mb={2}>
            {/* Logo or Brand */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "5px",
                mb: 1,
              }}
            >
              <Box
                component={"img"}
                src="/assets/advocare.svg"
                width={50}
                height={50}
              />
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "0.1px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Attorney{" "}
              </Typography>
            </Box>

            <Typography variant="body_500" sx={{ maxWidth: "350px", mb: 2 }}>
              Empowering Success Through Legal Excellence
            </Typography>
            <Typography variant="overline_400" sx={{ maxWidth: "350px" }}>
              With Tailored Solutions and Expert Consultation, We Navigate
              Complex Legal Terrain Together, Ensuring Your Peace of Mind and
              Empowering Your Journey Toward Achieving Your Goals
            </Typography>
          </Box>
        </Grid>

        {/* Company Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Company
          </Typography>
          {companyLabels.map((label) => (
            <Typography
              variant="body_500"
              key={label.title}
              sx={(theme: Theme) => ({
                color: theme.palette.common.white,
                mb: 1,
                width: "fit-content",
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.6,
                },
              })}
              onClick={() => navigate(label.ele)}
            >
              {label.title}
            </Typography>
          ))}
        </Grid>

        {/* Resources Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Resources
          </Typography>
          {resourceLabels.map((label) => (
            <Typography
              variant="body_500"
              key={label.title}
              sx={(theme: Theme) => ({
                color: theme.palette.common.white,
                mb: 1,
                width: "fit-content",
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.6,
                },
              })}
              onClick={() => navigate(label.ele)}
            >
              {label.title}
            </Typography>
          ))}
        </Grid>

        {/* Newsletter Section */}
        <NewsLetter />
      </Grid>

      {/* Bottom Section */}
      <Box mt={4} sx={{ textAlign: "center" }}>
        <Typography variant="subtitle_500">
          &copy; 2024 Attorney. All rights reserved.
        </Typography>
        {/* <Box display="flex" gap={2}>
          {bottomHeaders.map((header) => (
            <Typography
              variant="body_400"
              sx={{
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.6,
                },
              }}
            >
              {header.title}
            </Typography>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
