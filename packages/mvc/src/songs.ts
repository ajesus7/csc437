import { Document } from "mongoose";
import { Song } from "./models/Interfaces";
import SongModel from "./models/mongo/songSchema";

function index(): Promise<Song[]> {
  return SongModel.find();
}

function get(userid: String): Promise<Song> {
  return SongModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(song: Song): Promise<Song> {
  const s = new SongModel(song);
  return s.save();
}

function update(userid: String, song: Song): Promise<Song> {
  return new Promise((resolve, reject) => {
    SongModel.findOneAndUpdate({ userid }, song, {
      new: true,
    }).then((song) => {
      if (song) resolve(song);
      else reject("Failed to update song");
    });
  });
}

export default { index, get, create, update };
