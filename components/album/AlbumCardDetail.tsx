import { type Album } from "@/types/Album";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { AlbumCover } from "./AlbumCover";

interface Props {
  album: Album;
}

export const AlbumCardDetail = ({ album }: Props) => {
  return (
    <Link
      href={`/album/${album.id}`}
      key={album.id}
      className="flex gap-4 group"
    >
      <AlbumCover
        src={album.images[0].link}
        className="min-w-44 w-44 aspect-video h-auto min-h-0"
      />
      <div className="flex flex-col justify-start w-full">
        <h3 className="text-sm font-semibold line-clamp-2">{album.title}</h3>
        <div className="text-xs text-muted-foreground mt-auto">
          <p>{album.account_url}</p>
          <p>
            {album.comment_count} Views •{" "}
            {new Date(album.datetime * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
      <EllipsisVertical className="min-w-4 min-h-4 w-4 h-4 mb-auto" />
    </Link>
  );
};
