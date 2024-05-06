import { db } from "@/lib/db";

export const getRegistrationByEventId = async (eventId: string) => {
  try {
    return await db.registration.findFirst({
      where: {
        eventId,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const isUserRegisteredWithEvent = async (
  eventId: string,
  userId: string
) => {
  try {
    return !!(await db.registration.findFirst({
      where: {
        eventId,
        userId,
      },
    }));
  } catch (err) {
    console.error(err);
  }
};
