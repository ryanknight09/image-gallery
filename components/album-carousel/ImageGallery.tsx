import { cn } from "@/lib/utils";
import { type Image } from "@/types/Album";
import { AlbumCover } from "../album/AlbumCover";

interface Props {
  images: Image[];
}

export const ImageGallery = ({ images }: Props) => {
  const imageCount = images.length;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-6",
        imageCount === 1 &&
          "md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1",
        imageCount === 2 && "2xl:grid-cols-2 3xl:grid-cols-2",
        imageCount === 3 && "3xl:grid-cols-3"
      )}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className="flex flex-col items-center gap-3 aspect-video group"
        >
          <AlbumCover src={image.link} />
          <div className="flex flex-col justify-start w-full text-sm text-muted-foreground">
            <p>
              {image.views} Views •{" "}
              {new Date(image.datetime * 1000).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
