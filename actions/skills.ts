"use server"
import { skillsSchemaProps } from '@/schema/skills';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserSkills(data : skillsSchemaProps) {
  try {
    const newSkills = await prisma.skills.create({
      data: {
        ...data,
      },
    });
    return newSkills;
  } catch (error) {
    throw new Error(`Failed to create user skills: ${error}`);
  }
}

export async function deleteUserSkills(userId: string) {
    try {
      const deletedSkills = await prisma.skills.delete({
        where: {
          userId: userId,
        },
      });
      return deletedSkills;
    } catch (error) {
      throw new Error(`Failed to delete user skills: ${error}`);
    }
  }

export async function updateUserSkills(userId: string, data: skillsSchemaProps) {
    try {
      const updatedSkills = await prisma.skills.update({
        where: {
          userId: userId,
        },
        data: {
          ...data,
        },
      });
      return updatedSkills;
    } catch (error) {
      throw new Error(`Failed to update user skills: ${error}`);
    }
  }
  
    export async function fetchUserSkills(userId: string) {
        try {
        const userSkills = await prisma.skills.findUnique({
            where: {
            userId,
            },
        });
        return userSkills;
        } catch (error) {
        throw new Error(`Failed to fetch user skills: ${error}`);
        }
    }

    