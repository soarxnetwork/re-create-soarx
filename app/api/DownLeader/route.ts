"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(){
    revalidatePath("/admin");
    try {
        const leaders = await db.campusLeader.findMany({
            include: {
                user: true
            }
        })
        // console.log(leaders);

        const header = [
            "Ambassador ID",
            "Why Capter Leader",
            "Leadership Experience",
            "Student Organizations",
            "Strategy For Soarx",
            "Core Team Soarx",
            "Qualities For Team",
            "Week Hours For Chapter Leader",
            "One Year Commitment",
            "Hear About Soarx",
            "Additional Info",
            "User ID",
            "Username",
            "Email",
            "Phone",
            "Profession",
            "Gender",
            "Country",
            "College",
            "City",
            "Admin",
            "Created At"
        ].join(",");

        // Generate CSV content with ambassador details
        const csvContent = leaders.map(amb => {
            return [
                amb.id,
                amb.WhyCapterLeader,
                amb.LeaderShipExperience,
                amb.StudentOrganizations,
                amb.StrategyForSoarx,
                amb.CoreTeamSoarx,
                amb.QualitiesForTeam,
                amb.WeekHoursForChapterLeader,
                amb.OneYearCommitment,
                amb.HearAboutSoarx,
                amb.AdditionalInfo,
                amb.userId,
                amb.user.username,
                amb.user.email,
                amb.user.phone,
                amb.user.profession,
                amb.user.gender,
                amb.user.country,
                amb.user.college,
                amb.user.city,
                amb.user.admin,
                amb.createdAt.toISOString() // Format date as ISO string
            ].join(",");
        }).join("\n");

        // Combine header and content
        const finalCsvContent = `${header}\n${csvContent}`;

        // Create and return the CSV response
        const res =  new NextResponse(finalCsvContent, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="campus_ambassadors.csv"`
            }
        });

        return res;
    } catch (error) {
        return NextResponse.json({msg: "Failed To download Leaders on sevrer", status: false}, {status: 401})
    }
}