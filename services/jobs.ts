"use server";
import { db } from "@/lib/db";

export const getAllJobs = async () => {
  try {
    return await db.job.findMany();
  } catch (err) {
    console.error(err);
  }
};


export const getJobBySlug = async (slug: string) => {
  try {
    return await db.job.findFirst({
      where: {
        id: slug,
      },
    });
  } catch (err) {
    console.error(err);
  }
};