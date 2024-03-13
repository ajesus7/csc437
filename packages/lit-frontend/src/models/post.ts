import { ObjectId } from "mongoose";
import IComment from "./comment";

interface IPost {
  userid: ObjectId;
  userName: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
}

export default IPost;
