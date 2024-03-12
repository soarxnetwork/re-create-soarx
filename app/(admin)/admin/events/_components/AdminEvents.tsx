"use client";
import Link from "next/link";
import React, { useState, useRef, useTransition } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { Event } from "@prisma/client";
import { deleteEvent } from "@/actions/event";
import AdminEventsCard from "./AdminEventsCard";
interface EventProps {
  events: Event[];
  label: string;
}
const AdminEvents = ({ events, label }: EventProps) => {
  const toast = useRef<any>(null);
  const [isPending, startTransition] = useTransition();

  const accept = (id: string) => {
    startTransition(() => deleteEvent(id));
    toast.current.show({
      severity: "warn",
      summary: "Confirmed",
      detail: "You have successfully deleted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "info",
      summary: "Rejected",
      detail: "You have cancelled",
      life: 3000,
    });
  };

  const confirm2 = (id: string) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => accept(id),
      reject,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">{label}</h2>
        <Link href={"/admin/event/add"}>
          <button className="btn-primary" disabled={isPending}>
            Add Events
          </button>
        </Link>
      </div>
      <section className="all-events pt-8">
        <div className="grid-4 ">
          {events
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((e) => (
              <AdminEventsCard key={e.id} {...e} confirm2={confirm2} />
            ))}
        </div>
      </section>
    </>
  );
};

export default AdminEvents;
