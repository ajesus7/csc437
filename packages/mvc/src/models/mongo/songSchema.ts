import { Schema, Model, Document, model } from "mongoose";

//mongo Schema

export interface Song {
  artist: string;
  title: string;
  album?: string;
  releaseDate: string;
  songCoverArt: string;
  songRuntime: string;
}

const songSchema = new Schema<Song>(
  {
    artist: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    album: { type: String, required: false, trim: true },
    releaseDate: { type: String, required: true, trim: true },
    songCoverArt: { type: String, required: true, trim: true },
    songRuntime: { type: String, required: true, trim: true },
  },
  { collection: "songs" }
);

const SongModel = model<Song>("Song", songSchema);

export default SongModel;