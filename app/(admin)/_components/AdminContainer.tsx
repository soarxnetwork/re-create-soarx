"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Content from "./Content";
import { User } from "@prisma/client";

interface AdminContainerProps {
  children: React.ReactNode;
  user: User;
}

export const AdminContainer = ({ children, user }: AdminContainerProps) => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <>
      <Sidebar
        user={user!}
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      >
        {children}
      </Content>
    </>
  );
};
