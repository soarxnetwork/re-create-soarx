import { Blog, Event, User } from "@prisma/client";

export interface EventCreator extends Event {
  creator: User;
}
export interface BlogCreator extends Blog {
  creator: User;
}

export interface EventWithCreator {
  events: EventCreator[];
}

export interface BlogWithCreator {
  blogs: BlogCreator[];
}
