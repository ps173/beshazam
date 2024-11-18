import express, { Application } from "express";
import { config } from "dotenv";
import getAccessTokenAndRefreshTokenFromCode from "./spotify/getAccessTokenAndRefreshTokenFromCode";
import generateRandomString from "./utils/generateRandomString";
import querystring from "node:querystring";
import prismaInstance from "./utils/prismaInstance";
import { getUser } from "./spotify/getUser";
config();

const app: Application = express();
const port = process.env.PORT || 3000;

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
    const spotifyUser = await getUser({
      accessToken: data?.access_token,
    });
    const user = await prismaInstance.user.create({
      data: {
        name: spotifyUser.display_name,
        email: spotifyUser.email,
        accessToken: data?.access_token,
        refreshToken: data?.refresh_token,
      },
    });

    res.send(user.name);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
  // redirect to frontent with user-id in cookie
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
