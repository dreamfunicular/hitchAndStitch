import { NextRequest, NextResponse } from "next/server";
import { Pardner } from "@/app/lib/definitions";
import "@/app/lib/data";
import { fetchPardner, pushAuthToken } from "@/app/lib/data";
import { cookies } from "next/headers";
import "@/app/lib/data.ts";

interface Inc {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const inAuth = cookieStore.get("authToken");
    console.log("In auth:" + inAuth?.value);
  } catch (e) {
    console.log("No auth cookie.");
  }

  const data: Inc = await req.json();

  let submittedUsername: string = data.username;
  let submittedPassword: string = data.password;

  let p = await fetchPardner();
  let matchFound = false;
  let userId: number = 0;

  for (var i = 0; i < p.length; i++) {
    if (p[i].username == submittedUsername) {
      if (p[i].password == submittedPassword) {
        matchFound = true;
        userId = p[i].id;
      }

      break;
    }
  }

  if (matchFound) {
    let authToken = crypto.randomUUID();
    console.log(authToken);
    pushAuthToken(authToken, userId);
    return NextResponse.json({ status: 200, authToken: authToken });
  } else {
    return NextResponse.json({ status: 403 });
  }
}
