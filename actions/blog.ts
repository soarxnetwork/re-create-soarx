"use server";
import { db } from "@/lib/db";
import { BlogSchema } from "@/schema/blog";
import { revalidatePath } from "next/cache";

export const createBlog = async (data: BlogSchema) => {
  try {
    await db.blog.create({
      data: {
        ...data!,
      },
    });
    revalidatePath("/mock");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const editBlog = async (data: BlogSchema) => {
  try {
    await db.blog.update({
      where: {
        id: data.id,
      },
      data: {
        ...data!,
      },
    });
    revalidatePath("/mock");
    revalidatePath(`/mock/blog/${data.id}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteBlog = async (id: string) => {
  try {
    await db.blog.delete({
      where: {
        id,
      },
    });
    revalidatePath("/mock");
    revalidatePath(`/mock/blog/${id}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
