import express, { Request, Response } from "express";
import { IPost } from "../../../ts-models";
import posts from "../services/posts";
import { update } from "../services/posts";

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
router.put("/:postid", (req, res) => {
  const postid = req.params.postid;
  const newComment = req.body; // Assuming the new comment is the body of the request

  // Creating the update operation to push the new comment into the comments array
  const updateOperation = {
    $push: { comments: newComment },
  };

  // Using the updated function to append a new comment
  update(postid, updateOperation)
    .then((updatedPost: any) => res.json(updatedPost))
    .catch((err: any) => res.status(500).send(err));
});

export default router;
