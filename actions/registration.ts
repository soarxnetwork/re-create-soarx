"use server";
import { db } from "@/lib/db";
import { isUserRegisteredWithEvent } from "@/services/registration";
export const registEventById = async (eventId: string, userId: string) => {
  try {
    const userExist = await isUserRegisteredWithEvent(eventId, userId);
    if (userExist) {
      return {
        message: `You already registered this event!`,
        error: true,
      };
    }
    const regist = await db.registration.create({
      data: {
        eventId,
        userId,
      },
      include: {
        event: true,
      },
    });
    return {
      message: `Successfully register ${regist.event.title} event!`,
    };
  } catch (err) {
    console.error(err);
  }
};

export const getUsersRegisteredForEvent = async (eventId: string) => {
  try {
    const registrations = await db.registration.findMany({
      where: {
        eventId: eventId,
      },
      include: {
        user: true,
      },
    });

    const users = registrations.map(registration => registration.user);

    return {
      message: `Successfully retrieved users registered for event with ID ${eventId}`,
      data: users,
    };
  } catch (err) {
    console.error(err);
    return {
      message: `Failed to retrieve users registered for event with ID ${eventId}`,
      error: true,
    };
  }
};