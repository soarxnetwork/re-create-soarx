"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  item: {
    id: string;
    title: string;
    icons: React.ReactNode;
    links: string;
  };
  selected: string;
  onClick: (id: string) => void;
}

export default function MenuItem({
  item: { id, title, icons, links },
  selected,
}: MenuItemProps) {
  const pathname = usePathname();
  return (
    <Link href={links}>
      <div
        className={clsx(
          "w-full mt-6 flex items-center px-6 sm:px-0 xl:px-6 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer text-lg",
          pathname === links ? "sidebar-item-selected" : "sidebar-item"
        )}
      >
        {icons}
        <div className="block sm:hidden xl:block ml-2">{title}</div>
        <div className="block sm:hidden xl:block flex-grow" />
      </div>
    </Link>
  );
}
