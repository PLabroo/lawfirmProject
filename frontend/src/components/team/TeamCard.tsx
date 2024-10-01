import { X, Instagram } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Theme,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TeamCard(props: any): JSX.Element {
  const { member } = props;
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        position: "relative",
        borderRadius: "5px", // Make the card corners rounded
        // overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for a modern look
        "&:hover": {
          transform: "scale(1.05)",
          transition: "0.3s ease",
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          height: { xs: 300, md: 400 },
          backgroundImage: `url(${member.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      />

      {/* Overlay for Text */}
      <CardContent
        sx={{
          position: "absolute",
          bottom: 5,
          width: "90%",
          padding: { xs: "10px 12px 20px 12px", md: "16px 0px 0px 12px" },
          color: "white",
          backdropFilter: "blur(10px)", // Apply blur effect
          backgroundColor: "rgba(67, 68, 67, 0.5)", // Semi-transparent whitish-black background
          borderRadius: "5px", // Optional: rounded corners for a smoother look
          left: "50%", // Position to the center horizontally
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          variant="h2"
          sx={(theme: Theme) => ({
            color: theme.palette.common.white,
            fontFamily: "cursive",
            mb: 1,
          })}
        >
          {member.name}
        </Typography>
        <Typography
          variant="body_500"
          sx={(theme: Theme) => ({
            color: theme.palette.background.default,
            fontFamily: "cursive",
            mb: 0.5,
          })}
        >
          {member.designation}
        </Typography>
        <Typography
          variant="subtitle_500"
          sx={(theme: Theme) => ({
            color: theme.palette.background.default,
            fontFamily: "cursive",
          })}
        >
          {member.experience}
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            ml: -1,
          }}
        >
          <IconButton
            sx={{ color: "white" }}
            component="a"
            href={"#"}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            component="a"
            href={"#"}
            target="_blank"
          >
            <X />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            component="a"
            href={"#"}
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
