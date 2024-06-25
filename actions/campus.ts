"use server";

import { db } from "@/lib/db";
import { Dsa2Schema } from "@/schema/dsa2";
import { CampusAmbassador, CampusLeader } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { CampusLeaderSchema, CampusLeaderType } from '@/typesforCampusAmbaassadorPage'
import { user } from "@nextui-org/react";

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


export const campusLeaderFormRequest = async ({ data, userId }: any) => {
  try {
    // Log the incoming data for debugging purposes
    console.log('Data:', data);
    console.log('User ID:', userId);

    // Check if the user exists
    const user = await db.user.findUnique({
      where: { id: userId }
    });
    console.log("The user is", user);


    if (!user) {
      return { error: "User not found" };
    }

    // Create the CampusLeader record
    // const newCampusLeaderRequest = await db.campusLeader.create({
    //   data: {
    //     ...data,
    //     userId: userId,
    //   }
    // });

    // Return the created record
    // return newCampusLeaderRequest;

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Return a generic error message
    return { error: "Something went wrong" };
  }
};