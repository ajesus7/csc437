import { ObjectId } from "mongoose";

export interface IComment {
  userid: ObjectId;
  userName: string;
  commentTime: Date;
  commentMessage: string;
  SongIDs: string[];
  SongRecs: string[];
}
