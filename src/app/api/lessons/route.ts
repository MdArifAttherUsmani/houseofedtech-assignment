import { NextResponse } from "next/server";
import Lesson from "../../../models/Lesson"; // adjust relative path according to route.ts location


export async function GET() {
  const lessons = await Lesson.find().lean(); // ✅ lean() returns plain JS objects
  return NextResponse.json(lessons);
}

export async function POST(req: Request) {
  const body = await req.json();
  const lesson = await Lesson.create(body);
  return NextResponse.json(lesson);
}
