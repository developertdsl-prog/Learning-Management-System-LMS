import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "lms-jwt-secret-key";
const JWT_EXPIRES_IN = "7d";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  const { password: _, ...rest } = user.toObject();

  return NextResponse.json({ success: true, user: rest, token });
};