import { useEffect, useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import {
  Box,
  Button,
  CircularProgress,
  Theme,
  Typography,
} from "@mui/material";

export default function Blogs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/articlesList");
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);
  return (
    <>
      <Header />
      {loading && (
        <Box
          sx={{
            height: "100vh",
            paddingTop: 10,
            paddingBottom: 20,
            px: 4,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
      {!loading && (
        <Box
          sx={{
            paddingTop: 10,
            paddingBottom: 6,
            px: 4,
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 800,
              textAlign: "center",
              mb: 5,
            }}
          >
            Blogs
          </Typography>

            {/* Single Latest Article */}
            <Box sx={{mb:15}}>
          <Box
            component={"img"}
            src="/assets/article.jpg"
            sx={{
              width: "70%",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "400px",
              position: "relative",
              borderRadius: "15px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              borderRadius: "15px",
              backgroundColor: "white",
              top: "65%",
              left: "20%",
              boxShadow: "0 4px 4px rgba(0,0,0,0.5)",
              padding: "20px",
              width: "40%", // Set a specific width
              maxWidth: "400px", // Optional max width
              overflow: "hidden", // Hide overflow
            }}
          >
            <Button
              sx={{
                padding: "3px 8px",
                backgroundColor: "#4c3228",
                color: "white",
                mb: 2,
                borderRadius: "25px",
                ":hover": {
                  backgroundColor: "#4c3228",
                  color: "white",
                  cursor: "none",
                },
              }}
            >
              <Typography variant="body_500">Technology</Typography>
            </Button>
            <Typography
              // variant="body_500"
              sx={{
                overflowWrap: "break-word", // Break long words if necessar
                fontSize: { xs: "14px", sm: "14px", md: "18px", lg: "20px" }, // Responsive font size
                fontWeight: 800,
                letterSpacing: "1px",
                fontFamily: "cursive",
                mb: 2,
              }}
            >
              The Impact Of Technology On Workplace:How Technology Is Changing
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body_500"
                sx={(theme: Theme) => ({
                  color: theme.palette.grey[500],
                  fontFamily: "Work Sans",
                })}
              >
                Jason Brown
              </Typography>
              <Typography
                variant="body_500"
                sx={(theme: Theme) => ({
                  color: theme.palette.grey[500],
                  fontFamily: "Work Sans",
                })}
              >
                August 20,2024
              </Typography>
            </Box>
          </Box>
            </Box>
        </Box>
      )}
      <Footer />
    </>
  );
}
