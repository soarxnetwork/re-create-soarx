"use server"
import { certificateSchemaProps } from '@/schema/certificate';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUserCertificate(data : certificateSchemaProps) {
  try {
    const newCertificate = await prisma.certifications.create({
      data: {
        ...data,
      },
    });
    return newCertificate;
  } catch (error) {
    throw new Error(`Failed to create user certificate: ${error}`);
  }
}

export async function deleteUserCertificate(certificateId: string) {
    try {
      const deletedCertificate = await prisma.certifications.delete({
        where: {
          id: certificateId,
        },
      });
      return deletedCertificate;
    } catch (error) {
      throw new Error(`Failed to delete user certificate: ${error}`);
    }
  }

    export async function updateUserCertificate(certificateId: string, data: certificateSchemaProps) {
        try {
        const updatedCertificate = await prisma.certifications.update({
            where: {
            id: certificateId,
            },
            data: {
            ...data,
            },
        });
        return updatedCertificate;
        } catch (error) {
        throw new Error(`Failed to update user certificate: ${error}`);
        }
    }

    export async function fetchUserCertificates(userId: string) {
        try {
        const userCertificates = await prisma.certifications.findMany({
            where: {
            userId,
            },
        });
        return userCertificates;
        } catch (error) {
        throw new Error(`Failed to fetch user certificates: ${error}`);
        }
    }
    