'use client';
import {createRelationship} from '@/app/lib/data';
import {Relationship } from "@/app/lib/definitions";

export default function Main () {
    
    const userid = 1; //add code for user cookies

    const queryParameters = new URLSearchParams(window.location.search);
    let id : number;
    id = queryParameters.get("id") as unknown as number;
    const newRelationship : Relationship = {
        id : 0,
        active : true,
        hitchinID: id,
        pardnerID: userid,};
    createRelationship(newRelationship)
}