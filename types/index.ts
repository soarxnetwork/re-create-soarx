import { Blog, Event, User } from "@prisma/client";

// ! rewrite type
declare module "next-auth" {
  interface Session {
    user: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

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

export interface SearchParamsType {
  searchParams?: {
    query?: string;
    page?: string;
  };
}
