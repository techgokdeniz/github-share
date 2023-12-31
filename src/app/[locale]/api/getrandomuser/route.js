import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  let data = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
    take: 5,
  });

  data = data.sort(() => Math.random() - 0.5);

  return NextResponse.json({
    success: true,
    message: "Last user fetched!",
    data,
  });
}
