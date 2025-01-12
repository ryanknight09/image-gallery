"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Image } from "@/types/Album";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AlbumCover } from "./album/AlbumCover";
import { ViewCountAndDate } from "./ViewCountAndDate";

interface Props {
  image: Image;
  openImage?: string;
}

export const ExpandableImage = ({ image, openImage }: Props) => {
  const [open, setOpen] = useState(image.id === openImage);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClick = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("openImage", id);
    router.replace(`${pathname}?${params.toString()}`);
    setOpen(true);
  };

  const onClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("openImage");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Dialog key={image.id} onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <button
          key={image.id}
          onClick={() => onClick(image.id)}
          className="flex flex-col items-center gap-3 aspect-video transition-transform hover:scale-105 py-3 rounded-xl"
        >
          <AlbumCover src={image.link} />
          <ViewCountAndDate views={image.views} dateTime={image.datetime} />
        </button>
      </DialogTrigger>
      <DialogContent
        className="h-screen max-w-screen p-10"
        onCloseAutoFocus={onClose}
      >
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        <AlbumCover src={image.link} className="object-scale-down" />
      </DialogContent>
    </Dialog>
  );
};
