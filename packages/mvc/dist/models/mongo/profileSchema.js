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
var profileSchema_exports = {};
__export(profileSchema_exports, {
  default: () => profileSchema_default
});
module.exports = __toCommonJS(profileSchema_exports);
var import_mongoose = require("mongoose");
const profileSchema = new import_mongoose.Schema(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    timezone: { type: String, required: true, trim: true },
    musicTaste: { type: String, required: false, trim: true },
    profileImage: { type: String, required: false, trim: true },
    bio: { type: String, required: true, trim: true },
    profileDescription: { type: String, required: false, trim: true },
    spotify: { type: Boolean, required: true }
  },
  { collection: "user_profiles" }
);
const ProfileModel = (0, import_mongoose.model)("Profile", profileSchema);
var profileSchema_default = ProfileModel;
