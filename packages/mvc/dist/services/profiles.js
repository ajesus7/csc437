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
var profiles_exports = {};
__export(profiles_exports, {
  default: () => profiles_default
});
module.exports = __toCommonJS(profiles_exports);
var import_profile = require("../mongo/profile");
function index() {
  return import_profile.ProfileModel.find();
}
function get(userid) {
  return import_profile.ProfileModel.find({ userid }).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
function create(profile) {
  const p = new import_profile.ProfileModel(profile);
  return p.save();
}
function update(userid, profile) {
  return new Promise((resolve, reject) => {
    import_profile.ProfileModel.findOneAndUpdate({ userid }, profile, {
      new: true
    }).then((profile2) => {
      if (profile2)
        resolve(profile2);
      else
        reject("Failed to update profile");
    });
  });
}
var profiles_default = { index, get, create, update };
