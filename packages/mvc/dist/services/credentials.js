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
var credentials_exports = {};
__export(credentials_exports, {
  checkExists: () => checkExists,
  create: () => create,
  default: () => credentials_default,
  verify: () => verify
});
module.exports = __toCommonJS(credentials_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_credential = __toESM(require("../mongo/credential"));
function verify(username, password) {
  return new Promise((resolve, reject) => {
    import_credential.default.findOne({ username }).then((credsOnFile) => {
      if (!credsOnFile) {
        return reject("Invalid username or password");
      }
      import_bcryptjs.default.compare(
        password,
        credsOnFile.hashedPassword,
        (error, result) => {
          if (error) {
            reject("Error comparing passwords");
          } else if (result) {
            resolve(credsOnFile.username);
          } else {
            reject("Invalid username or password");
          }
        }
      );
    }).catch((error) => {
      console.error("Error in verify:", error);
      reject("Database error during verification.");
    });
  });
}
function checkExists(username) {
  return new Promise((resolve, reject) => {
    import_credential.default.findOne({ username }).then((user) => resolve(Boolean(user))).catch((error) => {
      console.error("Error checking user existence:", error);
      reject("Database error while checking existence.");
    });
  });
}
function create(username, password) {
  console.log("Within Credentials Create function!");
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      console.log("rejected, something wrong with username or pwd");
      reject("must provide username and password");
    }
    console.log("about to do credentialModel find");
    import_credential.default.find({ username }).then((found) => {
      console.log("After credentialModel find");
      if (found.length)
        reject("username exists");
    }).then(
      () => import_bcryptjs.default.genSalt(10).then((salt) => import_bcryptjs.default.hash(password, salt)).then((hashedPassword) => {
        console.log(
          "creating the new credentials and trying to save them to db"
        );
        const creds = new import_credential.default({
          username,
          hashedPassword
        });
        creds.save().then((created) => {
          console.log("credentials save reached, about to resolve");
          if (created)
            resolve(created);
        });
      })
    ).catch((error) => {
      console.error("Error in create:", error);
      reject(error);
    });
  });
}
var credentials_default = { checkExists, create, verify };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkExists,
  create,
  verify
});
