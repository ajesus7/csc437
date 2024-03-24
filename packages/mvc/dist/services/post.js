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
var post_exports = {};
__export(post_exports, {
  default: () => post_default
});
module.exports = __toCommonJS(post_exports);
var import_post = __toESM(require("../mongo/post"));
var import_mongodb = require("mongodb");
function index() {
  return import_post.default.find();
}
function get(userid) {
  return import_post.default.find({ ObjectId: import_mongodb.ObjectId }).then((list) => list[0]).catch((err) => {
    throw `Post with ID ${import_mongodb.ObjectId} Not Found`;
  });
}
function create(post) {
  const p = new import_post.default(post);
  return p.save();
}
function update(ObjectId2, post) {
  return new Promise((resolve, reject) => {
    import_post.default.findOneAndUpdate({ ObjectId: ObjectId2 }, post, {
      new: true
    }).then((post2) => {
      if (post2)
        resolve(post2);
      else
        reject("Failed to update post");
    });
  });
}
var post_default = { index, get, create, update };
