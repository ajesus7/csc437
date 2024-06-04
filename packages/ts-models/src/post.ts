import { Types } from "mongoose";
import { IComment } from "./comment";

export interface IPostClient {
  userid: string;
  userName: string;
  profileImage: string;
  profileDescription: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
  // comments: [{ type: Schema.Types.ObjectId; ref: "Comment" }];
}

export interface IPostServer {
  userid: Types.ObjectId;
  userName: string;
  profileImage: string;
  profileDescription: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
}
