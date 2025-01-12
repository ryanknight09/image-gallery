import { ThumbsDown, ThumbsUp } from "lucide-react";

interface Props {
  likes: number;
  dislikes: number;
}

export const Likes = ({ likes, dislikes }: Props) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2">
      <ThumbsUp className="h-4 w-4" />
      <div>{likes}</div>
    </div>
    <div className="flex items-center gap-2">
      <ThumbsDown className="h-4 w-4" />
      <div>{dislikes}</div>
    </div>
  </div>
);
