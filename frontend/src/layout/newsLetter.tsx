import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { emailRegex } from "../utils";

export default function NewsLetter(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setError("Email is required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if(!emailRegex.test(email)){
      setError("Invalid email address");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    try {
      setLoading(true);
      const newsLetterRes = await fetch("/api/subscribeToNewsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      
      const data = await newsLetterRes.json();
      if (data?.isSuccess) {
        enqueueSnackbar(`${data.message}`, {
          variant: "success",
          autoHideDuration: 3000,
        });
      }
      else{
        enqueueSnackbar(`${data.message}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (e) {
      enqueueSnackbar(`${e}`, { variant: "error", autoHideDuration: 3000 });
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h2" sx={{ mb: 2, mt: { xs: 2, md: -2 } }}>
        Newsletter
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          placeholder="Enter your email..."
          size="small"
          value={email} // Bind state to input value
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          InputProps={{
            sx: {
              padding: "4px",
            },
          }}
          sx={{
            mb: 2,
            backgroundColor: "#fff",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused": {
                backgroundColor: "#fff",
                borderRadius: "10px",
              },
            },
          }}
        />
        <Button
          type="submit" // Set button type to submit
          fullWidth
          variant="contained"
          sx={{ padding: "12px", backgroundColor: "#4c3228",opacity:loading?0.7:1 }}
        >
          <Typography variant="h2" sx={{ color: "#fff" }}>
            {loading ? "Subscribing..." : "Subscribe"}
          </Typography>
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Grid>
  );
}
