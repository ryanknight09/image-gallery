import { type Album, type AlbumResponse } from "@/types/Album";

interface Props {
  albumId: string;
}

export const getAlbum = async ({ albumId }: Props) => {
  try {
    const response = await fetch(`https://api.imgur.com/3/album/${albumId}`, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${process.env.AUTHORIZATION_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch album. Status: ${response.status}`);
    }

    const responseJson: AlbumResponse<Album> = await response.json();

    if (!responseJson.data) {
      throw new Error("No album data found in the response");
    }

    return responseJson.data;
  } catch (error) {
    console.error("Error fetching album:", error);
    throw new Error("An error occurred while fetching the album.");
  }
};
