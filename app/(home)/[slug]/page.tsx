import EventPage from './EventPage';
import { getEventBySlug } from '@/services/events';

async function fetchData(slug: string) {
  const eventData = await getEventBySlug(slug);
  return eventData;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const eventData = await fetchData(params.slug);
  return <EventPage event={eventData} />;
}