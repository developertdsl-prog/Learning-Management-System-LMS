import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Enrollment from "@/models/Enrollment";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/lms");

export const GET = async () => {
  const progress = await Enrollment.find().populate("user course");
  return NextResponse.json(progress);
};

export const POST = async (request: Request) => {
  const { courseId, lessonId } = await request.json();

  // Find the enrollment for the current user
  // In a real app, userId would come from auth session
  const enrollment = await Enrollment.findOne({ course: courseId }).populate("user course");
  
  if (!enrollment) {
    return NextResponse.json({ error: "Enrollment not found" }, { status: 404 });
  }

  // Update progress
  enrollment.progress = Math.min(enrollment.progress + 10, 100);
  if (!enrollment.completedLessons.includes(lessonId)) {
    enrollment.completedLessons.push(lessonId);
  }
  await enrollment.save();

  return NextResponse.json(enrollment);
};