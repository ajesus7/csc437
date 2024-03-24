import { Document } from "mongoose";
import { IPost } from "../../../ts-models";
import { PostModel } from "../mongo/post"; // Adjust the path as necessary

function index(): Promise<IPost[]> {
  return PostModel.find();
}

function get(): Promise<IPost> {
  return PostModel.find()
    .then((list) => list[0])
    .catch((err) => {
      throw `No Posts found`;
    });
}

function getAll(): Promise<IPost[]> {
  return PostModel.find()
    .then((list) => {
      if (!list.length) throw `No Posts found`;
      return list; // Return the entire list of posts
    })
    .catch((err) => {
      throw new Error(`No Posts found: ${err}`);
    });
}

function create(post: IPost): Promise<IPost> {
  const p = new PostModel(post);
  return p.save();
}

function update(ObjectId: String, updateData: any): Promise<IPost> {
  return new Promise((resolve, reject) => {
    // Correctly using the _id field to find the document
    PostModel.findOneAndUpdate({ _id: ObjectId }, updateData, { new: true })
      .then((updatedPost) => {
        if (updatedPost) resolve(updatedPost);
        else reject("Failed to update post");
      })
      .catch((err) => reject(err));
  });
}

export default { index, get, create, update, getAll };
