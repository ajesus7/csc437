"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
module.exports = __toCommonJS(posts_exports);
var import_post = require("../mongo/post");
function index() {
  return import_post.PostModel.find();
}
function get() {
  return import_post.PostModel.find().then((list) => list[0]).catch((err) => {
    throw `No Posts found`;
  });
}
function getAll() {
  return import_post.PostModel.find().then((list) => {
    if (!list.length)
      throw `No Posts found`;
    return list;
  }).catch((err) => {
    throw new Error(`No Posts found: ${err}`);
  });
}
function create(post) {
  const p = new import_post.PostModel(post);
  return p.save();
}
function update(ObjectId, updateData) {
  return new Promise((resolve, reject) => {
    import_post.PostModel.findOneAndUpdate({ _id: ObjectId }, updateData, { new: true }).then((updatedPost) => {
      if (updatedPost)
        resolve(updatedPost);
      else
        reject("Failed to update post");
    }).catch((err) => reject(err));
  });
}
var posts_default = { index, get, create, update, getAll };
