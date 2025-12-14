
import { NextResponse } from "next/server";
import Lesson from "../../../models/Lesson";

export async function GET() {
  return NextResponse.json(await Lesson.find());
}
export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json(await Lesson.create(body));
}
