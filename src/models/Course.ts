import mongoose, { Schema, Model, models } from "mongoose";

export interface ICourse {
  title: string;
  description?: string;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

const Course: Model<ICourse> =
  models.Course || mongoose.model<ICourse>("Course", CourseSchema);

export default Course;
