"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const AlbumFilter = () => {
  const [filter, setFilter] = useState<string>();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const onFilterChange = (filter: string) => {
    params.set("filter", `${filter}`);
    setFilter(filter);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={(value) => onFilterChange(value)} value={filter}>
      <SelectTrigger className="w-28">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter Type</SelectLabel>
          <SelectItem value="q_all=">All</SelectItem>
          <SelectItem value="q_any=">Any</SelectItem>
          <SelectItem value="q_exactly=">Exactly</SelectItem>
          <SelectItem value="q_not=">Not</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
