import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { type Image } from "@/types/Album";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AlbumCover } from "../album/AlbumCover";
import { ViewCountAndDate } from "../ViewCountAndDate";

interface Props {
  images: Image[];
}

export const AlbumImageGallery = ({ images }: Props) => {
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
        <Dialog key={image.id}>
          <DialogTrigger asChild>
            <button
              key={image.id}
              className="flex flex-col items-center gap-3 aspect-video transition-transform hover:scale-105 py-3 rounded-xl"
            >
              <AlbumCover src={image.link} />
              <ViewCountAndDate views={image.views} dateTime={image.datetime} />
            </button>
          </DialogTrigger>
          <DialogContent className="h-screen max-w-screen p-10">
            <VisuallyHidden>
              <DialogTitle />
            </VisuallyHidden>
            <AlbumCover src={image.link} className="object-scale-down" />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
