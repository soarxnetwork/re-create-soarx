import { getJobBySlug } from "@/services/jobs";
import JobPage from "./JobPage";
async function fetchData(id: string) {
  const jobData = await getJobBySlug(id);
  return jobData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const jobData = await fetchData(params.slug);

  return <JobPage event={jobData} />;
}
