interface SongInfo {
  artist: string;
  title: string;
  album: string;
  url: string;
}

class SpotifyService {
  accessToken: string = "";

  constructor() {
    this.authenticate();
  }

  async authenticate() {
    console.log("AUTHENTICATING");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });

    if (response.ok) {
      const data = await response.json();
      this.accessToken = data.access_token;
      console.log("Access Token:", this.accessToken); // Add this line to log the token
    } else {
      console.error("Spotify authentication failed");
    }
  }

  async searchSongs(query: string): Promise<SongInfo[]> {
    console.log("searching for songs!");
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        query
      )}&type=track&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      // Transform and return the data in the correct format
      const songs = data.tracks.items.map((track: any) => ({
        artist: track.artists.map((artist: any) => artist.name).join(", "),
        title: track.name,
        album: track.album.name,
        url: track.external_urls.spotify,
      }));
      console.log("songs!", songs);
      return songs; // This now correctly returns an array of SongInfo objects
    } else {
      console.error("Failed to fetch songs from Spotify");
      // Return an empty array to indicate no results, or throw an error if that's preferable
      return [];
    }
  }
}

// const spotifyService = new SpotifyService();
// setTimeout(() => spotifyService.searchSongs("The backseat"), 1000); // Wait

export default SpotifyService;
