import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  instructor: string;
  students: number;
  progress: number;
  lessons: number;
  thumbnail: string;
}

const CourseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    students: { type: Number, default: 0 },
    progress: { type: Number, default: 0 },
    lessons: { type: Number, default: 0 },
    thumbnail: { type: String, default: "/course.svg" },
  },
  { timestamps: true }
);

mongoose.models.Course = mongoose.model<ICourse>("Course", CourseSchema);
export default mongoose.models.Course;