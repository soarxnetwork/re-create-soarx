import React from "react";
import { getAllEvents, getAllEventsWithPagination } from "@/services/events";
import { Metadata } from "next";
import { SearchParamsType } from "@/types";
import Pagination from "../../_components/Pagination";
import AdminEvents from "./_components/AdminEvents";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const AdminEventsPage = async ({ searchParams }: SearchParamsType) => {
  const currentPage = Number(searchParams?.page) || 1;

  const events = await getAllEventsWithPagination(currentPage);
  return (
    <>
      <section className=" space-y-8">
        <AdminEvents events={events.events} label="All Events" />
        <article className=" flex items-center justify-center ">
          <Pagination totalPages={events.totalPages} />
        </article>
      </section>
    </>
  );
};

export default AdminEventsPage;
