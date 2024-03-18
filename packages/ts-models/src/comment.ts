// import { ObjectId } from "mongoose";

export interface IComment {
  // _user: ObjectId;
  userName: string;
  commentTime: Date;
  commentMessage: string;
  SongIDs: string[];
}
