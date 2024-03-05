"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ImageLogo = () => {
  const pathName = usePathname();

  const rootPathname =
    pathName.includes("/sign-in") || pathName.includes("/sign-up");
  const imgProp = rootPathname ? 80 : 33;

  return (
    <div className={``}>
      <Link href="/">
        <Image
          src="https://i.pinimg.com/736x/5f/71/68/5f716838afe9530c071c312f137e6199.jpg"
          alt="logo"
          height={imgProp}
          width={imgProp}
        />
      </Link>
    </div>
  );
};

export default ImageLogo;
