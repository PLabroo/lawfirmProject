import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login(): JSX.Element {

  const navigate = useNavigate();
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async(values: { email: string; password: string },{resetForm}:any) => {
    const { email, password } = values;
    try {
      const loginRes= await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await loginRes.json();
      if(data?.isSuccess){
      enqueueSnackbar(`Logged In Successfully!!`, {
        variant: "success",
        autoHideDuration: 3000,
      })

      localStorage.setItem("token", data?.token);
      localStorage.setItem("expiryTime",data?.expirationTime);

      if(data?.token){
        navigate("/createArticle");
      }
    }
    else{
        enqueueSnackbar(`${data?.message}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    }catch(e){
      console.log(e);
      enqueueSnackbar(`User credentials wrong!!`, {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
    finally{
      resetForm();
    }
  };

  const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (      
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form >
              {/* email */}
              <Field name="email">
                {({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    id="email"
                    label="Email"
                    fullWidth
                    error={touched.email && !!errors.email} // Handling error state
                    helperText={touched.email && errors.email ? errors.email : ""}
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

              {/* password */}
              <Field name="password">
                {({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    id="password"
                    label="Password"
                    fullWidth
                    type={showPassword?"text":"password"}
                    error={touched.password && !!errors.password} // Handling error state
                    helperText={touched.password && errors.password ? errors.password : ""}
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
                  slotProps={{
                    input: {   
                      endAdornment: (
                          <InputAdornment position="end">
                              <IconButton
                                  onClick={handleClickShowPassword}
                                  edge="end"
                              >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                          </InputAdornment>
                      ),
                    }
                }}
                  />
                )}
              </Field>

              <LoadingButton
                type="submit"
                loading={isSubmitting}
                variant="contained"
                loadingPosition="start"
                fullWidth
                sx={{
                  backgroundColor: isSubmitting ? "#666" : "black",
                  color: "white",
                  mt: 2,
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
                {isSubmitting ? "Logging In..." : "Login"}
              </LoadingButton>
            </Form>
          )}
        </Formik>
  );
}
