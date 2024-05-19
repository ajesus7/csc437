import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../../../ts-models";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: false, trim: true, default: "" },
    timezone: { type: String, required: false, trim: true, default: "" },
    musicTaste: { type: String, required: false, trim: true, default: "" },
    profileImage: {
      type: String,
      required: false,
      trim: true,
      default: "defaultProfileImage",
    },
    bio: { type: String, required: false, trim: true, default: "" },
    profileDescription: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    spotify: { type: Boolean, required: false, default: false },
  },
  { collection: "user_profiles" }
);

const profileModel = model<Profile>("Profile", profileSchema);

export { profileSchema, profileModel as ProfileModel };
