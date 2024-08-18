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
    const userExist = await db.registration.findFirst({
      where: {
        eventId,
        userId,
      },
    });
    console.log("Event id: ", eventId);
    console.log("Userid: ", userId);
    console.log("Is User Exits, ", userExist)
    if(userExist?.id && userExist?.userId && userExist?.eventId && userExist?.registrationDate){
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};
