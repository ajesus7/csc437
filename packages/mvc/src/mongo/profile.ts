import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../../../ts-models";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    timezone: { type: String, required: true, trim: true },
    musicTaste: { type: String, required: false, trim: true },
    profileImage: { type: String, required: false, trim: true },
    bio: { type: String, required: true, trim: true },
    profileDescription: { type: String, required: false, trim: true },
    spotify: { type: Boolean, required: true },
  },
  { collection: "user_profiles" }
);

const profileModel = model<Profile>("Profile", profileSchema);

export default profileModel;
