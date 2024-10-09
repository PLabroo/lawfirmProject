import { Box, TextField, Typography, useMediaQuery } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';

export default function ContactForm(): JSX.Element {
  const isSmallScreen = useMediaQuery("(max-width:1280px)");
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  };

  

  const sendEmail = async(values:{name:string,subject:string,email:string,phone:string,message:string},{resetForm}:any)=>{
    try{
      const res = await fetch('/api/contactForm',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
      })
      if(res.ok){
      enqueueSnackbar("Message sent successfully,Thank You!", {
              variant: "success",
              autoHideDuration: 3000,
            });
          }
          else{
            enqueueSnackbar("Error while sending the message.", {
              variant: "error",
              autoHideDuration: 3000,
            });
          }

    }catch(error){
      console.log(error)
      enqueueSnackbar("Error while sending the message.", {
              variant: "error",
              autoHideDuration: 3000,
            });
    }
    finally{
      resetForm();
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    subject: Yup.string().required('Subject is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Box sx={{ padding: "60px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting,errors }) => {
          const errorsLength = Object.keys(errors).length>0;
          return (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mb: 6,
                }}
              >
                <Field name="name">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="name"
                      label="Name"
                      variant="standard"
                      fullWidth={isSmallScreen || errorsLength}
                      sx={{
                        mb:1,
                        "& .MuiInputLabel-root": { color: "black" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:after": { borderBottomColor: "black" },
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="name">
                  {(msg) => <Typography color="error">{msg}</Typography>}
                </ErrorMessage>
  
                <Field name="subject">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="subject"
                      label="Subject"
                      variant="standard"
                      fullWidth={isSmallScreen || errorsLength}
                      sx={{
                        mb:1,
                        "& .MuiInputLabel-root": { color: "black" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:after": { borderBottomColor: "black" },
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="subject">
                  {(msg) => <Typography color="error">{msg}</Typography>}
                </ErrorMessage>
              </Box>
  
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mb: 4,
                }}
              >
                <Field name="email">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="email"
                      label="Email"
                      variant="standard"
                      fullWidth={isSmallScreen || errorsLength}
                      sx={{
                        mb:1,
                        "& .MuiInputLabel-root": { color: "black" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:after": { borderBottomColor: "black" },
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="email">
                  {(msg) => <Typography color="error">{msg}</Typography>}
                </ErrorMessage>
  
                <Field name="phone">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      id="phone"
                      label="Phone"
                      variant="standard"
                      fullWidth=  {isSmallScreen || errorsLength}
                      sx={{
                        mb:1,
                        "& .MuiInputLabel-root": { color: "black" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                        "& .MuiInput-underline:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "black" },
                        "& .MuiInput-underline:after": { borderBottomColor: "black" },
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage name="phone">
                  {(msg) => <Typography color="error">{msg}</Typography>}
                </ErrorMessage>
              </Box>
  
              <Field name="message">
                {({ field }: { field: any }) => (
                  <TextField
                    {...field}
                    id="message"
                    label="Message"
                    placeholder="Write your message..."
                    variant="standard"
                    fullWidth
                    multiline
                    rows={2}
                    sx={{
                      "& .MuiInputLabel-root": { color: "black" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                      "& .MuiInput-underline:before": { borderBottomColor: "black" },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "black",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "black",
                      },
                    }}
                  />
                )}
              </Field>
              <ErrorMessage name="message">
                {(msg) => <Typography color="error">{msg}</Typography>}
              </ErrorMessage>
  
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
               <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  variant="contained"
                  loadingPosition="start"
                  fullWidth
                  sx={{
                    backgroundColor:isSubmitting ? "#666" : "black",
                    color:"white",
                    mt:4,
                    paddingY:"12px",
                    fontSize:"14px",
                    minWidth:"auto",
                    "&.Mui-disabled": {
                       backgroundColor:"#666", // Style for disabled state
                     },
                     "&.hover":{
                       backgroundColor:isSubmitting ? "#666":"#333", // Disable hover effect if loading 
                     }
                   }}
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? 'Sending...' : 'Send Message'}
                 </LoadingButton>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Box>
  );
}
