import { type Album } from "@/types/Album";
import Link from "next/link";
import { Likes } from "../Likes";
import { ViewCountAndDate } from "../ViewCountAndDate";
import { AlbumCover } from "./AlbumCover";

interface Props {
  album: Album;
}

export const AlbumCardPreview = ({ album }: Props) => {
  return (
    <Link
      href={`/album/${album.id}`}
      key={album.id}
      className="flex flex-col items-center gap-4 aspect-square h-full transition-transform hover:scale-105 px-4 rounded-xl overflow-hidden"
    >
      <AlbumCover src={album.images[0].link} />
      <div className="flex flex-col justify-start w-full">
        <h3 className="text-md font-bold line-clamp-2">{album.title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground mt-2">
            <p>{album.account_url}</p>
            <ViewCountAndDate views={album.views} dateTime={album.datetime} />
          </div>
          <Likes likes={album.ups} dislikes={album.downs} />
        </div>
      </div>
    </Link>
  );
};
