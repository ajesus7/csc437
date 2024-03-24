import mongoose, { Schema } from "mongoose";

// userid: {
//   _user: { type: Schema.Types.ObjectId, ref: "Profile" },
//   required: true,
// },
const CommentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  commentTime: {
    type: Date, // Explicitly setting to Date type
    default: Date.now,
  },
  commentMessage: {
    type: String,
    required: true,
  },
  SongIDs: [
    {
      type: String, // String identifiers for songs
    },
  ],
});

// const CommentSchema = new mongoose.Schema({
//   _user: {
//     userid: { type: Schema.Types.ObjectId, ref: "Profile" },
//     required: true,
//   },
// });

const Comment = mongoose.model("Comment", CommentSchema);

export default { CommentSchema, Comment };
