import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    console.log(err)
    return new NextResponse(err, {
      status: 500,
    });
  }
};
