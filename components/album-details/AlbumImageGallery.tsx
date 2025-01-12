import { cn } from "@/lib/utils";
import { type Image } from "@/types/Album";
import { ExpandableImage } from "../ExpandableImage";

interface Props {
  images: Image[];
  openImage?: string;
}

export const AlbumImageGallery = ({ images, openImage }: Props) => {
  const imageCount = images.length;

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4",
        imageCount === 1 &&
          "md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 3xl:grid-cols-1",
        imageCount === 2 && "2xl:grid-cols-2 3xl:grid-cols-2",
        imageCount === 3 && "3xl:grid-cols-3"
      )}
    >
      {images.map((image) => (
        <ExpandableImage key={image.id} image={image} openImage={openImage} />
      ))}
    </div>
  );
};
