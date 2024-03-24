// import { ObjectId, Schema } from "mongoose";
import { IComment } from "./comment";

export interface IPost {
  // userid: ObjectId;
  userName: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
  // comments: [{ type: Schema.Types.ObjectId; ref: "Comment" }];
}
