import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function NewsLetter(): JSX.Element {
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h2" sx={{ mb: 2, mt: { xs: 2, md: -2 } }}>
        Newsletter
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          placeholder="Enter your email..."
          size="small"
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
          }} // Adjust to fit your design
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ padding: "12px", backgroundColor: "#4c3228" }}
        >
          <Typography variant="h2" sx={{ color: "#fff" }}>
            Subscribe
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
}
