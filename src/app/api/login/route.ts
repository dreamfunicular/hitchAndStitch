import { NextRequest, NextResponse } from "next/server";

interface Inc {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const data: Inc = await req.json();

  console.log(data.username);
  console.log(data.password);

  return NextResponse.json({ status: 200 });
}
