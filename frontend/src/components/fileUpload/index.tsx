import React, { useState } from "react";
import { Button, Typography, Box, Theme } from "@mui/material";

const FileUpload = ({
  setFileUploaded,
  file,
  setFile,
}: {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setFileUploaded: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setFileUploaded(selectedFile);
    }
  };

  const handleDelete = () => {
    setFile(null); // Clear the selected file
    setPreviewUrl(""); // Clear the preview URL
    setFileUploaded(null);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <input
        accept="image/*" // Accept only image files
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default input
        id="file-upload"
      />
      {!file && (
        <label htmlFor="file-upload">
          <Button
            component="span"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              border: "1px solid black",
            }}
          >
            <Box
              component={"img"}
              src="/assets/uploadicon.svg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography
              variant="body_500"
              sx={(theme: Theme) => ({
                color: theme.palette.text.primary,
                ml: 1,
                ":hover": { opacity: 0.8 },
              })}
            >
              Upload Image
            </Typography>
          </Button>
        </label>
      )}

      {file && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            borderRadius: "10px",
            p: 1,
            width: "fit-content",
          }}
        >
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "16px",
            }}
          />
          <Typography variant="body_500" sx={{ mr: 2 }}>
            {file.name}
          </Typography>
          <Box
            component={"img"}
            src="/assets/delete.svg"
            sx={{ width: 20, height: 20, cursor: "pointer" }}
            onClick={handleDelete}
          />
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
