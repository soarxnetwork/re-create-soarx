import { db } from "@/lib/db";

export const getAllCampusAmbassador = async () => {
  try {
    return await db.campusAmbassador.findMany();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getCampusAmbassadorById = async (id: string) => {
  try {
    return await db.campusAmbassador.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const getCampusWithSearch = async (search: string) => {
  try {
    return await db.campusAmbassador.findMany({
      where: {
        OR: [
          {
            collegeName: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            fullname: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            collegeEmail: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            collegeLocation: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
