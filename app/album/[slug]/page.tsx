import { getAlbum } from "@/app/api/albums/getAlbum";
import { getAlbums } from "@/app/api/albums/getAlbums";
import { AlbumImageGallery } from "@/components/album-details/AlbumImageGallery";
import { AlbumHeader } from "@/components/album-details/ImageHeader";
import { AlbumSearch } from "@/components/album-search/AlbumSearch";
import { AlbumCardDetail } from "@/components/album/AlbumCardDetail";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{
    term?: string;
    filter?: string;
    openImage?: string;
  }>;
}

export default async function Page({ params, ...rest }: Props) {
  const { slug } = await params;
  const searchParams = await rest.searchParams;

  const albums = await getAlbums({ searchParams });
  const album = await getAlbum({ albumId: slug });

  if (!album) {
    notFound();
  }

  console.log(searchParams?.openImage);

  return (
    <main className="3xl:container mx-auto py-8 pb-20 flex flex-col gap-8 h-full px-8 sm:px-20 md:px-8 2xl:px-8">
      <AlbumSearch className="lg:hidden" routerType="push" />
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <AlbumHeader {...album} />
          <AlbumImageGallery
            images={album.images}
            openImage={searchParams?.openImage}
          />
        </div>
        <div className="lg:flex flex-col gap-8 lg:max-w-md hidden">
          <Separator className="lg:hidden" />
          <AlbumSearch />
          <div className="grid grid-cols-1 gap-3 border-l pl-8">
            {albums.map((album) => (
              <AlbumCardDetail key={album.id} album={album} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
