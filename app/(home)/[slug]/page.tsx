import EventPage from './EventPage';
import { getEventBySlug } from '@/services/events';
import { getUsersRegisteredForEvent } from '@/actions/registration';
import NotFound from '@/app/not-found';

async function fetchData(slug: string) {
  const eventData = await getEventBySlug(slug);
  return eventData;
}


interface User {
  id: string;
  username: string | null;
  password: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
}


export default async function Page({ params }: { params: { slug: string } }) {
  const eventData = await fetchData(params.slug);
  
  if(eventData){
    
    const response = await getUsersRegisteredForEvent(eventData.id);

if (response.error) {
  // Handle error, for example:
  
  console.error('Error fetching users for event:', response.message);
  return(<div>Error fetching users for event</div>);
}

const users: User[] = response.data || [];

  return <EventPage event={eventData} users={users} />;
  }
  else{
    return NotFound();
  }
}