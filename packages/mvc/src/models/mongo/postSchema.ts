import mongoose from "mongoose";
import CommentSchema from "./commentSchema";

const PostSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId, // Using ObjectId for userid
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  postTime: {
    type: Date, // Explicitly setting to Date type
    default: Date.now,
  },
  postMessage: {
    type: String,
    required: true,
  },
  comments: [CommentSchema], // List of adjusted Comment objects
});

// Create models from the schemas
const Post = mongoose.model("Post", PostSchema);

export default { PostSchema, Post };
