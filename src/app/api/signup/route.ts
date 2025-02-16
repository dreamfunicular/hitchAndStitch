import { Pardner } from "@/app/lib/definitions";
import { fetchPardner, newPardner } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

interface Inc {
  username: string;
  password: string;
  major: number;
}

export async function POST(req: NextRequest) {
  const data: Inc = await req.json();

  let pardners: Pardner[] = await fetchPardner();

  for (var i = 0; i < pardners.length; i++) {
    if (pardners[i].username == data.username) {
      return NextResponse.json({ status: 401 });
    }
  }

  let authToken = crypto.randomUUID();

  let p: Pardner = {
    id: Math.floor(Math.random() * 10000000),
    username: data.username,
    password: data.password,
    major: 0,
    authtoken: authToken,
  };

  console.log(p);

  newPardner(p);

  return NextResponse.json({ status: 200, authToken: authToken });
}
