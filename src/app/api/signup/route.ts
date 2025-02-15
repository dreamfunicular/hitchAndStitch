import { NextRequest, NextResponse } from "next/server";

interface Inc {
  username: string;
  password: string;
  major: string;
}

export async function POST(req: NextRequest) {
  const data: Inc = await req.json();

  console.log(data.username);
  console.log(data.password);
  console.log(data.major);

  return NextResponse.json({ status: 200 });
}
