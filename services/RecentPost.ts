"use server";

import { db } from "@/lib/db";

export async function getRecentPosts() {
    try {
        const res = await db.job.findMany({
            take: 5
        })
        return {msg: res, status: true};
    } catch (error) {
        return { msg: "SOmething went wrong", status: false }
    }
}