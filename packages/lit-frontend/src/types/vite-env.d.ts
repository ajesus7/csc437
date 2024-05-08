interface ImportMetaEnv {
  VITE_SERVER_URL: any;
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  readonly VITE_SPOTIFY_CLIENT_SECRET: string;
  // Define other environment variables you use here
  // readonly VITE_YOUR_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
