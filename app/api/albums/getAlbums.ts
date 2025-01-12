import { type Album, type AlbumResponse } from "@/types/Album";

interface Props {
  searchParams?: {
    term?: string;
    filter?: string;
  };
}

export const getAlbums = async ({ searchParams }: Props) => {
  try {
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

    if (!response.ok) {
      throw new Error(`Failed to fetch albums. Status: ${response.status}`);
    }

    const responseJson: AlbumResponse<Album[]> = await response.json();

    if (!responseJson.data) {
      throw new Error("No album data found in the response");
    }

    return responseJson.data.filter((album) => album.images_count > 3);
  } catch (error) {
    console.error("Error fetching albums:", error);
    throw new Error("An error occurred while fetching the albums.");
  }
};
