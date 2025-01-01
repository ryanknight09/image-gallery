"use client";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  value?: string;
  className?: string;
}

export const ClipBoard = ({ value, className }: Props) => {
  const [open, setOpen] = useState(false);

  const onCopyClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(value!);
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              onClick={onCopyClick}
              className="w-4 h-4 text-gray-400 invisible group-hover:visible"
            >
              <Copy />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="mb-3">Copied!</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
