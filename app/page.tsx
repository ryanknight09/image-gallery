import { AlbumSearch } from "@/components/album-search/AlbumSearch";
import { AlbumCardPreview } from "@/components/album/AlbumCardPreview";
import { getAlbums } from "./api/albums/getAlbums";

interface Props {
  searchParams?: Promise<{
    term?: string;
    filter?: string;
  }>;
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const albums = await getAlbums({ searchParams });

  return (
    <main className="3xl:container mx-auto py-8 pb-20 flex flex-col gap-8 h-dvh px-8 sm:px-20 md:px-8 2xl:px-8 min-h-dvh">
      <h1 className="text-3xl font-bold text-left">Album Glossary</h1>
      <AlbumSearch />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 pb-20">
        {albums.map((album) => (
          <AlbumCardPreview key={album.id} album={album} />
        ))}
      </div>
    </main>
  );
}
