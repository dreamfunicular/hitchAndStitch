'use client';
import {createRelationship} from '@/app/lib/data';
import {Relationship } from "@/app/lib/definitions";

export default function Main () {
    
    const userid = 1; //add code for user cookies

    const queryParameters = new URLSearchParams(window.location.search);
    let newPardnerID : number;
    newPardnerID = queryParameters.get("pardner-id") as unknown as number;
    let newHitchinID : number;
    newHitchinID = queryParameters.get("hitchin-id") as unknown as number;
    const newRelationship : Relationship = {
        id : 0,
        active : true,
        hitchinID: newHitchinID,
        pardnerID: newPardnerID,};
    createRelationship(newRelationship)
}