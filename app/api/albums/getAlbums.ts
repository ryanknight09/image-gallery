import { type AlbumResponse } from "@/types/Album";

interface Props {
  searchParams?: {
    term?: string;
    filter?: string;
  };
}

export const getAlbums = async ({ searchParams }: Props) => {
  const term = searchParams?.term;
  const filter = searchParams?.filter;
  const filterQuery = filter ? `${filter}${term}` : "";

  const TOP_BASE_URL = "https://api.imgur.com/3/gallery/top?q_type=album";
  const SEARCH_BASE_URL = `https://api.imgur.com/3/gallery/search?q_type=album&q=${term}&${filterQuery}}`;

  const url = term ? SEARCH_BASE_URL : TOP_BASE_URL;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${process.env.AUTHORIZATION_KEY}`,
    },
  });

  const responseJson: AlbumResponse = await response.json();
  const albums = responseJson.data ?? [];

  return albums.filter((album) => album.images_count > 0);
};
