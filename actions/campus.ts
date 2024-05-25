"use server";

import { db } from "@/lib/db";
import { Dsa2Schema } from "@/schema/dsa2";
import { CampusAmbassador } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createCampusAmbassador = async (data: Dsa2Schema) => {
  try {
    await db.campusAmbassador.create({
      data: {
        ...data,
        user: {}, // Add the 'user' property here
      },
    });
    revalidatePath("/admin/campus-ambassador");
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteCampusAmbassador = async (id: string) => {
  try {
    await db.campusAmbassador.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin/campus-ambassador");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
