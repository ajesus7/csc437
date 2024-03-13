export class SpotifyService {
  accessToken: string = "";

  constructor() {
    this.authenticate();
  }

  async authenticate() {
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
    } else {
      console.error("Spotify authentication failed");
    }
  }

  async searchSongs(query: string) {
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
      console.log(
        data.tracks.items.map((track: any) => ({
          artist: track.artists.map((artist: any) => artist.name).join(", "),
          title: track.name,
          album: track.album.name,
          url: track.external_urls.spotify,
        }))
      );
    } else {
      console.error("Failed to fetch songs from Spotify");
    }
  }
}
