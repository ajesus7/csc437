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
var commentSchema_exports = {};
__export(commentSchema_exports, {
  default: () => commentSchema_default
});
module.exports = __toCommonJS(commentSchema_exports);
var import_mongoose = __toESM(require("mongoose"));
const CommentSchema = new import_mongoose.default.Schema({
  // userid: {
  //   _user: { type: Schema.Types.ObjectId, ref: "Profile" },
  //   required: true,
  // },
  userName: {
    type: String,
    required: true
  },
  commentTime: {
    type: Date,
    // Explicitly setting to Date type
    default: Date.now
  },
  commentMessage: {
    type: String,
    required: true
  },
  spotifyTrackIds: [
    {
      type: String
      // String identifiers for songs
    }
  ]
});
const Comment = import_mongoose.default.model("Comment", CommentSchema);
var commentSchema_default = { CommentSchema, Comment };
