import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId, // Using ObjectId for userid
    required: true,
  },
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
  SongRecs: [
    {
      type: String, // String recommendations or identifiers
    },
  ],
});

const Comment = mongoose.model("Comment", CommentSchema);

export default { CommentSchema, Comment };
