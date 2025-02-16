import { cookies } from "next/headers";
import { Pardner, Hitchin, Relationship } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import { fetchHitchin, fetchPardner, fetchRelationship } from "@/app/lib/data";
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
  let activeHitchinID = 1;
  return (
    <div className="flex flex-col w-screen h-screen bg-orange-200 items-center justify-center">
      <QRCode value={"https://hitch-and-stich.vercel.app/transferHitchin?pardner-id=" + activePardner.id + "&hitchin-id=" + (activeHitchinID + 1)}/>
    </div>
  );
}
