"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { User } from "@prisma/client";
import Link from "next/link";
import { FaEarlybirds, FaUser, FaVenus } from "react-icons/fa";

interface SideBarProps {
  onSidebarHide: () => void;
  showSidebar: boolean;
  user: User;
}

const sidebarItems = [
  // { id: "0", title: "Dashboard", icons: <RxDashboard />, links: "/admin/home" },
  {
    id: "1",
    title: "All Events",
    icons: <MdOutlineEmojiEvents />,
    links: "/admin/events",
  },
  {
    id: "3",
    title: "Past Events",
    icons: <FaVenus />,
    links: "/admin/past-events",
  },
  {
    id: "4",
    title: "Current Events",
    icons: <FaEarlybirds />,
    links: "/admin/current-events",
  },
  {
    id: "2",
    title: "User Management",
    icons: <FaUser />,
    links: "/admin/users",
  },
  // {
  //   id: "2",
  //   title: "Ongoing Events",
  //   icons: <MdOutlineEmojiEvents />,
  //   links: "/admin/ongoing-events",
  // },
  // {
  //   id: "3",
  //   title: "Past Events",
  //   icons: <MdOutlineEmojiEvents />,
  //   links: "/admin/past-events",
  // },
];

export default function Sidebar({
  onSidebarHide,
  showSidebar,
  user,
}: SideBarProps) {
  const [selected, setSelected] = useState("0");

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col bg-white text-white z-10",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center  sm:justify-center xl:justify-start p-2  sidebar-separator-top">
          <Link href={"/"} className="sidebar-header-img">
            <Image
              src={"/images/soarx-header.png"}
              className="img-responsive"
              alt="Banner"
              width={100}
              height={100}
            />
          </Link>
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl ">
            AR CLUB
          </div>
          <div className="flex-grow sm:hidden xl:block" />

          <AiOutlineClose
            className=" text-4xl block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems.map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            {user?.username!}
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <BsThreeDotsVertical className="block sm:hidden xl:block w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
