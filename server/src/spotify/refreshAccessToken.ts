export async function refreshAccessToken(refreshToken: string) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("grant_type", "refresh_token");
  urlSearchParams.append("refresh_token", refreshToken);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlSearchParams.toString(),
  });

  const data = await response.json();
  return data;
}
