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
var import_post = __toESM(require("../mongo/post"));
function index() {
  return import_post.default.find();
}
function get() {
  return import_post.default.find().then((list) => list[0]).catch((err) => {
    throw `No Posts found`;
  });
}
function getAll() {
  return import_post.default.find().then((list) => {
    if (!list.length)
      throw `No Posts found`;
    return list;
  }).catch((err) => {
    throw new Error(`No Posts found: ${err}`);
  });
}
function create(post) {
  const p = new import_post.default(post);
  return p.save();
}
function update(ObjectId, post) {
  return new Promise((resolve, reject) => {
    import_post.default.findOneAndUpdate({ ObjectId }, post, {
      new: true
    }).then((post2) => {
      if (post2)
        resolve(post2);
      else
        reject("Failed to update post");
    });
  });
}
var posts_default = { index, get, create, update, getAll };
