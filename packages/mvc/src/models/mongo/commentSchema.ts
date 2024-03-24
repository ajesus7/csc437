import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  // userid: {
  //   _user: { type: Schema.Types.ObjectId, ref: "Profile" },
  //   required: true,
  // },
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
  spotifyTrackIds: [
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
