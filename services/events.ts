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

const perPage = 3;
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

export const getAllEventsWithPagination = async (currentPage: number) => {
  try {
    const skip = (currentPage - 1) * perPage;
    const totalEvents = await db.event.count();
    const totalPages = Math.ceil(totalEvents / perPage);

    const events = await db.event.findMany({
      include: {
        creator: true,
      },
      skip,
      take: perPage,
    });

    return {
      events,
      totalPages,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllEventsWithPaginationSearch = async (
  currentPage: number,
  query: string
) => {
  try {
    const skip = (currentPage - 1) * perPage;
    const totalEvents = await db.event.count({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(totalEvents / perPage);
    const events = await db.event.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      skip,
      take: perPage,
    });

    return {
      events,
      totalPages,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getAllPastEventsWithPagination = async (currentPage: number) => {
  const skip = (currentPage - 1) * perPage;
  const totalEvents = await db.event.count({
    where: {
      date: {
        lt: new Date(),
      },
    },
  });
  const totalPages = Math.ceil(totalEvents / perPage);
  const pastEvents = await db.event.findMany({
    where: {
      date: {
        lt: new Date(),
      },
    },
    skip,
    take: perPage,
  });

  return {
    pastEvents,
    totalPages,
  };
};
export const getAllCurrentEventWithPagination = async (currentPage: number) => {
  const skip = (currentPage - 1) * perPage;
  const totalEvents = await db.event.count({
    where: {
      date: {
        gte: new Date(),
      },
    },
  });
  const totalPages = Math.ceil(totalEvents / perPage);
  const currentEvents = await db.event.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
    take: perPage,
    skip,
  });
  return {
    currentEvents,
    totalPages,
  };
};
