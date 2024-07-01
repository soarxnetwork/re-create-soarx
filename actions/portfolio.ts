"use server"
import { PrismaClient } from '@prisma/client';
import { portfolioSchemaProps } from '@/schema/portfolio';

const prisma = new PrismaClient();

export async function createUserPortfolio(data : portfolioSchemaProps) {
    try {
        const newPortfolio = await prisma.portfolio.create({
        data: {
            ...data,
        },
        });
        return newPortfolio;
    } catch (error) {
        throw new Error(`Failed to create user portfolio: ${error}`);
    }
}

export async function deleteUserPortfolio(userId: string) {
    try {
        const deletedPortfolio = await prisma.portfolio.delete({
        where: {
            userId: userId,
        },
        });
        return deletedPortfolio;
    } catch (error) {
        throw new Error(`Failed to delete user portfolio: ${error}`);
    }
}


export async function updateUserPortfolio(userId: string, data: portfolioSchemaProps) {
    try {
        const updatedPortfolio = await prisma.portfolio.update({
        where: {
            userId: userId,
        },
        data: {
            ...data,
        },
        });
        return updatedPortfolio;
    } catch (error) {
        throw new Error(`Failed to update user portfolio: ${error}`);
    }
}

export async function fetchUserPortfolio(userId: string) {
    try {
    const userPortfolio = await prisma.portfolio.findUnique({
        where: {
        userId,
        },
    });
    return userPortfolio;
    } catch (error) {
    throw new Error(`Failed to fetch user portfolio: ${error}`);
    }
}
