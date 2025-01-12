import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSearchInput() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-left">Search More Albums</h3>
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}
