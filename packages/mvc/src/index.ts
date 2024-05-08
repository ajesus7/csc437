import express, { Request, Response } from "express";
import * as path from "path";
import fs from "node:fs/promises";
import cors from "cors";
import { connect } from "./mongoConnect";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";
import posts from "./services/posts";
import SpotifyService from "./services/spotifySearch";
import dotenv from "dotenv";

import { PostModel } from "./mongo/post";
import { IPost } from "../../ts-models";
import mongoose from "mongoose";

const app = express();

let dist: string | undefined;
let frontend: string | undefined;
dotenv.config();

const { SERVER_URL } = process.env;

try {
  frontend = require.resolve("lit-frontend");
  dist = path.resolve(frontend, "..", "..");
  console.log("Serving lit-frontend from", dist);
} catch (error: any) {
  console.log("Cannot find static assets in lit-frontend", error.code);
}

connect("vibing");

if (dist) app.use(express.static(dist));
app.use(express.json({ limit: "500kb" }));
app.use(cors());

app.options("*", cors());

app.post("/login", loginUser);
app.post("/signup", registerUser);
app.use("/api", apiRouter);

// Base directory for the built frontend files
const distPath = path.resolve(__dirname, "..", "..", "lit-frontend", "dist");

// Serve static files from 'dist'
app.use(express.static(distPath));

// TODO The post endpoints should be in api/posts but I couldn't get that to work... authentication issue (401)
app.get("/posts", (req, res) => {
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

app.get("/comments/:postid", async (req, res) => {
  const postId = req.params.postid;
  console.log("post id where comment was added, ", postId);
  try {
    // Assuming you have a method in your posts service or directly using Mongoose to fetch comments
    const postWithComments = await PostModel.findById(postId).populate(
      "comments"
    );
    // Assuming 'comments' is a field in your PostModel that references comment documents

    if (
      !postWithComments ||
      !postWithComments.comments ||
      postWithComments.comments.length === 0
    ) {
      return res.status(404).send("No comments found for this post");
    }

    res.json(postWithComments.comments); // Send back the comments
  } catch (err) {
    console.error("Error fetching comments for post:", postId, err);
    res.status(500).send("Error fetching comments");
  }
});

// * Creates New Post
app.post("/posts", async (req: Request, res: Response) => {
  try {
    //grab the data from req.body
    const newPostData: IPost = req.body;

    //create a document based on the mongoose model imported
    const newPost = await PostModel.create(newPostData);
    res.status(201).send(newPost); // Send the created post back
  } catch (err) {
    console.error("Error creating new post: ", err);
    res.status(500).send(err);
  }
});

// TODO TESTING PUSH COMMENT
app.put("/posts/:postid", (req, res) => {
  const postid = req.params.postid;
  const newComment = req.body; // Assuming the entire new comment object is sent in the body

  console.log(newComment);
  // Creating the update operation to push the new comment into the comments array
  const updateOperation = {
    $push: { comments: newComment },
  };

  // Directly using Mongoose's findOneAndUpdate within the route handler
  PostModel.findOneAndUpdate({ _id: postid }, updateOperation, { new: true })
    .then((updatedPost) => {
      if (!updatedPost) {
        return res.status(404).send("Post not found");
      }
      res.json(updatedPost); // Send the updated post as response, including the new comment
    })
    .catch((err) => {
      console.error("Error adding comment:", err);
      res.status(500).send(err);
    });
});

// SPA fallback: Serve 'index.html' for non-file requests (e.g., navigation routes)
app.get("*", (req, res) => {
  // Check if the request is for a file (by looking for a '.' in the last URI segment)
  if (/\.[^\/]+$/.test(req.path)) {
    // If the request is for a file that wasn't found (e.g., .css, .js), return a 404
    res.status(404).send("Not found");
  } else {
    // For navigation requests, serve 'index.html' from 'dist/app'
    res.sendFile(path.join(distPath, "app", "index.html"), (err) => {
      if (err) {
        console.error("Error serving index.html:", err);
        res.status(500).send("Server error");
      }
    });
  }
});

// ! TEST IF BACKEND IS WORKING
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await mongoose.connection.db.admin().serverStatus();
    res.send({ dbStatus: "Connected", version: result.version });
  } catch (error) {
    res.status(500).send({ dbStatus: "Disconnected", error: error.message });
  }
});

app.listen(() => {
  console.log(`Server listening on ${SERVER_URL}`);
});
