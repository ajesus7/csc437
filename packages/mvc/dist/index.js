"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var src_exports = {};
module.exports = __toCommonJS(src_exports);
var import_express = __toESM(require("express"));
var path = __toESM(require("path"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_auth = require("./auth");
var import_api = __toESM(require("./routes/api"));
var import_posts = __toESM(require("./services/posts"));
var import_profiles = __toESM(require("./services/profiles"));
var import_dotenv = __toESM(require("dotenv"));
var import_profile = require("./mongo/profile");
var import_post = require("./mongo/post");
var import_mongoose = __toESM(require("mongoose"));
import_dotenv.default.config();
const app = (0, import_express.default)();
const httpServer = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, {
  cors: { origin: "*" }
});
const users = /* @__PURE__ */ new Map();
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("userDetails", (userDetails) => {
    users.set(socket.id, userDetails);
    io.emit("users", Array.from(users.values()));
  });
  socket.on("message", (message) => {
    const userDetails = users.get(socket.id);
    if (userDetails) {
      console.log(`${userDetails.name} said: ${message.text}`);
      io.emit("message", {
        text: message.text,
        sender: userDetails.name,
        profilePic: userDetails.profilePic
      });
    } else {
      console.log(`Unknown user said: ${message.text}`);
      io.emit("message", {
        text: message.text,
        sender: "Unknown user",
        profilePic: "defaultProfileImage"
        // Provide a default profile picture
      });
    }
  });
  socket.on("track-submitted", (track) => {
    if (track) {
      io.emit("track-submitted", track);
    }
  });
  socket.on("vibe-submitted", (chosenVibe) => {
    if (chosenVibe) {
      io.emit("vibe-submitted", chosenVibe);
    }
  });
  socket.on("current-song", (currentSong) => {
    console.log("a song has been submitted: ", currentSong);
    if (currentSong) {
      console.log("emitting song back", currentSong);
      io.emit("current-song", currentSong);
    }
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
    users.delete(socket.id);
    io.emit("users", Array.from(users.values()));
  });
});
let dist;
let frontend;
const { SERVER_URL } = process.env;
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
app.get("/comments/:postid", (req, res) => __async(void 0, null, function* () {
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
function isValidObjectId(id) {
  return import_mongoose.default.Types.ObjectId.isValid(id);
}
function transformClientToServer(post) {
  if (!isValidObjectId(post.userid)) {
    throw new Error("Invalid ObjectId format");
  }
  return __spreadProps(__spreadValues({}, post), {
    userid: new import_mongoose.Types.ObjectId(post.userid)
  });
}
app.post("/posts", (req, res) => __async(void 0, null, function* () {
  try {
    const newPostData = req.body;
    const serverPostData = transformClientToServer(newPostData);
    const newPost = yield import_post.PostModel.create(serverPostData);
    res.status(201).send(newPost);
  } catch (err) {
    console.error("Error creating new post: ", err);
    res.status(500).send({ error: err.message });
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
app.post("/profileCreation", (req, res) => __async(void 0, null, function* () {
  console.log("within backend, /profilecreation");
  try {
    const profileData = req.body;
    console.log("profile data; ", profileData);
    console.log("PROFILE DATA POST WITHIN BACKEND: ", profileData);
    const existingProfile = yield import_profile.ProfileModel.findOne({
      userid: profileData.userid
    });
    if (existingProfile) {
      console.log("profile exists already");
      return res.status(409).send("Profile already exists with this username");
    }
    const newProfile = yield import_profile.ProfileModel.create(profileData);
    res.status(201).send(newProfile);
  } catch (err) {
    console.error("Error creating new profile: ", err);
    res.status(500).send(err);
  }
}));
app.get("/profile/:userid", (req, res) => __async(void 0, null, function* () {
  try {
    const { userid } = req.params;
    console.log(`Fetching profile for userid: ${userid}`);
    const profile = yield import_profiles.default.get(userid);
    console.log(`Profile fetched: ${JSON.stringify(profile)}`);
    res.status(200).json(profile);
  } catch (err) {
    console.error(
      `Error fetching profile for userid: ${req.params.userid}`,
      err
    );
    res.status(404).json({ error: err });
  }
}));
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
app.get("/api/test-db", (req, res) => __async(void 0, null, function* () {
  try {
    const result = yield import_mongoose.default.connection.db.admin().serverStatus();
    res.send({ dbStatus: "Connected", version: result.version });
  } catch (error) {
    res.status(500).send({ dbStatus: "Disconnected", error: error.message });
  }
}));
const { PORT } = process.env || 3e3;
httpServer.listen(PORT, () => {
  console.log(`Server listening on ${SERVER_URL}`);
});
