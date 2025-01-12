import { SkeletonCard } from "@/components/SkeletonCard";
import { SkeletonSearchInput } from "@/components/SkeletonSearch";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <main className="3xl:container mx-auto py-8 pb-20 flex flex-col gap-8 h-full px-8 sm:px-20 md:px-8 2xl:px-8">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4">
            {Array.from({ length: 30 }, (_, index) => index + 1).map(
              (index) => (
                <SkeletonCard key={index} className="aspect-video" />
              )
            )}
          </div>
          {Array.from({ length: 30 }, (_, index) => index + 1).map((index) => (
            <SkeletonCard key={index} className="aspect-video" />
          ))}
        </div>
        <div className="lg:flex flex-col gap-8 lg:max-w-md hidden">
          <Separator className="lg:hidden" />
          <SkeletonSearchInput />
          <div className="grid grid-cols-1 gap-3 pl-8">
            {Array.from({ length: 30 }, (_, index) => index + 1).map(
              (index) => (
                <SkeletonCard key={index} className="aspect-video" />
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
