"use server";
import { db } from "@/lib/db";
import { Admin } from "@prisma/client";

export const getCurrentUser = async () => {
  try {
    // return db.user.findUnique({
    //   where: {
    //     externalUserId: self?.id!,
    //   },
    // });
  } catch (err) {
    console.error(err);
  }
};

export const getAllUser = async () => {
  try {
    return db.user.findMany({});
  } catch (err) {
    console.error(err);
  }
};
