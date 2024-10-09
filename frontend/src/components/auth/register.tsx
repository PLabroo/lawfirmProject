import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, IconButton, InputAdornment, TextField, Theme, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import * as Yup from "yup";

export default function Register(): JSX.Element {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  });


  const handleSubmit = async(values: { email: string; password: string },{resetForm}:any) => {
    // const delay = await new Promise(resolve => setTimeout(resolve, 100)); 

    const { email, password } = values;
    try {
      const registerRes= await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await registerRes.json();
      console.log('data',data)
      if(data.isSuccess){
      enqueueSnackbar(`User registered successfully`, {
        variant: "success",
        autoHideDuration: 3000,
      })
    }
      else{
        enqueueSnackbar(`User already exists`, {
          variant: "error",
          autoHideDuration: 3000,
        })
      }
    }catch(e){
      console.log(e);
      enqueueSnackbar(`User validation failed`, {
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
    <>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
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
                {isSubmitting ? "Registering In..." : "Register"}
              </LoadingButton>
            </Form>
          )}
        </Formik>

        <Typography variant="body_500" sx={(theme:Theme) => ({color:theme.palette.grey[500],mt:2,textAlign:"center"})}>Or Sign In With These</Typography>

        <Box  sx={{width:'100%',display:"flex",justifyContent:"center",alignItems:'center',mt:2,gap:'40px'}}>
            <Box component={'img'} src="/assets/google.svg" sx={{width:"30px",height:"30px"}}/>
            <Box component={'img'} src="/assets/linkedin.svg" sx={{width:"30px",height:"30px"}}/>
        </Box>
    </>

  );
}
