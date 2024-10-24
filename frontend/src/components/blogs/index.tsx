import { useEffect, useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Theme,
  Typography,
} from "@mui/material";
import { formatDate } from "../../utils";
import { motion } from "framer-motion";

interface Article {
  title: string;
  description: string;
  author: string;
  category: string;
  image: string;
  date: string;
}
interface ArticleListRes {
  isSuccess: boolean;
  message: string;
  article: Array<Article>;
}



export default function Blogs() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ArticleListRes>({} as ArticleListRes);

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

  const firstArticle = {
    title: data?.article?.[0]?.title,
    description: data?.article?.[0]?.description,
    author: data?.article?.[0]?.author,
    category: data?.article?.[0]?.category,
    image: data?.article?.[0]?.image,
    date: data?.article?.[0]?.date,
  };
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
      {!loading &&
        (data.article?.length === 0 ? (
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',minHeight:'53vh'}}>
            <Typography variant="h1" sx={{backgroundColor:'yellow',width:'fit-content',padding:2}}>Blogs to be out very soon!!</Typography>
          </Box>
        ) : (

          // Add motion to the Box components and other elements that you want to animate
          <Box
            component={motion.div}
            sx={{
              paddingTop: 10,
              paddingBottom: 6,
              px: 4,
              backgroundColor: "white",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            <Box
              component={motion.div}
              sx={{ mb: 15 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component={"img"}
                src={firstArticle?.image}
                alt="image"
                sx={{
                  width: "80%",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "400px",
                  position: "relative",
                  borderRadius: "15px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <Box
                component={motion.div}
                sx={{
                  position: "absolute",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  top: "65%",
                  left: "20%",
                  boxShadow: "4px 4px 4px rgba(0,0,0,0.5)",
                  padding: "15px 20px",
                  width: "40%",
                  maxWidth: "500px",
                  overflow: "hidden",
                  maxHeight: "200px",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Button
                  sx={{
                    padding: "3px 8px",
                    backgroundColor: "#4c3228",
                    color: "white",
                    mb: 2,
                    borderRadius: "10px",
                    ":hover": {
                      backgroundColor: "#4c3228",
                      color: "white",
                      cursor: "none",
                    },
                  }}
                >
                  <Typography variant="body_500">
                    {firstArticle.category}
                  </Typography>
                </Button>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                      maxHeight: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      fontWeight: 800,
                    },
                  }}
                >
                  {`${firstArticle.title}: ${firstArticle.description}`}
                </Typography>
          
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body_500"
                    sx={(theme) => ({
                      color: theme.palette.grey[500],
                      fontFamily: "Work Sans",
                    })}
                  >
                    {firstArticle.author}
                  </Typography>
                  <Typography
                    variant="body_500"
                    sx={(theme) => ({
                      color: theme.palette.grey[500],
                      fontFamily: "Work Sans",
                    })}
                  >
                    {formatDate(firstArticle?.date)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          
            {/* Other Articles */}
            <Box
              component={motion.div}
              sx={{ mt: 2, width: "80%", mx: "auto" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "22px", md: "30px" },
                  fontWeight: 800,
                  mb: 6,
                }}
              >
                Other Top Articles
              </Typography>
          
              <Grid container rowSpacing={10} columnSpacing={3}>
                {data?.article?.slice(1).map((article, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        maxWidth: 345,
                        minHeight: 380,
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                        cursor: "pointer",
                        boxShadow: "4px 4px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      <CardMedia sx={{ height: 200 }} image={article.image} title={article.image} />
                      <CardContent>
                        <Typography
                          variant="subtitle_500"
                          sx={{
                            padding: "5px 10px",
                            backgroundColor: "#4c3228",
                            color: "white",
                            borderRadius: "10px",
                            width: "fit-content",
                            mb: 2,
                          }}
                        >
                          {article.category}
                        </Typography>
                        <Typography
                          variant="body_500"
                          sx={{
                            fontWeight: "600",
                            fontFamily: "cursive",
                            maxHeight: "70px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                          }}
                        >
                          {`${article.title}: ${article.description}`}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          columnGap: "10px",
                          alignItems: "center",
                          padding: "5px 10px",
                          mt: -1,
                        }}
                      >
                        <Typography
                          variant="body_500"
                          sx={{
                            color: "#97989F",
                            fontFamily: "monospace",
                            fontWeight: "800",
                            ml: 0.5,
                          }}
                        >
                          {article.author}
                        </Typography>
                        <Typography
                          variant="body_500"
                          sx={{
                            color: "#97989F",
                            fontFamily: "monospace",
                            fontWeight: "800",
                          }}
                        >
                          {formatDate(article?.date)}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>          
        ))}
      <Footer />
    </>
  );
}
