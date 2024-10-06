export default async function getAccessTokenAndRefreshTokenFromCode(
  code: string,
  state: string,
) {
  const encodedParams = new URLSearchParams();
  const clientId = process.env.SPOTIFY_CLIENT_ID as string;
  // source: https://developer.spotify.com/documentation/web-api/tutorials/code-flow
  // this is used for verification only and there is no redirection
  const redirectUri = process.env.SPOTIFY_AUTHENTICATE_CALLBACK_URI as string;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string;

  console.log({ clientId, redirectUri, clientSecret });

  encodedParams.set("grant_type", "authorization_code");
  encodedParams.set("code", code);
  encodedParams.set("state", state);
  encodedParams.set("redirect_uri", redirectUri);
  // encodedParams.set("code_verifier", verifier);

  let url = "https://accounts.spotify.com/api/token";

  const token = Buffer.from(clientId + ":" + clientSecret).toString("base64");

  let options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + token,
    },
    body: encodedParams,
  };

  const payload = await fetch(url, options);

  if (!payload.ok) {
    console.log(payload.status, await payload.text());
    throw new Error("Failed to get access token and refresh token from code");
  }

  const json = await payload.json();
  return json;
}
