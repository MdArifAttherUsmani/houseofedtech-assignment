import mongoose, { Schema, Document, Model } from "mongoose";
import { connectDB } from "../lib/db";

// 1. Connect DB
await connectDB();

// 2. Define TypeScript interface for Lesson
interface ILesson extends Document {
  courseId: mongoose.Types.ObjectId;
  title: string;
}

// 3. Schema
const LessonSchema: Schema<ILesson> = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
});

// 4. Model
const Lesson: Model<ILesson> = mongoose.models.Lesson || mongoose.model<ILesson>("Lesson", LessonSchema);

export default Lesson;
