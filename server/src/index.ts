import express, { Application } from "express";
import { config } from "dotenv";
import getAccessTokenAndRefreshTokenFromCode from "./spotify/getAccessTokenAndRefreshTokenFromCode";
import generateRandomString from "./utils/generateRandomString";
import querystring from "node:querystring";
config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript!");
});

app.get("/spotify/login", async (req, res) => {
  const state = generateRandomString(16);
  const scope = process.env.SPOTIFY_SCOPES as string;
  console.log({ state, scope });

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.SPOTIFY_AUTHENTICATE_CALLBACK_URI,
        state: state,
      }),
  );
});

app.get("/authenticate", async (req, res) => {
  const code = req.query.code as string;
  const state = req.query.state as string;
  try {
    const data = await getAccessTokenAndRefreshTokenFromCode(code, state);
    console.log({ data });
  } catch (err: any) {
    res.status(400).send(err.message);
  }
  // save token
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
