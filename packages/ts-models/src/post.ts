import { Schema } from "mongoose";
import { IComment } from "./comment";

export interface IPost {
  userid: Schema.Types.ObjectId;
  userName: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
  // comments: [{ type: Schema.Types.ObjectId; ref: "Comment" }];
}
