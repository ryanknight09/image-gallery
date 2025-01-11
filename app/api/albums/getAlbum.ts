import { type Album, type AlbumResponse } from "@/types/Album";

interface Props {
  albumId: string;
}

export const getAlbum = async ({ albumId }: Props) => {
  const response = await fetch(`https://api.imgur.com/3/album/${albumId}`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${process.env.AUTHORIZATION_KEY}`,
    },
  });

  const responseJson: AlbumResponse<Album> = await response.json();
  const album = responseJson.data;

  //   console.log(album);

  return album;
};
