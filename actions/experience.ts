"use server"
import { experienceSchemaProps } from '@/schema/experience';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserExperience(data : experienceSchemaProps) {
  try {
    const newExperience = await prisma.experience.create({
      data: {
        ...data,
      },
    });
    return newExperience;
  } catch (error) {
    throw new Error(`Failed to create user education: ${error}`);
  }
}

export async function deleteUserExperience(experienceId: string) {
    try {
      const deletedExperience = await prisma.experience.delete({
        where: {
          id: experienceId,
        },
      });
      return deletedExperience;
    } catch (error) {
      throw new Error(`Failed to delete user education: ${error}`);
    }
  }

export async function updateUserExperience(experienceId: string, data: experienceSchemaProps) {
    try {
      const updatedExperience = await prisma.experience.update({
        where: {
          id: experienceId,
        },
        data: {
          ...data,
        },
      });
      return updatedExperience;
    } catch (error) {
      throw new Error(`Failed to update user education: ${error}`);
    }
  }

  export async function fetchUserExperiences(userId: string) {
    try {
      const userExperiences = await prisma.experience.findMany({
        where: {
          userId,
        },
      });
      return userExperiences;
    } catch (error) {
      throw new Error(`Failed to fetch user educations: ${error}`);
    }
  }
