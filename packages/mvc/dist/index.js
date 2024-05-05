"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var import_express = __toESM(require("express"));
var path = __toESM(require("path"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_auth = require("./auth");
var import_api = __toESM(require("./routes/api"));
var import_posts = __toESM(require("./services/posts"));
var import_post = require("./mongo/post");
const app = (0, import_express.default)();
const port = process.env.PORT || 8e3;
let dist;
let frontend;
try {
  frontend = require.resolve("lit-frontend");
  dist = path.resolve(frontend, "..", "..");
  console.log("Serving lit-frontend from", dist);
} catch (error) {
  console.log("Cannot find static assets in lit-frontend", error.code);
}
(0, import_mongoConnect.connect)("vibing");
if (dist)
  app.use(import_express.default.static(dist));
app.use(import_express.default.json({ limit: "500kb" }));
app.use((0, import_cors.default)());
app.options("*", (0, import_cors.default)());
app.post("/login", import_auth.loginUser);
app.post("/signup", import_auth.registerUser);
app.use("/api", import_api.default);
const distPath = path.resolve(__dirname, "..", "..", "lit-frontend", "dist");
app.use(import_express.default.static(distPath));
app.get("/posts", (req, res) => {
  import_posts.default.getAll().then((allPosts) => {
    if (!allPosts || allPosts.length === 0)
      throw "No posts found";
    else
      res.json(allPosts);
  }).catch((err) => {
    console.error(err);
    res.status(404).send("Posts not found");
  });
});
app.get("/comments/:postid", (req, res) => __async(exports, null, function* () {
  const postId = req.params.postid;
  console.log("post id where comment was added, ", postId);
  try {
    const postWithComments = yield import_post.PostModel.findById(postId).populate(
      "comments"
    );
    if (!postWithComments || !postWithComments.comments || postWithComments.comments.length === 0) {
      return res.status(404).send("No comments found for this post");
    }
    res.json(postWithComments.comments);
  } catch (err) {
    console.error("Error fetching comments for post:", postId, err);
    res.status(500).send("Error fetching comments");
  }
}));
app.post("/posts", (req, res) => __async(exports, null, function* () {
  try {
    const newPostData = req.body;
    const newPost = yield import_post.PostModel.create(newPostData);
    res.status(201).send(newPost);
  } catch (err) {
    console.error("Error creating new post: ", err);
    res.status(500).send(err);
  }
}));
app.put("/posts/:postid", (req, res) => {
  const postid = req.params.postid;
  const newComment = req.body;
  console.log(newComment);
  const updateOperation = {
    $push: { comments: newComment }
  };
  import_post.PostModel.findOneAndUpdate({ _id: postid }, updateOperation, { new: true }).then((updatedPost) => {
    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }
    res.json(updatedPost);
  }).catch((err) => {
    console.error("Error adding comment:", err);
    res.status(500).send(err);
  });
});
app.get("*", (req, res) => {
  if (/\.[^\/]+$/.test(req.path)) {
    res.status(404).send("Not found");
  } else {
    res.sendFile(path.join(distPath, "app", "index.html"), (err) => {
      if (err) {
        console.error("Error serving index.html:", err);
        res.status(500).send("Server error");
      }
    });
  }
});
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
