import { cookies } from "next/headers";
import { Pardner, Hitchin, Relationship } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import { fetchPardner } from "@/app/lib/data";
import QRCode from "react-qr-code";

var activePardner: Pardner;

export default async function Dashboard() {
  try {
    const cookieStore = await cookies();
    const inAuth = cookieStore.get("authToken");

    let p: Pardner[] = await fetchPardner();
    console.log(inAuth?.value);

    let validAuth: boolean = false;
    for (let i = 0; i < p.length; i++) {
      if (p[i].authtoken == inAuth?.value) {
        validAuth = true;
        activePardner = p[i];
        break;
      }
    }

    if (!validAuth) {
      redirect("/login");
    }
  } catch (e) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col w-screen h-screen bg-orange-200 items-center justify-center">
      <QRCode value={"http://172.20.188.222:3000/transferHitchin?pardner-id=" + activePardner.id + "&hitchin-id=" + 2/* put new hitchin here*/}/>
    </div>
  );
}
