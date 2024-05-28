import express, { Request, Response } from "express";
import * as path from "path";
import cors from "cors";
import { connect } from "./mongoConnect";
import { loginUser, registerUser } from "./auth";
import apiRouter from "./routes/api";
import posts from "./services/posts";
import profileService from "./services/profiles";
import dotenv from "dotenv";
import { ProfileModel } from "./mongo/profile";
import { PostModel } from "./mongo/post";
import { IPost, TrackObject } from "../../ts-models";
import { Profile } from "../../ts-models/src/profile";
import mongoose from "mongoose";
import { Server as SocketIOServer, Socket } from "socket.io";

// Initialize dotenv to load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Create an HTTP server to integrate with Socket.io
const httpServer = require("http").createServer(app);

// Initialize Socket.io with the HTTP server
const { Server } = require("socket.io");
const io: SocketIOServer = new Server(httpServer, {
  cors: { origin: "*" },
});

// Track connected users
const users: Map<string, UserDetails> = new Map();

export interface UserDetails {
  name: string;
  profilePic: string;
}

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  // Handle receiving user details on connection
  socket.on("userDetails", (userDetails: UserDetails) => {
    users.set(socket.id, userDetails);
    io.emit("users", Array.from(users.values())); // Emit the updated user list
  });

  // Handle incoming messages
  socket.on("message", (message: { text: string; sender: string }) => {
    const userDetails = users.get(socket.id);
    if (userDetails) {
      console.log(`${userDetails.name} said: ${message.text}`);
      io.emit("message", {
        text: message.text,
        sender: userDetails.name,
        profilePic: userDetails.profilePic,
      });
    } else {
      console.log(`Unknown user said: ${message.text}`);
      io.emit("message", {
        text: message.text,
        sender: "Unknown user",
        profilePic: "defaultProfileImage", // Provide a default profile picture
      });
    }
  });

  // Handle incoming chosen track
  socket.on("track-submitted", (track: TrackObject) => {
    // * if the track information exists, send it back to be added to the playlist
    if (track) {
      io.emit("track-submitted", track);
    }
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("user disconnected");
    users.delete(socket.id);
    io.emit("users", Array.from(users.values())); // Emit the updated user list
  });
});

// Serve static files and use middleware
let dist: string | undefined;
let frontend: string | undefined;

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

// * Creating A User Profile
app.post("/profileCreation", async (req: Request, res: Response) => {
  console.log("within backend, /profilecreation");
  try {
    const profileData: Profile = req.body;
    console.log("profile data; ", profileData);
    console.log("PROFILE DATA POST WITHIN BACKEND: ", profileData);
    // Check if the profile already exists
    const existingProfile = await ProfileModel.findOne({
      userid: profileData.userid,
    });

    // ! current checks and registration flow most likely wont allow this to happen
    if (existingProfile) {
      console.log("profile exists already");
      return res.status(409).send("Profile already exists with this username");
    }

    // Create a new profile document
    const newProfile = await ProfileModel.create(profileData);
    res.status(201).send(newProfile); // Send the created profile back
  } catch (err) {
    console.error("Error creating new profile: ", err);
    res.status(500).send(err);
  }
});

app.get("/profile/:userid", async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;
    console.log(`Fetching profile for userid: ${userid}`); // Debug log
    const profile = await profileService.get(userid);
    console.log(`Profile fetched: ${JSON.stringify(profile)}`); // Debug log
    res.status(200).json(profile);
  } catch (err) {
    console.error(
      `Error fetching profile for userid: ${req.params.userid}`,
      err
    );
    res.status(404).json({ error: err });
  }
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

const { PORT } = process.env || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on ${SERVER_URL}`);
});
