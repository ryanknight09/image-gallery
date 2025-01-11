"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

export const AlbumSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("term", term);
    } else {
      params.delete("term");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      placeholder="Search..."
      className="max-w-md"
      type="search"
      defaultValue={searchParams.get("search")?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
};
