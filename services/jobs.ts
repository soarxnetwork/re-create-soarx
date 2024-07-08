"use server";
import { db } from "@/lib/db";

export const getAllJobs = async () => {
  try {
    return await db.job.findMany();
  } catch (err) {
    console.error(err);
  }
};