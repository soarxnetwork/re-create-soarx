"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ImageLogo = () => {
  return (
    <div className={``}>
      <Link href="/">
        <Image
          src="/images/Soarx-transparent-logo.png"
          alt="logo"
          height={210}
          width={210}
        />
      </Link>
    </div>
  );
};

export default ImageLogo;
