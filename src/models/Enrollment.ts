import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./User";
import { ICourse } from "./Course";

export interface IEnrollment extends Document {
  user: IUser["_id"];
  course: ICourse["_id"];
  progress: number;
  completedLessons: string[];
  enrolledAt: Date;
}

const EnrollmentSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    progress: { type: Number, default: 0 },
    completedLessons: [{ type: String }],
    enrolledAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

mongoose.models.Enrollment = mongoose.model<IEnrollment>("Enrollment", EnrollmentSchema);
export default mongoose.models.Enrollment;