export async function getUser({ accessToken }: { accessToken: string }) {
  let url = "https://api.spotify.com/v1/me";
  const payload = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!payload.ok) {
    console.log({ error: payload.statusText });
    throw new Error(payload.statusText);
  }
  return payload.json();
}
