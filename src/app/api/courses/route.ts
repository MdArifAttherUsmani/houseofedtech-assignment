import { NextResponse } from "next/server";
import Course from "../../../models/Course";
import { connectDB } from "../../../lib/db";


export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find().lean();
    return NextResponse.json(courses);
  } catch (err) {
    console.error("GET courses error:", err);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const course = await Course.create(body);
    return NextResponse.json(course);
  } catch (err) {
    console.error("POST course error:", err);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}
