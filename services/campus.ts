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
            user: {
              OR: [
                {
                  username: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
                {
                  email: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              ],
            },
          }
        ],
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
