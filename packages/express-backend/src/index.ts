// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import songs from "./songs";
import { Profile } from "./models/Interfaces";
import { Song } from "./models/Interfaces";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connect("vibing"); // use your own db name here

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

//profiles
app.get("/api/profile/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/profile/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

//songs
app.post("/api/songs", (req: Request, res: Response) => {
  const newSong = req.body;

  songs
    .create(newSong)
    .then((song: Song) => res.status(201).send(song))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
