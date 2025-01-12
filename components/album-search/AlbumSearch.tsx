import { cn } from "@/lib/utils";
import { type RouterType } from "@/types/Search";
import { AlbumFilter } from "./AlbumFilter";
import { AlbumSearchInput } from "./AlbumSearchInput";

interface Props extends RouterType {
  className?: string;
}

export const AlbumSearch = ({ className, routerType }: Props) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h3 className="text-xl font-bold text-left">Search More Albums</h3>
      <div className="flex gap-4">
        <AlbumSearchInput routerType={routerType} />
        <AlbumFilter />
      </div>
    </div>
  );
};
