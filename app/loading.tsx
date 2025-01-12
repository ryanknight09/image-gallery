import { SkeletonCard } from "@/components/SkeletonCard";
import { SkeletonSearchInput } from "@/components/SkeletonSearch";

export default async function Page() {
  return (
    <main className="3xl:container mx-auto py-8 pb-20 flex flex-col gap-8 h-full px-8 sm:px-20 md:px-8 2xl:px-8">
      <h1 className="text-3xl font-bold text-left">Album Glossary</h1>
      <SkeletonSearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
        {Array.from({ length: 30 }, (_, index) => index + 1).map((index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </main>
  );
}
