import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function SkeletonCard({ className }: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton
        className={cn("aspect-square h-full w-full rounded-xl", className)}
      />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
