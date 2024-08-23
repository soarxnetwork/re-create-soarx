import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        revalidatePath("/admin");

        const { eventId } = await req.json();

        // Fetch event with registrations and user details
        const findRegisteredUser = await db.event.findFirst({
            where: {
                id: eventId
            },
            include: {
                registration: {
                    include: {
                        user: true
                    }
                }
            }
        });

        if (!findRegisteredUser) {
            return NextResponse.json({ msg: "Event not found", status: false }, { status: 404 });
        }

        // Extract registrations and map to CSV format
        const registrations = findRegisteredUser.registration;

        // Define the CSV header
        const header = [
            "Registration ID",
            "User ID",
            "Event ID",
            "Registration Date",
            "Username",
            "Email",
            "Phone",
            "Profession",
            "Gender",
            "Country",
            "College",
            "City",
            "Admin"
        ].join(",");

        // Generate CSV content with user details
        const csvContent = registrations.map(reg => {
            return [
                reg.id,
                reg.userId,
                reg.eventId,
                reg.registrationDate.toISOString(),
                reg.user.username,
                reg.user.email,
                reg.user.phone,
                reg.user.profession,
                reg.user.gender,
                reg.user.country,
                reg.user.college,
                reg.user.city,
                reg.user.admin
            ].join(",");
        }).join("\n");

        // Combine header and content
        const finalCsvContent = `${header}\n${csvContent}`;

        // Create and return the CSV response
        const res = new NextResponse(finalCsvContent, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="registrations_${eventId}.csv"`
            }
        });

        return res;

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ msg: "Something went wrong", status: false }, { status: 500 });
    }
}
