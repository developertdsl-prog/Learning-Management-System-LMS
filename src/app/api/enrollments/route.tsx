import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import Course from "@/models/Course";
import Enrollment from "@/models/Enrollment";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/lms");

export const GET = async () => {
  const enrollments = await Enrollment.find().populate("user course");
  return NextResponse.json(enrollments);
};

export const POST = async (request: Request) => {
  const { userId, courseId } = await request.json();

  // Check if user exists
  const user = await User.findById(userId);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Check if course exists
  const course = await Course.findById(courseId);
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  // Check if already enrolled
  const existing = await Enrollment.findOne({ user: userId, course: courseId });
  if (existing) {
    return NextResponse.json({ error: "Already enrolled" }, { status: 400 });
  }

  const enrollment = await Enrollment.create({
    user: userId,
    course: courseId,
    progress: 0,
  });

  return NextResponse.json(enrollment);
};