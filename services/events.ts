"use server";
import { db } from "@/lib/db";

export const getAllEvents = async () => {
  try {
    return await db.event.findMany({
      include: {
        creator: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getEvent = async (id: string) => {
  try {
    return await db.event.findUnique({
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

export const getEventBySlug = async (slug: string) => {
  try {
    return await db.event.findUnique({
      where: {
        slug,
      },
      include: {
        creator: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getEventsWithSearch = async (search: string) => {
  try {
    return await db.event.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  } catch (err) {
    console.error(err);
  }
};
