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
const router = import_express.default.Router();
router.post("/", (req, res) => {
  const newPost = req.body;
  import_posts.default.create(newPost).then((post) => res.status(201).send(post)).catch((err) => res.status(500).send(err));
});
router.get("/:userid", (req, res) => {
  const { ObjectId } = req.params;
  import_posts.default.get().then((post) => {
    if (!post)
      throw "Not found";
    else
      res.json(post);
  }).catch((err) => res.status(404).end());
});
router.put("/:userid", (req, res) => {
  const { ObjectId } = req.params;
  const newPost = req.body;
  import_posts.default.update(ObjectId, newPost).then((post) => res.json(post)).catch((err) => res.status(404).end());
});
var posts_default = router;
