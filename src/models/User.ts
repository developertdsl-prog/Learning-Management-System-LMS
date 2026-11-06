import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string; // hashed password
  name: string;
  role: "student" | "instructor" | "admin";
  progress: number;
  createdAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
    progress: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

mongoose.models.User = mongoose.model<IUser>("User", UserSchema);
export default mongoose.models.User;