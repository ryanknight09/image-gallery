import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
}

export const AlbumCover = ({ src, className }: Props) => {
  const regex = /\.mp4$/i;

  if (regex.test(src))
    return (
      <video
        controls
        preload="none"
        muted
        autoPlay
        className={cn(
          "border object-scale-down h-full w-full min-h-[200px] overflow-y-auto rounded-lg transition-transform duration-300 group-hover:scale-105",
          className
        )}
      >
        <source src={src} type="video/mp4" />
      </video>
    );

  return (
    <div
      className={cn(
        "relative h-full w-full min-h-[200px] border rounded-lg",
        className
      )}
    >
      <Image
        alt=""
        src={src}
        fill
        priority
        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
