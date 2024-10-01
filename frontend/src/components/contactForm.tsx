import {
  Box,
  Button,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";
import { LoadingButton } from '@mui/lab';

export default function ContactForm(): JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:1280px)");
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // const sendEmail = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSending(true);

  //   try {
  //     const res = await emailjs.send(
  //       "service_qzgq94s", // Replace with your EmailJS service ID
  //       "template_t3djn0f", // Replace with your EmailJS template ID
  //       {
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         email: formData.email,
  //         phone: formData.phone,
  //         message: formData.message,
  //       },
  //       "th0A-KVSYM9GlnJTc" // Replace with your EmailJS user ID
  //     );

  //     console.log("RES", res);

  //     enqueueSnackbar("Message sent successfully,Thank You!", {
  //       variant: "success",
  //       autoHideDuration: 3000,
  //     });
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     enqueueSnackbar("Error while sending the message.", {
  //       variant: "error",
  //       autoHideDuration: 3000,
  //     });
  //     console.error("EmailJS error:", error);
  //   } finally {
  //     setIsSending(false);
  //   }
  // };

  const sendEmail = async(e: React.FormEvent)=>{
    e.preventDefault();
    try{
      setIsSending(true);
      const res = await fetch('/api/contactForm',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
      setIsSending(false)
           setFormData({
              name: "",
              subject: "",
              email: "",
              phone: "",
              message: "",
            });
    }
   

    
  }
  return (
    <Box sx={{ padding: "60px" }}>
      <form onSubmit={sendEmail}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            [theme.breakpoints.down(800)]: {
              textAlign: "center",
            },
            mb: 6,
          }}
        >
          <TextField
            id="name"
            label="Name"
            variant="standard"
            fullWidth={isSmallScreen}
            value={formData.name}
            onChange={handleInputChange}
            required
            sx={{
              mb: isSmallScreen ? 2 : 0,
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputLabel-root.Mui-focused": { color: "black" },
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "black" },
            }}
          />
          <TextField
            id="subject"
            label="Subject"
            variant="standard"
            fullWidth={isSmallScreen}
            value={formData.subject}
            onChange={handleInputChange}
            required
            sx={{
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputLabel-root.Mui-focused": { color: "black" },
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "black" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            [theme.breakpoints.down(800)]: {
              textAlign: "center",
            },
            mb: 4,
          }}
        >
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth={isSmallScreen}
            value={formData.email}
            onChange={handleInputChange}
            required
            sx={{
              mb: isSmallScreen ? 2 : 0,
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputLabel-root.Mui-focused": { color: "black" },
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "black" },
            }}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            fullWidth={isSmallScreen}
            value={formData.phone}
            onChange={handleInputChange}
            required
            sx={{
              "& .MuiInputLabel-root": { color: "black" },
              "& .MuiInputLabel-root.Mui-focused": { color: "black" },
              "& .MuiInput-underline:before": { borderBottomColor: "black" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "black",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "black" },
            }}
          />
        </Box>

        <TextField
          id="message"
          label="Message"
          placeholder="Write your message..."
          variant="standard"
          fullWidth
          multiline
          rows={2}
          value={formData.message}
          onChange={handleInputChange}
          required
          sx={{
            mb: 2,
            "& .MuiInputLabel-root": { color: "black" },
            "& .MuiInputLabel-root.Mui-focused": { color: "black" },
            "& .MuiInput-underline:before": { borderBottomColor: "black" },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "black",
            },
            "& .MuiInput-underline:after": { borderBottomColor: "black" },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <LoadingButton
            type="submit"
            loading={isSending}
            variant="contained"
            loadingPosition="start"
            fullWidth
            sx={{
              backgroundColor: isSending ? "#666" : "black",
              color: "white",
              mt: 4,
              paddingY: "12px",
              fontSize: "14px",
              minWidth: "auto",
              "&.Mui-disabled": {
                backgroundColor: "#666", // Style for disabled state
              },
              "&:hover": {
                backgroundColor: isSending ? "#666" : "#333", // Disable hover effect if loading
              },
            }}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
}
