"use server";
import { db } from "@/lib/db";

export const getAllBlogs = async () => {
  try {
    return await db.blog.findMany({
      include: {
        creator: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getBlog = async (id: string) => {
  try {
    return await db.blog.findUnique({
      where: {
        id,
      },
      include: {
        creator: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
