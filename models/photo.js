import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  coverImage: {
    type: String,
  },
});

const image = new mongoose.model("image", imageSchema);

export default image;
