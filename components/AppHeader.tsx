import Image from "next/image";
import Link from "next/link";

export const AppHeader = () => (
  <div className="h-16 w-full border-b">
    <div className="3xl:container mx-auto flex items-center h-full px-8 sm:px-20 md:px-8 2xl:px-8">
      <Link href={"/"}>
        <Image src={"/imgur.svg"} alt={"imgur"} width={100} height={100} />
      </Link>
    </div>
  </div>
);
