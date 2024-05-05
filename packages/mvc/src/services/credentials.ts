import bcrypt from "bcryptjs";
import credentialModel from "../mongo/credential";
import { Credential } from "../../../ts-models";

export function verify(username: string, password: string): Promise<String> {
  return new Promise<String>((resolve, reject) => {
    credentialModel
      .find({ username })
      .then((found) => {
        if (found && found.length === 1) return found[0];
        else reject("Invalid username or password");
      })
      .then((credsOnFile) => {
        if (credsOnFile)
          bcrypt.compare(password, credsOnFile.hashedPassword, (_, result) => {
            console.log("Verified", result, credsOnFile.username);
            if (result) resolve(credsOnFile.username);
            else reject("Invalid username or password");
          });
        else reject("Invalid username or password");
      });
  });
}

export function checkExists(username: string) {
  return new Promise<boolean>((resolve, reject) => {
    credentialModel
      .find({ username })
      .then((found) => resolve(found && found.length > 0));
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
      );
  });
}

export default { checkExists, create, verify };
