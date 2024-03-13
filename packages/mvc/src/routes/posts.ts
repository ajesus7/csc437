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
router.get("/:userid", (req: Request, res: Response) => {
  const { ObjectId } = req.params;
  posts
    .get()
    .then((post: IPost | undefined) => {
      if (!post) throw "Not found";
      else res.json(post);
    })
    .catch((err) => res.status(404).end());
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
