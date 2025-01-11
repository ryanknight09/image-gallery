import { type Album } from "@/types/Album";

interface Props {
  albums: Album[];
}

export const Albums = ({ albums }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
};
