import { ObjectId } from "mongoose";

interface IComment {
  userid: ObjectId;
  userName: string;
  commentTime: Date;
  commentMessage: string;
  SongIDs: string[];
  SongRecs: string[];
}

export default IComment;
