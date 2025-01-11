import { AlbumFilter } from "@/components/album-search/AlbumFilter";
import { AlbumSearch } from "@/components/album-search/AlbumSearch";
import { Albums } from "@/components/albums/Albums";
import { type AlbumResponse } from "@/types/Album";

interface Props {
  searchParams?: Promise<{
    term?: string;
    filter?: string;
  }>;
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const term = searchParams?.term;
  const filter = searchParams?.filter;
  const filterQuery = filter ? `${filter}${term}` : "";

  const TOP_BASE_URL = "https://api.imgur.com/3/gallery/top?q_type=album";
  const SEARCH_BASE_URL = `https://api.imgur.com/3/gallery/search?q_type=album&q=${term}&${filterQuery}}`;

  const url = term ? SEARCH_BASE_URL : TOP_BASE_URL;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 2d086962f60c89e",
    },
  });

  const responseJson: AlbumResponse = await response.json();
  const albums = responseJson.data ?? [];

  console.log(albums.filter((album) => album.is_album)[0]);

  return (
    <main className="3xl:container mx-auto py-8 pb-20 flex flex-col gap-8 h-full px-4 sm:px-20 md:px-8 2xl:px-8">
      <h1 className="text-5xl font-bold text-center">Album Glossary</h1>
      <div className="flex justify-center items-center gap-4">
        <AlbumSearch />
        <AlbumFilter />
      </div>
      <Albums albums={albums} />
    </main>
  );
}
