import mongoose, { Schema, Document, Model } from "mongoose";
import { connectDB } from "../lib/db";

// Connect DB before defining schema
await connectDB();

interface ILesson extends Document {
  courseId: mongoose.Types.ObjectId;
  title: string;
}

const LessonSchema: Schema<ILesson> = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
});

const Lesson: Model<ILesson> = mongoose.models.Lesson || mongoose.model<ILesson>("Lesson", LessonSchema);
export default Lesson;
