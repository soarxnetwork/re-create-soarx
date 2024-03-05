import { NextResponse } from "next/server";

export const GET = (req: Request, res: Response) => {
  return Response.json({ message: "Hello, World!" });
};
