import { type Album } from "@/types/Album";
import { ViewCountAndDate } from "../ViewCountAndDate";

type Props = Pick<Album, "title" | "views" | "datetime" | "account_url">;

export const AlbumHeader = ({ title, views, datetime, account_url }: Props) => (
  <>
    <h1 className="text-3xl font-bold line-clamp-2">{title}</h1>
    <p className="text-lg">{account_url}</p>
    <ViewCountAndDate views={views} dateTime={datetime} />
  </>
);
