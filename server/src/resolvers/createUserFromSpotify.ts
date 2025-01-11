import { getUser } from "../spotify/getUser";
import prismaInstance from "../utils/prismaInstance";

async function createUserFromSpotify({
  refreshToken,
  accessToken,
  expiresAt,
}: {
  refreshToken: string;
  accessToken: string;
  expiresAt: Date;
}) {
  const spotifyUser = await getUser({
    accessToken: accessToken,
  });

  const user = await prismaInstance.user.upsert({
    where: {
      email: spotifyUser.email,
    },
    update: {
      name: spotifyUser.display_name,
      email: spotifyUser.email,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresAt: expiresAt,
    },
    create: {
      name: spotifyUser.display_name,
      email: spotifyUser.email,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresAt: expiresAt,
    },
  });

  return user;
}

export default createUserFromSpotify;
