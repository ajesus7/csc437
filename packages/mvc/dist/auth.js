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
var auth_exports = {};
__export(auth_exports, {
  authenticateUser: () => authenticateUser,
  loginUser: () => loginUser,
  registerUser: () => registerUser
});
module.exports = __toCommonJS(auth_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_credentials = __toESM(require("./services/credentials"));
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
function generateAccessToken(username) {
  console.log("made it to generate access token");
  console.log("Generating token for", username);
  return new Promise((resolve, reject) => {
    const secret = process.env.TOKEN_SECRET;
    if (typeof secret !== "string") {
      reject(new Error("TOKEN_SECRET is undefined"));
      return;
    }
    import_jsonwebtoken.default.sign(
      { username },
      secret,
      { expiresIn: "1d" },
      (error, token) => {
        if (error)
          reject(error);
        else
          resolve(token);
      }
    );
  });
}
function registerUser(req, res) {
  const { username, pwd } = req.body;
  console.log(
    "WITHIN REGISTER BUT OUTSIDE ERROR: username: ",
    username,
    " password: ",
    pwd
  );
  if (!username || !pwd) {
    console.log("Error; username then password: ", username, pwd);
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    console.log(
      "Within registerUser function in auth.ts, about to call credentials"
    );
    import_credentials.default.create(username, pwd).then((creds) => generateAccessToken(creds.username)).then((token) => {
      res.status(201).send({ token });
    });
  }
}
function loginUser(req, res) {
  const { username, pwd } = req.body;
  if (!username || !pwd) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    import_credentials.default.verify(username, pwd).then((goodUser) => generateAccessToken(goodUser)).then((token) => res.status(200).send({ token })).catch((error) => res.status(401).send("Unauthorized"));
  }
}
function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { TOKEN_SECRET } = process.env;
  if (!token) {
    res.status(401).end();
  } else {
    import_jsonwebtoken.default.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (decoded) {
        console.log("Decoded token", decoded);
        next();
      } else {
        res.status(401).end();
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authenticateUser,
  loginUser,
  registerUser
});
