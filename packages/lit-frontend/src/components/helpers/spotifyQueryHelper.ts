import { TrackObject } from "../../../../ts-models/src";
import { Buffer } from "buffer";

// Function to select a track
export function selectTrack(context: any, track: TrackObject) {
  const existingIndex = context.selectedTracks.findIndex(
    (selectedTrack: TrackObject) => selectedTrack.id === track.id
  );

  if (existingIndex > -1) {
    context.selectedTracks = [
      ...context.selectedTracks.slice(0, existingIndex),
      ...context.selectedTracks.slice(existingIndex + 1),
    ];
  } else {
    context.selectedTracks = [...context.selectedTracks, track];
  }
}

// Function to clear top tracks
export function clearTopTracks(context: any) {
  context.topTracks = [];
}

// Function to clear selected tracks
export function clearSelectedTracks(context: any) {
  context.selectedTracks = [];
}

// Function to fetch top tracks
export async function fetchTopTracks(context: any, artistId: string) {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${context.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    if (data && data.tracks) {
      context.topTracks = data.tracks;
    } else {
      console.log("No tracks found or data is malformed");
    }
  } else {
    throw new Error(`Error: ${response.statusText}`);
  }
}

// Function to authenticate with Spotify
export async function authenticate(context: any) {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });
  if (response.ok) {
    const data = await response.json();
    context.accessToken = data.access_token;
  } else {
    console.error("Spotify authentication failed");
  }
}

// Function to search Spotify
export async function searchSpotify(context: any) {
  if (!context.requestedSearchQuery.trim()) return;

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    context.requestedSearchQuery
  )}&type=track&limit=10`;

  try {
    await authenticate(context);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${context.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.tracks.items.length > 0) {
      context.topTracks = data.tracks.items;
    } else {
      context.topTracks = [];
      alert("No tracks found. Please try another search.");
    }
  } catch (error) {
    console.error("Error searching for tracks:", error);
  }
}

// Function to handle form submission
export async function handleSubmit(ev: Event, context: any) {
  ev.preventDefault();
  const target = ev.target as HTMLFormElement;
  const formData = new FormData(target);

  context.requestedSearchQuery = formData.get("inputted-artist-name") as string;

  await searchSpotify(context);
}

// Function to recommend tracks
export async function recommendTracks(ev: Event, context: any) {
  ev.preventDefault();
  context.submissionSuccess = null;
  const target = ev.target as HTMLFormElement;
  const formData = new FormData(target);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  let message = formData.get("input-comment") as string;
  const trackIds = context.selectedTracks.map((track: TrackObject) => track.id);
  const url = `${SERVER_URL}/posts/${context.post?._id}`;
  const newComment = {
    userName: "aidan",
    commentTime: new Date(),
    commentMessage: message,
    SongIDs: trackIds,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (response.ok) {
      console.log("Comment successfully added");
      clearTopTracks(context);
      clearSelectedTracks(context);
      context.submissionSuccess = true;
      target.reset();
      context._handleCommentAdded();
    } else {
      throw new Error("Failed to post comment");
    }
  } catch (error) {
    console.error("Error:", error);
    context.submissionSuccess = false;
  }
}
