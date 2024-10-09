import { Box, Tab, Tabs, Theme, Typography } from "@mui/material";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Auth(): JSX.Element {
  const [value, setValue] = useState("login");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        background: "white",
        gap: "20px",
      }}
    >
      <Box
        component={"img"}
        src="/assets/login.jpg"
        sx={{
          width: { xs: "100vw", md: "50vw" },
          height: { xs: "50vh", md: "100vh" },
          display:{xs:"none",md:"block"},
        }}
      />
      <Box
        sx={{
          width: { xs: "100vw", md: "50vw" },
          height: { xs: "100vh", md: "100vh" },
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" ,display:{xs:"block",md:"none"},mb:4}}>Please Authenticate Yourself</Typography>
        <Box
          sx={(theme: Theme) => ({
            border: `1px solid ${theme.palette.text.secondary}B2`,
            borderRadius: "55px",
            mb: "45px",
            width: "70%",
          })}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="authentication tabs"
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              label={
                <Typography
                  variant="body_500"
                  sx={(theme: Theme) => ({
                    color:
                      value === "login"
                        ? theme.palette.common.white
                        : theme.palette.text.primary,
                    fontSize: "18px",
                  })}
                >
                  Login
                </Typography>
              }
              sx={(theme: Theme) => ({
                backgroundColor:
                  value === "login"
                    ? theme.palette.text.primary
                    : theme.palette.common.white,
                borderRadius: "55px",
              })}
              value="login"
            />
            <Tab
              label={
                <Typography
                  variant="body_500"
                  sx={(theme: Theme) => ({
                    color:
                      value === "register"
                        ? theme.palette.common.white
                        : theme.palette.text.primary,
                    fontSize: "18px",
                  })}
                >
                  Register
                </Typography>
              }
              sx={(theme: Theme) => ({
                backgroundColor:
                  value === "register"
                    ? theme.palette.text.primary
                    : theme.palette.common.white,
                borderRadius: "55px",
              })}
              value="register"
            />
          </Tabs>
        </Box>
        <Box sx={{width:'70%'}}>
        {value === "login" && <Login />}
        {value === "register" && <Register />}
        </Box>
      </Box>
    </Box>
  );
}
