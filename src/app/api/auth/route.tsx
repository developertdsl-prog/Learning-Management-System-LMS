import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/lms");

const JWT_SECRET = process.env.JWT_SECRET || "lms-jwt-secret-key";
const JWT_EXPIRES_IN = "7d";

export const GET = async () => {
  const users = await User.find().select("-password");
  return NextResponse.json(users);
};

export const POST = async (request: Request) => {
  const { email, password, name } = await request.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword, name, role: "student" });

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  const { password: _, ...rest } = user.toObject();

  return NextResponse.json({ success: true, user: rest, token });
};