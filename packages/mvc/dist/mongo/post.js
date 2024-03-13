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
var post_exports = {};
__export(post_exports, {
  default: () => post_default
});
module.exports = __toCommonJS(post_exports);
var import_mongoose = require("mongoose");
var import_mongodb = require("mongodb");
const postSchema = new import_mongoose.Schema({
  userid: {
    type: import_mongodb.ObjectId,
    // Using ObjectId for userid
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  postTime: {
    type: Date,
    // Explicitly setting to Date type
    default: Date.now
  },
  postMessage: {
    type: String,
    required: true
  },
  comments: [
    {
      type: import_mongoose.Schema.Types.ObjectId,
      // Defines a reference to another document
      ref: "Comment"
      // The name of the model you're referring to
    }
  ]
});
const postModel = (0, import_mongoose.model)("Post", postSchema);
var post_default = postModel;
