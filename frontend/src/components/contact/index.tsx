import { Box, Grid, Typography } from "@mui/material";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import ContactForm from "../contactForm";

export default function Contact(): JSX.Element {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setInView(true); // Element is in view
            hasAnimated.current = true;
          }
        });
      },
      {
        threshold: 0.5, // Adjust this threshold based on when you want the animation to trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <Box
        ref={sectionRef}
        sx={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(-200px)",
          transition: "opacity 0.6s ease-out, transform 0.8s ease-in-out",
          mt: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            mb: 1.5,
            fontWeight: 800,
            fontSize: { lg: "32px", sm: "26px", xs: "24px" },
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="body_500" sx={{ textAlign: "center" }}>
          Any questions or remarks? Just write us a message!
        </Typography>

        <Box
          sx={{
            background: "white",
            borderRadius: "20px",
            mx: "auto",
            maxWidth: "70%",
            my: 5,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                background: "#4c3228",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Centers content vertically
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ color: "white", fontWeight: "600", mt: 2, mb: 1.5 }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="overline_400"
                  sx={{ color: "white", mb: 5 }}
                >
                  Say something to start a chat!
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "flex-start" },
                    rowGap: { xs: "15px", md: "20px", lg: "40px" },
                    mb: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", md: "flex" },
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <Box component={"img"} src="/assets/mail.svg" />
                    <Typography variant="body_500" sx={{ color: "white" }}>
                      koulamrit@gmail.com
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "flex" },
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <Box component={"img"} src="/assets/call.svg" />
                    <Typography variant="body_500" sx={{ color: "white" }}>
                      +91 94848848023
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "flex" },
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <Box component={"img"} src="/assets/location.svg" />
                    <Typography variant="body_500" sx={{ color: "white" }}>
                      Financial District, Gowlidoddy, Hyderabad, Telangana
                      500032
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "5px",
                    mb: 4,
                  }}
                >
                  <Box
                    component={"img"}
                    src="/assets/linkedin.svg"
                    sx={{
                      width: 30,
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  />
                  <Box
                    component={"img"}
                    src="/assets/twitter.svg"
                    sx={{
                      width: 30,
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  />
                  <Box
                    component={"img"}
                    src="/assets/insta.svg"
                    sx={{
                      width: 30,
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  />
                  <Box
                    component={"img"}
                    src="/assets/facebook1.svg"
                    sx={{
                      width: 30,
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={7} sx={{ mt: { sm: 2, md: 0 } }}>
              <ContactForm />
            </Grid>
          </Grid>
          <Box></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
