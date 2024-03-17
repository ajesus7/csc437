import express, { Request, Response } from "express";
import { IPost } from "../../../ts-models";
import posts from "../services/posts";

const router = express.Router();

// * Creates New Post
router.post("/", (req: Request, res: Response) => {
  const newPost = req.body;

  posts
    .create(newPost)
    .then((post: IPost) => res.status(201).send(post))
    .catch((err) => res.status(500).send(err));
});

// * Get a Specific Post
// TODO do I need to redefine the "/:userid here?"
router.get("/posts", (req, res) => {
  posts
    .getAll() // Assuming .getAll() is the method to fetch all posts; adjust according to your actual method
    .then((allPosts: IPost[] | undefined) => {
      // Use an array type to represent multiple posts
      if (!allPosts || allPosts.length === 0) throw "No posts found";
      else res.json(allPosts); // Send the array of posts
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging purposes
      res.status(404).send("Posts not found");
    });
});

// * Update a Specific Post
router.put("/:userid", (req: Request, res: Response) => {
  const { ObjectId } = req.params;
  const newPost = req.body;

  posts
    .update(ObjectId, newPost)
    .then((post: IPost) => res.json(post))
    .catch((err) => res.status(404).end());
});

export default router;
