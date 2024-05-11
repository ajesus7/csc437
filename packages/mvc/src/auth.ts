import jwt from "jsonwebtoken";
import credentials from "./services/credentials";
import dotenv from "dotenv";

dotenv.config();

function generateAccessToken(username: string) {
  console.log("made it to generate access token");
  console.log("Generating token for", username);
  return new Promise((resolve, reject) => {
    // Ensure TOKEN_SECRET is defined
    const secret = process.env.TOKEN_SECRET;
    if (typeof secret !== "string") {
      reject(new Error("TOKEN_SECRET is undefined"));
      return;
    }

    jwt.sign(
      { username: username },
      secret,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) reject(error);
        else resolve(token);
      }
    );
  });
}

export function registerUser(req, res) {
  const { username, pwd } = req.body;

  if (!username || !pwd) {
    console.log(
      "Error, no username or password found; username then password: ",
      username,
      pwd
    );
    res.status(400).send("Bad request: Invalid input data.");
    return;
  }

  credentials
    .checkExists(username)
    .then((userExists) => {
      if (userExists) {
        res.status(409).send("Conflict: User already exists.");
        throw new Error("User already exists"); // Prevent further execution in the chain
      }
      return credentials.create(username, pwd);
    })
    .then((creds) => generateAccessToken(creds.username))
    .then((token) => {
      res.status(201).send({ token });
    })
    .catch((error) => {
      if (error.message !== "User already exists") {
        console.error("Error during registration:", error);
        res.status(500).send("Internal server error.");
      }
    });
}

export function loginUser(req, res) {
  const { username, pwd } = req.body; // from form

  console.log(
    "within the loginUser function in the backend, username: ",
    username,
    " pwd: ",
    pwd
  );

  if (!username || !pwd) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials
      .verify(username, pwd)
      .then((goodUser: string) => generateAccessToken(goodUser))
      .then((token) => res.status(200).send({ token: token }))
      .catch((error) => res.status(401).send("Unauthorized"));
  }
}

export function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  //Getting the 2nd part of the auth header (the token)
  const token = authHeader && authHeader.split(" ")[1];
  const { TOKEN_SECRET } = process.env;
  if (!token) {
    res.status(401).end();
  } else {
    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (decoded) {
        console.log("Decoded token", decoded);
        next();
      } else {
        res.status(401).end();
      }
    });
  }
}
