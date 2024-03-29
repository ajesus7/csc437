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
var songSchema_exports = {};
__export(songSchema_exports, {
  default: () => songSchema_default
});
module.exports = __toCommonJS(songSchema_exports);
var import_mongoose = require("mongoose");
const songSchema = new import_mongoose.Schema(
  {
    artist: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    album: { type: String, required: false, trim: true },
    releaseDate: { type: String, required: true, trim: true },
    songCoverArt: { type: String, required: true, trim: true },
    songRuntime: { type: String, required: true, trim: true }
  },
  { collection: "songs" }
);
const SongModel = (0, import_mongoose.model)("Song", songSchema);
var songSchema_default = SongModel;
