import { Profile } from "../Interfaces";
import { Schema, Model, Document, model } from "mongoose";

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

//     favoriteArtists: [
//       {
//         albumArt: { type: String, required: true, trim: true },
//         name: { type: String, required: true, trim: true },
//         description: { type: String, required: false, trim: true },
//       },
//     ],
//     favoriteAlbums: [
//       {
//         albumArt: { type: String, required: true, trim: true },
//         name: { type: String, required: true, trim: true },
//         artist: { type: String, required: true, trim: true },
//         releaseDate: { type: String, required: true, trim: true },
//         songs: [String],
//         description: { type: String, required: false, trim: true },
//       },
//     ],
//     favoriteSongs: [
//       {
//         songRuntime: { type: String, required: true, trim: true },
//         songCoverArt: { type: String, required: true, trim: true },
//         title: { type: String, required: true, trim: true },
//         artist: { type: String, required: true, trim: true },
//         releaseDate: { type: String, required: true, trim: true },
//         album: { type: String, required: false, trim: true },
//       },
//     ],
//     playlists: [
//       {
//         dateCompleted: { type: String, required: true, trim: true },
//         participants: { type: String, required: true, trim: true },
//         songs: [String],
//         description: { type: String, required: false, trim: true },
//       },
//     ],
//     games: [
//       {
//         playlist: { type: String, required: true, trim: true },
//         participants: { type: String, required: true, trim: true },
//         dateCompleted: { type: String, required: true, trim: true },
//       },
//     ],
//   },

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
