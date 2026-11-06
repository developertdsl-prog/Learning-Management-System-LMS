import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Course from "@/models/Course";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/lms");

export const GET = async () => {
  const courses = await Course.find();
  return NextResponse.json(courses);
};

export const POST = async (request: Request) => {
  const { title, instructor } = await request.json();
  const course = await Course.create({ title, instructor, students: 0, progress: 0, lessons: 0 });
  return NextResponse.json(course);
};