import { ObjectId } from "mongoose";
import IComment from "./comment";

interface IPost {
  _id: ObjectId;
  userid: ObjectId;
  userName: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
}

export default IPost;
