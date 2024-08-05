"use server";
import { EventSchema } from "@/schema/event";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();



export const createEvent = async (data: EventSchema) => {
  try {
    await db.event.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/events");
    revalidatePath("/admin/current-events");
    revalidatePath("/admin/past-events");
    revalidatePath("/events");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const editEvent = async (data: EventSchema) => {
  try {
    await db.event.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/events");
    revalidatePath("/admin/current-events");
    revalidatePath("/admin/past-events");
    revalidatePath("/events");
    revalidatePath(`/event/${data.id}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    await db.event.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/events");
    revalidatePath("/events");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
