import { Schema, Model, Document, model } from "mongoose";
import CommentSchema from "./comment";
import { IPost } from "../../../ts-models";
import { ObjectId } from "mongodb";

const postSchema = new Schema<IPost>({
  userid: {
    type: ObjectId, // Using ObjectId for userid
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
  comments: [
    {
      type: Schema.Types.ObjectId, // Defines a reference to another document
      ref: "Comment", // The name of the model you're referring to
    },
  ],
});

// Create models from the schemas
const postModel = model<IPost>("Post", postSchema);

export default postModel;
