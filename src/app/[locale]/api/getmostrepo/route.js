import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  let data = await prisma.user.findMany({
    orderBy: {
      reposCount: "desc",
    },
    take: 5,
  });

  return NextResponse.json({
    success: true,
    message: "Last user fetched!",
    data,
  });
}
