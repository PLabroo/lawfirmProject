const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const FormData = require("form-data");

let accessToken = null;
exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res
        .status(400)
        .json({ error: "No file uploaded or file is empty" });
    }

    const imgurBodyData = new URLSearchParams({
      refresh_token: process.env.REFRESH_TOKEN,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "refresh_token",
    });

    const imgurResponse = await fetch("https://api.imgur.com/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: imgurBodyData.toString(),
    });

    const data = await imgurResponse.json();

    if (data?.access_token) {
      accessToken = data?.access_token;
      const form = new FormData();

      form.append("image", req.file.buffer, {
        filename: req.file.originalname,
      }); // Include filename

      const imageUploadRes = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // No Content-Type header
        },
        body: form,
      });

      const fileRes = await imageUploadRes.json();

      if (!imageUploadRes.ok) {
        throw new Error(`File upload failed! ${fileRes.data.error}`);
      }

      res
        .status(200)
        .json({
          isSuccess: true,
          message: "File uploaded successfully!",
          data: fileRes?.data,
          link: fileRes?.data?.link,
        });
    } else {
      throw new Error("Could not generate access token!!");
    }
  } catch (error) {
    console.log("ERROR", error);
    next(error);
  }
};

exports.deleteFile = async (req, res, next) => {
  try {
    const { deleteId } = req.params;

    const deleteImgRes = await fetch(
      `https://api.imgur.com/3/image/${deleteId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // No Content-Type header
        },
      }
    );

    const deleteRes = await deleteImgRes.json();
    if (deleteRes?.success) {
      res
        .status(200)
        .json({ isSuccess: true, message: "File deleted successfully!" });
    } else {
      throw new Error("Could not delete file!!");
    }
  } catch (e) {
    console.log("e", e);
    next(e);
  }
};
