import { cn } from "@/lib/utils";

interface Props {
  views: number;
  dateTime: number;
  className?: string;
}

export const ViewCountAndDate = ({ views, dateTime, className }: Props) => (
  <p
    className={cn("text-sm text-muted-foreground text-left w-full", className)}
  >
    {views} Views • {new Date(dateTime * 1000).toLocaleDateString()}
  </p>
);
