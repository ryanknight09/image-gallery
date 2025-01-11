import { type Image } from "@/types/Album";
import { AlbumCover } from "../album/AlbumCover";

interface Props {
  image: Image;
}

export const ImagePreview = ({ image }: Props) => {
  return (
    <div
      key={image.id}
      className="flex flex-col items-center gap-4 aspect-video mb-12 group"
    >
      <AlbumCover src={image.link} />
      <div className="flex flex-col justify-start w-full">
        <h3 className="text-md font-bold line-clamp-2">{image.description}</h3>
        <div>
          <p className="max-w-fit text-sm">
            {image.views} Views •{" "}
            {new Date(image.datetime * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
