import { Schema, Model, Document, model } from "mongoose";
import { Credential } from "../../../ts-models";

const credentialSchema = new Schema<Credential>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "user_credentials" }
);

const credentialModel = model<Credential>("Credential", credentialSchema);

export default credentialModel;
