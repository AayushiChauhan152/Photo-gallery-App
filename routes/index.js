import express from "express";
import multer from "multer";
import imgSchema from "../models/photo.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limit: { fileSize: 1000000 * 100 },
});

router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  //store into database
  const file = await imgSchema.create({
    coverImage: `/uploads/${req.file.filename}`,
  });

  res.redirect("/");
});

router.get("/Gallery", async (req, res) => {
  const allphotos = await imgSchema.find({});

  res.render("photogallery.ejs", {
    photos: allphotos,
  });
});

export default router;
