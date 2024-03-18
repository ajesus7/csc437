import { ObjectId, Schema } from "mongoose";

//for now the spotify boolean (if true) means they are a spotify user, false means Apple Music
export interface Profile {
  userid: string;
  name: string;
  timezone: string;
  spotify: boolean;
  musicTaste?: string;
  profileImage?: string;
  profileDescription?: string;
  bio: string;
  //   favoriteSongs: Song[];
  //   favoriteArtists: Artist[];
  //   favoriteAlbums: Album[];
  //   playlists: Playlist[];
  //   games: Game[];
}

export interface Song {
  artist: string;
  title: string;
  album?: string;
  releaseDate: string;
  songCoverArt: string;
  songRuntime: string;
}

export interface Artist {
  albumArt: string;
  name: string;
  description?: string;
}
export interface Album {
  albumArt: string;
  artist: string;
  songs: string[];
  name: string;
  description?: string;
  releaseDate: string;
}

export interface Playlist {
  participants: Profile[];
  dateCompleted: string;
  songs: string[];
  description?: string;
}

export interface Game {
  playlist: Playlist;
  participants: Profile[];
  dateCompleted: string;
}

// export interface IPost {
//   userid: ObjectId;
//   userName: string;
//   postTime: Date;
//   postMessage: string;
//   comments: [{ type: Schema.Types.ObjectId; ref: "Comment" }];
// }

export interface IPost {
  userid: ObjectId;
  userName: string;
  postTime: Date;
  postMessage: string;
  comments: IComment[];
}

export interface IComment {
  // _user: ObjectId;
  userName: string;
  commentTime: Date;
  commentMessage: string;
  SongIDs: string[];
}
