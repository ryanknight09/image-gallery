import { type Album } from "@/types/Album";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { AlbumCover } from "./AlbumCover";

interface Props {
  album: Album;
}

export const AlbumCardPreview = ({ album }: Props) => {
  return (
    <Link
      href={`/album/${album.id}`}
      key={album.id}
      className="flex flex-col items-center gap-4 aspect-video mb-4 group"
    >
      <AlbumCover src={album.images[0].link} />
      <div className="flex flex-col justify-start w-full">
        <h3 className="text-md font-bold line-clamp-2">{album.title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground mt-2">
            <p>{album.account_url}</p>
            <p>
              {album.comment_count} Views •{" "}
              {new Date(album.datetime * 1000).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span>{album.ups}</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsDown className="h-4 w-4" />
              <span>{album.downs}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
