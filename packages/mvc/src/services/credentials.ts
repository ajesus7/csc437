import bcrypt from "bcryptjs";
import credentialModel from "../mongo/credential";
import { Credential } from "../../../ts-models";

export function verify(username: string, password: string): Promise<String> {
  return new Promise<String>((resolve, reject) => {
    credentialModel
      .findOne({ username }) // Using findOne simplifies handling
      .then((credsOnFile) => {
        if (!credsOnFile) {
          return reject("Invalid username or password");
        }
        bcrypt.compare(
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
      })
      .catch((error) => {
        console.error("Error in verify:", error);
        reject("Database error during verification.");
      });
  });
}

export function checkExists(username: string) {
  return new Promise<boolean>((resolve, reject) => {
    credentialModel
      .findOne({ username })
      .then((user) => resolve(Boolean(user)))
      .catch((error) => {
        console.error("Error checking user existence:", error);
        reject("Database error while checking existence.");
      });
  });
}
export function create(username: string, password: string) {
  console.log("Within Credentials Create function!");
  return new Promise<Credential>((resolve, reject) => {
    if (!username || !password) {
      console.log("rejected, something wrong with username or pwd");
      reject("must provide username and password");
    }
    console.log("about to do credentialModel find");
    credentialModel
      .find({ username })
      .then((found: Credential[]) => {
        console.log("After credentialModel find");
        if (found.length) reject("username exists");
      })
      .then(() =>
        bcrypt
          .genSalt(10)
          .then((salt: string) => bcrypt.hash(password, salt))
          .then((hashedPassword: string) => {
            console.log(
              "creating the new credentials and trying to save them to db"
            );
            const creds = new credentialModel({
              username,
              hashedPassword,
            });
            creds.save().then((created: Credential) => {
              console.log("credentials save reached, about to resolve");
              if (created) resolve(created);
            });
          })
      )
      .catch((error) => {
        console.error("Error in create:", error);
        reject(error);
      });
  });
}

export default { checkExists, create, verify };
