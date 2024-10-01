import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  IconButton,
  Box,
  Theme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DisclaimerPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the user has accepted the disclaimer on component mount
  useEffect(() => {
    const hasAccepted = localStorage.getItem("disclaimerAccepted");

    // If not accepted, show the disclaimer popup
    if (!hasAccepted) {
      setOpen(true);
    }
  }, []);

  // Function to handle "Yes" button click
  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    setOpen(false);
  };

  // Function to handle "No" button click
  const handleDecline = () => {
    // Redirect to Google.com
    window.location.replace("https://www.google.com");
  };

  const handleClose = (event: React.MouseEvent, reason: string) => {
    // Prevent closing the dialog on backdrop click or escape key press
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      return; // Do nothing, keep the dialog open
    }
    setOpen(false); // Allow closing if it's a button click or any valid close reason
  };

  const styles = {
    scrollbar: {
      "&::-webkit-scrollbar": {
        width: "8px",
        backgroundColor: "#4c3228", // Background color of the scrollbar
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888", // Color of the scrollbar handle
        borderRadius: "10px", // Rounded corners for the scrollbar handle
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555", // Color of the handle when hovered
      },
      "&::-moz-scrollbar": {
        width: "8px",
        backgroundColor: "#4c3228",
      },
      "&::-moz-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: "10px",
      },
      "&::-moz-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
    },
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="sm"
      sx={(theme: Theme) => ({
        "& .MuiPaper-root": {
          borderRadius: "20px",
          backgroundColor: " #4c3228",
          padding: "22px 10px 22px 24px",
          maxWidth: "70%",
          overflowY: "hidden",
        },
      })}
    >
      <Box
        sx={{
          maxHeight: { xs: "60vh", sm: "80vh" }, // Set max height for content area
          paddingRight: "20px",
          overflowY: "auto", // Allow vertical scrolling for the content
          ...styles.scrollbar, // Apply scrollbar styles here
        }}
      >
        <Typography
          variant="h3"
          sx={(theme: Theme) => ({
            color: theme.palette.common.white,
            mb: 3,
            fontWeight: 800,
            letterSpacing: "1px",
          })}
        >
          DISCLAIMER
        </Typography>

        <Typography
          variant="body_400"
          sx={{ color: "#fff", letterSpacing: "0.05px", lineHeight: "25px" }}
        >
          This website (www.attorney.com) is a resource for informational
          purposes only and is intended, but not promised or guaranteed, to be
          correct and complete. Attorney does not warrant that the information
          contained on this website is accurate or complete, and hereby
          disclaims any and all liability to any person for any loss or damage
          caused by errors or omissions, whether such errors or omissions result
          from negligence, accident or any other cause. Any information obtained
          or downloaded from this website is completely at the user’s volition
          and their own discretion and any further transmission, receipt or use
          of this website would not create any attorney-client relationship. The
          contents of this website do not constitute, and shall not be construed
          as, legal advice or a substitute for legal advice. All material and
          information (except any statutory enactments and/ or judicial
          precedents) on this website is the property of Attorney and no part
          thereof shall be used, without the express prior written consent of
          Attorney.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "20px",
            mt: 4,
          }}
        >
          <Button
            sx={{
              color: "#fff",
              background: "#000",
              borderRadius: "15px",
              padding: "12px 10px",
            }}
            fullWidth
            onClick={handleAccept}
          >
            <Typography variant="body_500">AGREE</Typography>
          </Button>
          <Button
            sx={{
              color: "#fff",
              background: "#000",
              borderRadius: "15px",
              padding: "12px 10px",
            }}
            fullWidth
            onClick={handleDecline}
          >
            <Typography variant="body_500">DISAGREE</Typography>
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DisclaimerPopup;
