'use server';
import postgres from 'postgres';
import {
    Pardner,
    Hitchin,
    Relationship,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchPardner() {
    try {
        const data = await sql<Pardner[]>`SELECT * FROM pardner`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function fetchHitchin() {
    try {
      const data = await sql<Hitchin[]>`SELECT * FROM hitichin`;
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch data.');
    }
}

export async function fetchRelationship() {
    try {
        const data = await sql<Relationship[]>`SELECT * FROM relationship`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch data.');
    }
}

export async function createPardner(newPardner: Pardner) {
    try {
        const newUsername = newPardner.username;
        const newPassword = newPardner.password;
        const newMajor = newPardner.major;       
        await sql`INSERT INTO pardner (username, password, chosenmajor, currentrelationshipid, pastRelationshipids)
        VALUES (${newUsername}, ${newPassword}, ${newMajor}, ${0}, ${[]})`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add data.');
    }
}

export async function createHitchin(newHitchin: Hitchin) {
    try {
        const newName = newHitchin.name;
        const newTarget = newHitchin.target;
        const newMoveOutTime = newHitchin.moveOutTime;
        await sql`INSERT INTO hitchin (name, exp, currentRelationshipid, pastRelationshipids, moveouttime, target)
        VALUES (${newName}, ${0}, ${0}, ${[]}, ${newMoveOutTime}, ${newTarget})`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add data.');
    }
}

export async function createRelationship(newRelationship: Relationship) {
    try {
        const newPardnerID = newRelationship.pardnerID;
        const newHitchinID = newRelationship.hitchinID;
        await sql`INSERT INTO relationship (active, pardnerid, hitchinid)
        VALUES (${true}, ${newPardnerID}, ${newHitchinID})`;
        await sql`UPDATE relationship
        SET active = ${false}
        WHERE pardnerid = ${newPardnerID}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to add data.');
    }
}
