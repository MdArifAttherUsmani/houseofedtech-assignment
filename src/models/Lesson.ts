
import mongoose from "../lib/db";
const LessonSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title: { type: String, required: true },
  content: String
}, { timestamps: true });
export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);
