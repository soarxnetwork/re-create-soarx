"use server";
import { db } from "@/lib/db";
import { JobSchema } from "@/schema/JobSchema";
import { revalidatePath } from "next/cache";

export const JobSubmission = async (data: JobSchema) => {
  try {
    await db.job.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/admin/Job");
    revalidatePath("/admin/jobsAdmin");
    revalidatePath("/admin/Job/add");
    revalidatePath("/admin");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const editJob = async (data: JobSchema) => {
  try {
    await db.job.update({
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
