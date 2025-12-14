import { NextResponse } from "next/server";
import Lesson from "../../../models/Lesson"; // relative path for Vercel
import { connectDB } from "../../../lib/db";

export async function GET() {
  await connectDB();
  const lessons = await Lesson.find().lean();
  return NextResponse.json(lessons);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const lesson = await Lesson.create(body);
  return NextResponse.json(lesson);
}
