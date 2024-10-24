import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { formatDate } from "../../utils";

export default function IndividualBlog(): JSX.Element {
  const location = useLocation();
  const { title, description, author, category, image, date,content } = location.state;

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "white", paddingY: 10 }}>
        <Box sx={{ width: "70%", mx: "auto" }}>
          {/* Category */}
          <Typography
            variant="body_500"
            sx={{
              padding: "10px",
              backgroundColor: "#4c3228",
              color: "white",
              width: "fit-content",
              mt: 5,
              mb: 3,
              borderRadius: "5px",
            }}
          >
            {category}
          </Typography>

          {/* Title */}
          <Typography
            sx={{
              letterSpacing: "1px",
              lineHeight: "1.3",
              fontFamily: "Times New Roman",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "22px",
                lg: "26px",
                fontWeight: 800,
              },
            }}
          >
            {`${title}`}
          </Typography>

          {/* Description */}
          <Typography
            variant="body_500"
            sx={{ letterSpacing: "0.5px", fontFamily: "cursive", mt: 1 }}
          >
            {`- ${description}`}
          </Typography>

          {/* Author and Date */}

          <Box
            sx={{
              display: "flex",
              columnGap: "30px",
              alignItems: "center",
              mt:3
            }}
          >
            <Typography
              variant="body_500"
              sx={{
                color: "#97989F",
                fontFamily: "monospace",
                fontWeight: "800",
              }}
            >
              {author}
            </Typography>
            <Typography
              variant="body_500"
              sx={{
                color: "#97989F",
                fontFamily: "monospace",
                fontWeight: "800",
              }}
            >
              {formatDate(date)}
            </Typography>
          </Box>

          {/* Image */}
          <Box component={'img'} src={image} sx={{ width: "100%", height: "300px", mt: 3,borderRadius:"12px",objectFit:"cover" }}/>

          {/* Content */}
          <Box
        sx={{
            mt:5
        }}
        dangerouslySetInnerHTML={{ __html: content }} // Render HTML content
      />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
