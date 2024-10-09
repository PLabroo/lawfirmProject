import { Box, Card, Grid, Typography } from "@mui/material";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Amrit Koul",
    designation: "Advocate",
    experience: "Formely worked under CM Koul",
    image:
      "https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    socialMedialinks: [
      {
        linkedin: "https://www.linkedin.com/in/amrit-koul/",
        instagram: "https://www.instagram.com/amritkoul/",
        twitter: "https://twitter.com/amritkoul",
      },
    ],
  },
  {
    name: "Prateek Labroo",
    designation: "Software Engineer",
    experience: "Formely worked under CM Koul",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    socialMedialinks: [
      {
        linkedin: "https://www.linkedin.com/in/amrit-koul/",
        instagram: "https://www.instagram.com/amritkoul/",
        twitter: "https://twitter.com/amritkoul",
      },
    ],
  },
  {
    name: "Pulkit Zadoo",
    designation: "Software Engineer",
    experience: "Formely worked under CM Koul",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWVufGVufDB8fDB8fHww",
    socialMedialinks: [
      {
        linkedin: "https://www.linkedin.com/in/amrit-koul/",
        instagram: "https://www.instagram.com/amritkoul/",
        twitter: "https://twitter.com/amritkoul",
      },
    ],
  },
  {
    name: "Kavisha Pandita",
    designation: "Advocate",
    experience: "Formely worked under CM Koul",
    image:
      "https://plus.unsplash.com/premium_photo-1661778544419-41b124812d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
    socialMedialinks: [
      {
        linkedin: "https://www.linkedin.com/in/amrit-koul/",
        instagram: "https://www.instagram.com/amritkoul/",
        twitter: "https://twitter.com/amritkoul",
      },
    ],
  },
];
export default function Team(): JSX.Element {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "#E8E8E8", px: 4,py:10 }}>
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              mb: 1.5,
              fontWeight: 800,
              fontSize: { lg: "32px", sm: "26px", xs: "24px" },
            }}
          >
            Meet Our Team
          </Typography>
          <Typography
            variant="body_500"
            sx={{ textAlign: "center", color: "lightblack" }}
          >
            We are a team of like-minded people all working towards one goal{" "}
            <br />- Making India a better place to live
          </Typography>
        </Box>
        <Box sx={{ paddingX: 2, paddingY: 4 }}>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {/* Card with image and overlay */}
                <TeamCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Box sx={{ textAlign: "center", paddingTop: 4, paddingBottom: 6 }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                mb: 1.5,
                fontWeight: 800,
                fontSize: { lg: "32px", sm: "26px", xs: "24px" },
              }}
            >
              Our Values{" "}
            </Typography>
            <Typography
              variant="body_500"
              sx={{ textAlign: "center", color: "lightblack" }}
            >
              Our shared values keeps us connected and guide as one team
            </Typography>
          </Box>

          <Grid
            container
            columnSpacing={2}
            rowSpacing={4}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/smiley.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Care About Our Team
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                Understand what matters to our clients.Give them what they need
                for their best work
              </Typography>
            </Grid>

            {/* 2nd */}

            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/heart.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Be Excellent To Each Other
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                No games no bullshit,we rely on our peers to improve.Be Open,be
                honest.
              </Typography>
            </Grid>

            {/* 3rd */}
            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/star.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Pride In What We Do
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                Value quality and integrity in everything we do.At all times.No
                exceptions.
              </Typography>
            </Grid>

            {/* 4th */}

            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/customer.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Dont Miss The Customer
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                Understand client's stated and unstated needs.Make them higly
                successful
              </Typography>
            </Grid>

            {/* 5th */}
            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/flag.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Do The Impossible
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                Be energized by difficult problems.
              </Typography>
            </Grid>

            {/* 6th */}
            <Grid item xs={12} sm={6} md={4}>
              <Box component={"img"} src={"/assets/navigation.svg"} />
              <Typography variant="h3" sx={{ mt: 2 }}>
                Sweat The Small Stuff
              </Typography>
              <Typography
                variant="body_500"
                sx={{
                  maxWidth: { xs: "300px", md: "400px" },
                  mx: "auto",
                  mt: 1,
                }}
              >
                We believe the best results come from the best attention to
                detail.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
