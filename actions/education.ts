"use server"
import { educationSchemaProps } from '@/schema/education';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserEducation(data : educationSchemaProps) {
  try {
    const newEducation = await prisma.education.create({
      data: {
        ...data,
      },
    });
    return newEducation;
  } catch (error) {
    throw new Error(`Failed to create user education: ${error}`);
  }
}

export async function deleteUserEducation(educationId: string) {
    try {
      const deletedEducation = await prisma.education.delete({
        where: {
          id: educationId,
        },
      });
      return deletedEducation;
    } catch (error) {
      throw new Error(`Failed to delete user education: ${error}`);
    }
  }

  export async function updateUserEducation(educationId: string, data: educationSchemaProps) {
    try {
      const updatedEducation = await prisma.education.update({
        where: {
          id: educationId,
        },
        data: {
          ...data,
        },
      });
      return updatedEducation;
    } catch (error) {
      throw new Error(`Failed to update user education: ${error}`);
    }
  }
  
  export async function fetchUserEducations(userId: string) {
    try {
      const userEducations = await prisma.education.findMany({
        where: {
          userId,
        },
      });
      return userEducations;
    } catch (error) {
      throw new Error(`Failed to fetch user educations: ${error}`);
    }
  }
  