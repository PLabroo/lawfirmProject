import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Theme,
  CircularProgress,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Form, Navigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

const FileUpload = ({
  file,
  setFile,
  link,
  setLink,
}: {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const[fileDeletion,setFileDeletion] = useState<boolean>(false);
  const [deleteId,setDeleteId] = useState("");
  const token = localStorage.getItem("token");



  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    const fileData = new FormData();
    if (selectedFile) {
      fileData.append("image", selectedFile);
      try {
        setLoading(true);
        const uploadImgRes = await fetch("/api/file/uploadFile", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: fileData,
        });

        if (uploadImgRes.status === 401 || uploadImgRes.status === 403) {
          enqueueSnackbar(`Your session expired.Please Login again!!`, {
            variant: "error",
            autoHideDuration: 3000,
          });
          localStorage.removeItem("token");
          localStorage.removeItem("expiryTime");
          return <Navigate to="/auth" />;
        }

        const data = await uploadImgRes.json();
        if (data?.link) {
          setFile(selectedFile);
          setPreviewUrl(URL.createObjectURL(selectedFile));
          setDeleteId(data?.data?.deletehash);
          setLink(data?.link);
          enqueueSnackbar(`${data?.message}`, {
            variant: "success",
            autoHideDuration: 3000,
          });
        } else {
          enqueueSnackbar(`${data?.message}`, {
            variant: "error",
            autoHideDuration: 3000,
          });
        }
      } catch (error) {
        enqueueSnackbar(`Uploading File Failed.${error}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async () => {
    try {
      setFileDeletion(true);
      const deleteImage = await fetch(`/api/file/deleteFile/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (deleteImage.status === 401 || deleteImage.status === 403) {
        enqueueSnackbar(`Your session expired.Please Login again!!`, {
          variant: "error",
          autoHideDuration: 3000,
        });
        localStorage.removeItem("token");
        localStorage.removeItem("expiryTime");
        return <Navigate to="/auth" />;
      }

      const data = await deleteImage.json();

      if (data?.isSuccess) {
        setFile(null);
        setPreviewUrl("");
        enqueueSnackbar(`${data?.message}`, {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar(`${data?.message}`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      enqueueSnackbar(`File Deletion failed.${error}`, {
        variant: "error",
        autoHideDuration: 3000,
      });
    }finally{
      setFileDeletion(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <input
        accept="image/*" // Accept only image files
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default input
        id="file-upload"
      />
      {loading && !file && (
        <label htmlFor="file-upload">
          <Button
            component="span"
            sx={{
              ":hover": { backgroundColor: "transparent" },
              border: "1px solid black",
            }}
          >
            <CircularProgress size={20} color="secondary" />
            <Typography
              variant="body_500"
              sx={(theme: Theme) => ({
                color: theme.palette.text.primary,
                ml: 1,
                ":hover": { opacity: 0.8 },
              })}
            >
              Uploading Image...
            </Typography>
          </Button>
        </label>
      )}
      {!loading && !file && (
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
      {fileDeletion && file && (
        <label htmlFor="file-upload">
        <Button
          component="span"
          sx={{
            ":hover": { backgroundColor: "transparent" },
            border: "1px solid black",
          }}
        >
          <CircularProgress size={20} color="secondary" />
          <Typography
            variant="body_500"
            sx={(theme: Theme) => ({
              color: theme.palette.text.primary,
              ml: 1,
              ":hover": { opacity: 0.8 },
            })}
          >
            Deleting Image...
          </Typography>
        </Button>
      </label>
      )}

      {file && !loading && !fileDeletion && (
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
