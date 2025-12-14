import { NextResponse } from "next/server";
import Course from "../../../../models/Course";
import { connectDB } from "../../../../lib/db";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // ✅ IMPORTANT FIX
    const { id } = await context.params;

    const body = await req.json();

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!updatedCourse) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCourse);
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json(
      { success: false, error: "Update failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    // ✅ SAME FIX HERE
    const { id } = await context.params;

    await Course.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Delete failed" },
      { status: 500 }
    );
  }
}
