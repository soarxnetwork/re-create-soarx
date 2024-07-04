import React from 'react'
import JobAddAdminForm from "./_components/JobAddAdminForm";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import { JobSubmission } from '@/actions/Job';

const AddJob = async () => {
    const session = await getServerSession(authOptions);
    return <JobAddAdminForm creatorId={session?.user?.id!} action={JobSubmission}/>;
}

export default AddJob
