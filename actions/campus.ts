"use server"

import { PrismaClient } from "@prisma/client";
import { CampusAmbassadorSchemaProps, CampusLeaderSchemaProps } from "@/schema/campus";

const prisma = new PrismaClient();

export const createCampusAmbassador = async (data: CampusAmbassadorSchemaProps) => {
  try {
    const campusAmbassador = await prisma.campusAmbassador.create({
      data: {
        ...data,
      }
    });
    return campusAmbassador;
  } catch (error) {
    throw new Error(`Failed to create campus ambassador: ${error}`);
  }
};

export const createCampusLeader = async (data: CampusLeaderSchemaProps) => {
  try {
    const campusLeader = await prisma.campusLeader.create({
      data: {
        ...data,
      }
    });
    return campusLeader;
  } catch (error) {
    throw new Error(`Failed to create campus leader: ${error}`);
  }
}