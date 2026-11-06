import { NextResponse } from "next/server";

const users = [
  { id: "1", email: "student@lms.com", password: "password123", name: "Student User", progress: 45 },
  { id: "2", email: "instructor@lms.com", password: "password123", name: "Instructor User", progress: 87 },
];

export const GET = () => {
  return NextResponse.json(users.map(({ password, ...rest }) => rest));
};

export const POST = async (request: Request) => {
  const { email, name, password } = await request.json();

  // Check if user already exists
  if (users.find((u) => u.email === email)) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  const newUser = {
    id: crypto.randomUUID().substring(0, 8),
    email,
    name,
    password, // In real app: hash password
    progress: 0,
  };

  users.push(newUser);

  const { password: _, ...rest } = newUser;
  return NextResponse.json(rest);
};