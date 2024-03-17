import { Artist } from "./spotifyArtist";
import { Image } from "./spotifyImage";

export interface TrackObject {
  album: {
    album_type: string;
    artists: Artist[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
