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

export const deleteCampusAmbassador = async (userId: string) => {
  try {
    const campusAmbassador = await prisma.campusAmbassador.delete({
      where: {
        userId,
      }
    });
    return campusAmbassador;
  } catch (error) {
    throw new Error(`Failed to delete campus ambassador: ${error}`);
  }
}

export const deleteCampusLeader = async (userId: string) => {
  try {
    const campusLeader = await prisma.campusLeader.delete({
      where: {
        userId,
      }
    });
    return campusLeader;
  } catch (error) {
    throw new Error(`Failed to delete campus leader: ${error}`);
  }
}

export const getCampusAmbassador = async (userId: string) => {
  try {
    const campusAmbassador = await prisma.campusAmbassador.findUnique({
      where: {
        userId,
      }
    });
    return campusAmbassador;
  } catch (error) {
    throw new Error(`Failed to get campus ambassador: ${error}`);
  }
}


export const getCampusLeader = async (userId: string) => {
  try {
    const campusLeader = await prisma.campusLeader.findUnique({
      where: {
        userId,
      }
    });
    return campusLeader;
  } catch (error) {
    throw new Error(`Failed to get campus leader: ${error}`);
  }
} 