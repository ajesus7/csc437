"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
module.exports = __toCommonJS(posts_exports);
var import_express = __toESM(require("express"));
var import_posts = __toESM(require("../services/posts"));
var import_posts2 = require("../services/posts");
const router = import_express.default.Router();
router.post("/", (req, res) => {
  const newPost = req.body;
  import_posts.default.create(newPost).then((post) => res.status(201).send(post)).catch((err) => res.status(500).send(err));
});
router.get("/posts", (req, res) => {
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
router.put("/:postid", (req, res) => {
  const postid = req.params.postid;
  const newComment = req.body;
  const updateOperation = {
    $push: { comments: newComment }
  };
  (0, import_posts2.update)(postid, updateOperation).then((updatedPost) => res.json(updatedPost)).catch((err) => res.status(500).send(err));
});
var posts_default = router;
