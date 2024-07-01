"use server"
import { PrismaClient } from "@prisma/client";
import { projectsSchemaProps } from "@/schema/projects";
const prisma = new PrismaClient();

export async function createUserProject(data: projectsSchemaProps ) {
    try {
        const newProject = await prisma.projects.create({
            data: {
                ...data,
            },
        });
        return newProject;
    } catch (error) {
        throw new Error(`Failed to create project: ${error}`);
    }
}

export async function deleteUserProject(id: string) {
    try {
        const deletedProject = await prisma.projects.delete({
            where: {
                id,
            },
        });
        return deletedProject;
    } catch (error) {
        throw new Error(`Failed to delete project: ${error}`);
    }
}



export async function updateUserProject(id: string, data: projectsSchemaProps) {
    try {
        const updatedProject = await prisma.projects.update({
            where: {
                id,
            },
            data: {
                ...data,
            },
        });
        return updatedProject;
    } catch (error) {
        throw new Error(`Failed to update project: ${error}`);
    }
}



export async function fetchUserProjects(userId: string) {
    try {
        const projects = await prisma.projects.findMany({
            where: {
                userId,
            },
        });
        return projects;
    } catch (error) {
        throw new Error(`Failed to fetch project: ${error}`);
    }
}

