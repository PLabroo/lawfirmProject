import { LoadingButton } from "@mui/lab";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FileUpload from "../fileUpload";
import { useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Navigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

interface ArticleFormValues {
  title: string;
  description: string;
  author: string;
  category: string;
  content: string;
}
export default function CreateBlog() {
  const token = localStorage.getItem("token");
  const expiryTime =
    localStorage.getItem("expiryTime") === "null"
      ? 0
      : Number(localStorage.getItem("expiryTime"));
  const currentTime = Date.now();

  const [file, setFile] = useState<File | null>(null);
  const editorRef = useRef<any>(null);
  const [link, setLink] = useState<string>("");

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Short description is required"),
    author: Yup.string().required("Author name is required"),
    category: Yup.string().required("Category is required"),
  });

  const timeCheck = currentTime > expiryTime;

  const handleSubmit = async (
    values: ArticleFormValues,
    { resetForm, setFieldError, setFieldValue }: any
  ) => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      if (!content) {
        setFieldError("content", "Content is required"); // Set error in Formik
        return; // Prevent form submission
      }
      values.content = content; // Assign the content to values
    }

    if (!file) {
      setFieldError("image", "Please upload the image");
      return;
    }
    const payload = {
      ...values,
      image: link,
    };

    try {
      const articleCreationRes = await fetch("/api/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (
        articleCreationRes.status === 401 ||
        articleCreationRes.status === 403
      ) {
        enqueueSnackbar(`Your session expired.Please Login again!!`, {
          variant: "error",
          autoHideDuration: 3000,
        });
        localStorage.removeItem("token");
        localStorage.removeItem("expiryTime");
        return <Navigate to="/auth" />;
      }

      const data = await articleCreationRes.json();
      if (data?.isSuccess) {
        enqueueSnackbar(`Article submitted Successfully!!`, {
          variant: "success",
          autoHideDuration: 3000,
        });
        console.log("Image URL:", data.articles); // Log or use the image URL as needed
      } else {
        enqueueSnackbar(`${data?.message}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      enqueueSnackbar(`Article Submission Failed.${error}`, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } finally {
      resetForm();
      setFile(null);
      setFieldValue("image", "");
      setFieldValue("content", "");
      editorRef.current?.setContent("");
    }
  };

  return token && !timeCheck ? (
    <Box>
      <Box
        component={"img"}
        src="/assets/article.jpg"
        sx={{ width: "100%", height: "50vh" }}
      />
      <Box sx={{ backgroundColor: "white", paddingBottom: 5 }}>
        <Typography
          sx={{
            paddingTop: 4,
            textAlign: "center",
            fontWeight: 900,
            fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "60px" },
            color: "black",
            fontFamily: "cursive",
          }}
        >
          Write Your Article Here
        </Typography>

        <Box sx={{ mt: 5, mx: "auto", width: { xs: "80%", md: "50%" } }}>
          <Formik
            initialValues={{
              title: "",
              description: "",
              author: "",
              category: "",
              content: "",
              image: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, setFieldValue }) => (
              <Form>
                {/* email */}
                <Field name="title">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="title"
                      label="Title"
                      fullWidth
                      error={touched.title && !!errors.title} // Handling error state
                      helperText={
                        touched.title && errors.title ? errors.title : ""
                      }
                      sx={{
                        mb: 4, // Added margin-bottom for spacing between fields
                        borderRadius: "25px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "25px",
                          "&.Mui-focused": {
                            borderColor: "black", // Black border on focus
                            "& fieldset": {
                              borderColor: "black", // Black border on focus
                            },
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "grey", // Default label color
                          "&.Mui-focused": {
                            color: "black", // Label color on focus
                          },
                        },
                      }}
                    />
                  )}
                </Field>

                {/* Description */}
                <Field name="description">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="description"
                      label="Description"
                      fullWidth
                      type="text"
                      error={touched.description && !!errors.description} // Handling error state
                      helperText={
                        touched.description && errors.description
                          ? errors.description
                          : ""
                      }
                      sx={{
                        mb: 4, // Added margin-bottom for spacing
                        borderRadius: "25px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "25px",
                          "&.Mui-focused": {
                            borderColor: "black", // Black border on focus
                            "& fieldset": {
                              borderColor: "black", // Black border on focus
                            },
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "grey", // Default label color
                          "&.Mui-focused": {
                            color: "black", // Label color on focus
                          },
                        },
                      }}
                    />
                  )}
                </Field>

                {/* Author */}
                <Field name="author">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="author"
                      label="Author"
                      fullWidth
                      type="text"
                      error={touched.author && !!errors.author} // Handling error state
                      helperText={
                        touched.author && errors.author ? errors.author : ""
                      }
                      sx={{
                        mb: 4, // Added margin-bottom for spacing
                        borderRadius: "25px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "25px",
                          "&.Mui-focused": {
                            borderColor: "black", // Black border on focus
                            "& fieldset": {
                              borderColor: "black", // Black border on focus
                            },
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "grey", // Default label color
                          "&.Mui-focused": {
                            color: "black", // Label color on focus
                          },
                        },
                      }}
                    />
                  )}
                </Field>

                {/* Category */}
                <Field name="category">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="category"
                      label="Category"
                      fullWidth
                      type="text"
                      error={touched.category && !!errors.category} // Handling error state
                      helperText={
                        touched.category && errors.category
                          ? errors.category
                          : ""
                      }
                      sx={{
                        mb: 4, // Added margin-bottom for spacing
                        borderRadius: "25px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "25px",
                          "&.Mui-focused": {
                            borderColor: "black", // Black border on focus
                            "& fieldset": {
                              borderColor: "black", // Black border on focus
                            },
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "grey", // Default label color
                          "&.Mui-focused": {
                            color: "black", // Label color on focus
                          },
                        },
                      }}
                    />
                  )}
                </Field>

                {/* Content */}
                {/* <Field name="content">
                  {({ field }: { field: any }) => (
                    <>
                      <TextareaAutosize
                        {...field}
                        id="content"
                        aria-label="content"
                        placeholder="Write your article here..."
                        minRows={10}
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: `1px solid ${touched.content && errors.content ? "red" : "grey"}`,
                          borderRadius: "10px",
                          resize: "none",
                          outline: "none",
                          transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "black")}
                        onBlur={(e) => {
                          e.target.style.borderColor =
                            touched.content && errors.content ? "red" : "grey";
                        }}
                      />
                      {touched.content && errors.content && (
                        <Typography
                          variant="overline_400"
                          color="error"
                          sx={{ ml: 1, fontWeight: 500 }}
                        >
                          {errors.content}
                        </Typography>
                      )}
                    </>
                  )}
                </Field> */}

                <Editor
                  tinymceScriptSrc="/tinymce/tinymce.min.js"
                  licenseKey="gpl"
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "preview",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {/* <Button
                  variant="text" // Use 'text' variant to remove border
                  onClick={()=>saveArticle(setFieldValue)}
                  sx={(theme:Theme)=>({
                    color: "white",
                    padding: "4px 6px",
                    borderRadius: "5px",
                    mt: 2,
                    cursor: "pointer", // Ensure cursor is a pointer
                    backgroundColor: "black",
                    "&:hover": {
                      backgroundColor: "black", // Disable hover effect
                      color:'white'
                    }
                  })}
                >
                  <Typography variant="body_500">Save Article</Typography>
                </Button> */}
                {!!errors.content && (
                  <Typography
                    variant="overline_400"
                    color="error"
                    sx={{ ml: 1, mt: 1, fontWeight: 500 }}
                  >
                    {errors.content}
                  </Typography>
                )}

                {/* upload preview image */}

                <FileUpload
                  file={file}
                  setFile={setFile}
                  link={link}
                  setLink={setLink}
                />
                {!!errors.image && (
                  <Typography
                    variant="overline_400"
                    color="error"
                    sx={{ ml: 1, mt: 1, fontWeight: 500 }}
                  >
                    {errors.image}
                  </Typography>
                )}

                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  variant="contained"
                  loadingPosition="start"
                  fullWidth
                  sx={{
                    backgroundColor: isSubmitting ? "#666" : "black",
                    color: "white",
                    mt: 4,
                    paddingY: "12px",
                    fontSize: "14px",
                    minWidth: "auto",
                    borderRadius: "25px",
                    "&.Mui-disabled": {
                      backgroundColor: "#666", // Style for disabled state
                    },
                    "&.hover": {
                      backgroundColor: isSubmitting ? "#666" : "#333", // Disable hover effect if loading
                    },
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Article..." : "Submit"}
                </LoadingButton>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  ) : (
    <Navigate to="/auth" />
  );
}
