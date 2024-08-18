"use server";
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
    // console.log("UserExist Is: ", userExist)
   
    if(userExist?.id && userExist?.userId && userExist?.eventId && userExist?.registrationDate){
      // console.log("In if section of backend")
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};



export const CheckUserAlreadyRegistered = async (
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

    // console.log("UserExist is: ", userExist);

    if (
      userExist?.id &&
      userExist?.userId &&
      userExist?.eventId &&
      userExist?.registrationDate
    ) {
      return { msg: "User Already Registered", status: true };
    }
    
    // If userExist is null or doesn't satisfy the condition
    return { msg: "User Not Registered", status: false };
  } catch (error) {
    console.error("Error checking registration: ", error);
    return { msg: "An error occurred", status: false };
  }
};
