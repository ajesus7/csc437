"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var spotifySearch_exports = {};
__export(spotifySearch_exports, {
  SpotifyService: () => SpotifyService
});
module.exports = __toCommonJS(spotifySearch_exports);
class SpotifyService {
  constructor() {
    this.accessToken = "";
    this.authenticate();
  }
  authenticate() {
    return __async(this, null, function* () {
      const response = yield fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")
        },
        body: "grant_type=client_credentials"
      });
      if (response.ok) {
        const data = yield response.json();
        this.accessToken = data.access_token;
      } else {
        console.error("Spotify authentication failed");
      }
    });
  }
  searchSongs(query) {
    return __async(this, null, function* () {
      const response = yield fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          query
        )}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }
      );
      if (response.ok) {
        const data = yield response.json();
        console.log(
          data.tracks.items.map((track) => ({
            artist: track.artists.map((artist) => artist.name).join(", "),
            title: track.name,
            album: track.album.name,
            url: track.external_urls.spotify
          }))
        );
      } else {
        console.error("Failed to fetch songs from Spotify");
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SpotifyService
});
