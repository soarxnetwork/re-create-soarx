"use server";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
    revalidatePath("/admin");

    try {
        const getAmbasDetails = await db.campusAmbassador.findMany({
            include: {
                user: true
            }
        });

        // console.log(getAmbasDetails)
        // Define the CSV header
        const header = [
            "Ambassador ID",
            "WhyCampusAmbassador",
            "TechnicalSkills",
            "StudentOrganizations",
            "WeekHoursForAmbassador",
            "SixMonthCommitment",
            "HearAboutSoarx",
            "AdditionalInfo",
            "EventOrganization",
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
        const csvContent = getAmbasDetails.map(amb => {
            return [
                amb.id,
                amb.WhyCampusAmbassador,
                amb.TechnicalSkills,
                amb.StudentOrganizations,
                amb.WeekHoursForAmbassador,
                amb.SixMonthCommitment,
                amb.HearAboutSoarx,
                amb.AdditionalInfo,
                amb.EventOrganization,
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

            ].join(",");
        }).join("\n");

        // Combine header and content
        const finalCsvContent = `${header}\n${csvContent}`;

        // Create and return the CSV response
        const res = new NextResponse(finalCsvContent, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="campus_ambassadors.csv"`
            }
        });
        return res;
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", status: false });
    }
}
