import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  objectFit?: string;
  className?: string;
}

export const AlbumCover = ({ src, className }: Props) => {
  const regex = /\.mp4$/i;

  if (regex.test(src))
    return (
      <video
        controls
        preload="metadata"
        muted
        autoPlay={false}
        className={cn(
          "object-cover h-full w-full min-h-[200px] overflow-y-auto rounded-lg",
          className
        )}
      >
        <source src={src} type="video/mp4" />
      </video>
    );

  return (
    <div
      className={cn(
        "relative h-full w-full min-h-[200px] rounded-lg",
        className
      )}
    >
      <Image
        alt=""
        src={src}
        fill
        priority
        className={cn("object-cover rounded-lg", className)}
      />
    </div>
  );
};
