import React from "react";
import {
  getAllEvents,
  getAllEventsWithPagination,
  getAllPastEventsWithPagination,
} from "@/services/events";
import { Metadata } from "next";
import AdminEvents from "../events/_components/AdminEvents";
import Pagination from "../../_components/Pagination";
import { SearchParamsType } from "@/types";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Page",
};

const PastEventsPage = async ({ searchParams }: SearchParamsType) => {
  const currentPage = Number(searchParams?.page) || 1;

  const events = await getAllPastEventsWithPagination(currentPage);

  return (
    <>
      <section className=" space-y-8">
        <AdminEvents events={events?.pastEvents} label="All Events" />
        <article className=" flex items-center justify-center ">
          <Pagination totalPages={events?.totalPages} />
        </article>
      </section>
    </>
  );
};

export default PastEventsPage;
