import React from "react";
import {
  getAllEvents,
  getAllEventsWithPaginationSearch,
  getEventsWithSearch,
} from "@/services/events";
import { Metadata } from "next";
import AdminEvents from "../_components/AdminEvents";
import { SearchParamsType } from "@/types";
import Pagination from "@/app/(admin)/_components/Pagination";

interface AdminEventsPageProps extends SearchParamsType {
  params: {
    search: string;
  };
}

const AdminSearchEventsPage = async ({
  params,
  searchParams,
}: AdminEventsPageProps) => {
  const events = await getAllEventsWithPaginationSearch(
    +searchParams?.page!,
    params.search
  );

  return (
    <>
      <section className=" space-y-8">
        <AdminEvents events={events?.events} label="All Events" />
        <article className=" flex items-center justify-center ">
          <Pagination totalPages={events?.totalPages!} />
        </article>
      </section>
    </>
  );
};

export default AdminSearchEventsPage;
