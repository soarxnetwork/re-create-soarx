"use server";

import { db } from "@/lib/db";
import { Admin, User } from "@prisma/client";
import { revalidatePath } from "next/cache";
interface updateAdminPayload {
  id: string;
  admin: Admin;
}
export const updateAdminPermission = async ({
  id,
  admin,
}: updateAdminPayload) => {
  try {
    await db.user.update({
      where: {
        id,
      },
      data: {
        admin,
      },
    });
    revalidatePath("/mock/user");
  } catch (err) {
    console.error(err);
    throw err;
  }
};
