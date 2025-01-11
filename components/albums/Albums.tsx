import { type Album } from "@/types/Album";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface Props {
  albums: Album[];
}

export const Albums = ({ albums }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
      {albums.map((album) => {
        const regex = /\.mp4$/i;

        return (
          <div
            key={album.id}
            className="flex flex-col items-center gap-4 aspect-video mb-12"
          >
            {regex.test(album.images[0].link) ? (
              <video
                controls
                preload="none"
                muted
                autoPlay
                className="object-scale-down h-full w-full overflow-y-auto rounded-lg min-h-[200px]"
              >
                <source src={album.images[0].link} type="video/mp4" />
              </video>
            ) : (
              <div className="relative h-full w-full min-h-[200px]">
                <Image
                  alt=""
                  src={album.images[0].link}
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
            )}
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
          </div>
        );
      })}
    </div>
  );
};
