import {
  Box,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Slide,
  Theme,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export default function Header(): JSX.Element {
  const history = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerLinks = [
    {
      title: "Career",
      to: "/career",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Team",
      to: "/team",
    },
    {
      title: "Services",
      to: "/services",
    },
  ];

  const hamburgerLinks = [
    ...headerLinks,
    { title: "Get In Contact With Us", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const landingPagePathname = location.pathname;

  return (
    <>
      <Box
        sx={{
          position: isScrolled || landingPagePathname !== "/" ? "fixed" : "relative", // Fixed after scroll
          top: 0,
          width: "100%",
          backgroundColor:
            isScrolled || landingPagePathname !== "/" ? "#000" : "transparent", // Black background after scroll
          transition: "background-color 0.3s ease", // Smooth transition
          zIndex: 10, // Make sure it stays on top
        }}
      >
        <Hidden mdDown>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "15px 0px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {/* First Box */}
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={() => history("/")}
              >
                <Box
                  component="img"
                  src="/assets/advocare.svg"
                  sx={{ width: 40, height: 40 }}
                  // bgcolor="#fff"
                />
                <Typography
                  variant="h3"
                  sx={(theme) => ({ color: theme.palette.common.white })}
                >
                  Attorney{" "}
                </Typography>
              </Box>
            </Grid>

            {/* Second Box */}
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                {headerLinks.map((link) => (
                  <Typography
                    key={link.title}
                    sx={(theme) => ({
                      position: "relative",
                      color: theme.palette.common.white,
                      fontWeight: "400",
                      cursor: "pointer",
                      letterSpacing: "0.05px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "3px",
                        bottom: "-5px",
                        left: "0",
                        backgroundColor: theme.palette.common.white,
                        transition: "width 0.3s ease-in-out",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    })}
                    variant="body_500"
                    onClick={() => history(link.to)}
                  >
                    {link.title}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Third Box */}
            <Grid item xs={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
                onClick={() => history("/contact")}
              >
                <Typography
                  variant="body_500"
                  sx={(theme) => ({
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.common.white,
                    fontWeight: "400",
                    cursor: "pointer",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "3px",
                      bottom: "-5px",
                      left: "0",
                      backgroundColor: theme.palette.common.white,
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  })}
                >
                  Get In Touch With Us
                  <ArrowForwardIcon
                    sx={(theme: Theme) => ({
                      color: "theme.palette.common.white",
                      marginLeft: "5px",
                    })}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                cursor: "pointer",
              }}
              onClick={() => history("/")}
            >
              <Box
                component="img"
                src="/assets/advocare.svg"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
                // bgcolor="#fff"
              />
              <Typography
                variant="h1"
                sx={(theme) => ({ color: theme.palette.common.white })}
              >
                Attorney{" "}
              </Typography>
            </Box>
            <Box
              component={"img"}
              sx={{
                border: "1px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                cursor: "pointer",
              }}
              src={
                isDrawerOpen ? "/assets/closeIcon.svg" : "/assets/hamburger.svg"
              }
              onClick={handleDrawer}
            />
          </Box>
        </Hidden>
      </Box>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawer}
        anchor="top"
        ModalProps={{
          keepMounted: true, // Keep it mounted for smooth transitions
        }}
        transitionDuration={{ enter: 500, exit: 500 }} // Set enter and exit durations
        PaperProps={{
          sx: {
            width: "calc(100vw - 17px)",
            maxWidth: "100%",
            boxSizing: "border-box",
            borderBottomLeftRadius: "45px",
            borderBottomRightRadius: "45px",
            backgroundColor: "#000",
            padding: "15px",
            marginTop: "15px",
            textAlign: "center",
            overflow: "hidden",
          },
        }}
      >
        <Slide
          direction="down"
          in={isDrawerOpen}
          mountOnEnter
          unmountOnExit
          timeout={500} // Set timeout for smooth entry/exit transitions
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0px 10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                  cursor: "pointer",
                }}
                onClick={() => history("/")}
              >
                <Box
                  component="img"
                  src="/assets/advocare.svg"
                  sx={{ width: 40, height: 40 }}
                />
                <Typography
                  variant="h1"
                  sx={(theme) => ({ color: theme.palette.common.white })}
                >
                  Attorney{" "}
                </Typography>
              </Box>
              <Box
                component={"img"}
                sx={{
                  border: "1px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px",
                  cursor: "pointer",
                }}
                src={
                  isDrawerOpen
                    ? "/assets/closeIcon.svg"
                    : "/assets/hamburger.svg"
                }
                onClick={handleDrawer}
              />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <List>
                {hamburgerLinks.map((link, index) => (
                  <ListItem
                    key={link.title}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => history(link.to)}
                  >
                    <Typography
                      variant="h1"
                      sx={(theme) => ({
                        position: "relative",
                        fontWeight: "400",
                        color: theme.palette.common.white,
                        cursor: "pointer",
                        letterSpacing: "1px",
                        fontSize: "16px !important",
                        marginTop: index === 0 ? "15px" : "50px",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "0",
                          height: "3px",
                          bottom: "-5px",
                          left: "0",
                          backgroundColor: theme.palette.common.white,
                          transition: "width 0.3s ease-in-out",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      })}
                    >
                      {link.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Slide>
      </Drawer>
    </>
  );
}
