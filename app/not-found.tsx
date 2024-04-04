import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { TbError404 } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function NotFound() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header {...session?.user!} />
      <div className="min-h-screen flex flex-col items-center justify-center gap-2">
        <div
          className="flex items-center relative fill-primaryPurple text-primaryPurple "
          color="purple"
        >
          <TbError404 className="text-6xl " />
          <VscError className="text-xl  absolute -right-6 top-2 fill-primaryPurple" />
        </div>
        <div className=" break-words flex items-center justify-center flex-col gap-8">
          <p className=" max-w-80 text-center text-xl">
            The page you are looking for does&apos;nt exist or has been moved
          </p>
          <Link
            href="/"
            className=" bg-primaryPurple px-6 py-2 text-white rounded-xl text-xl font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
