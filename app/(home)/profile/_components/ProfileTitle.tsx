"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@nextui-org/progress";
import { fetchUser } from "@/actions/user";
import { useSession } from "next-auth/react";

function ProfileTitle() {
  const { data: session } = useSession();
  const [data, setData] = useState<any>(null);
  const [completedProfile, setCompletedProfile] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.id) {
        console.error("User ID is missing");
        return;
      }

      try {
        const data = await fetchUser(session.user.id);
        setData(data);

        const totalFields = Object.keys(data!).length;
        const completedFields = Object.values(data!).filter(
          (value) => value !== null && value !== ""
        ).length;
        const completionPercentage = Math.round(
          (completedFields / totalFields) * 100
        );
        console.log(completionPercentage);
        setCompletedProfile(completionPercentage + 12);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setCompletedProfile(0);
      }
    };
    fetchData();
  }, [session?.user?.id]);
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between ml-4 md:ml-10 gap-y-6 md:gap-y-0 mr-4 md:mr-16 mb-16 p-4 md:p-6 rounded-lg">
      <div className="flex w-full">
        <h1 className="font-semibold text-3xl md:text-3xl">
          YOUR PROFILE
        </h1>
      </div>
      <Progress
        size="md"
        radius="lg"
        color="secondary"
        classNames={{
          base: "w-full max-w-md",
          track: "drop-shadow-md border border-default",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        label="Profile Status"
        value={completedProfile}
        showValueLabel={true}
      />
    </div>
  );
}

export default ProfileTitle;
