import postgres from 'postgres';
import {
    Pardner,
    Hitchin,
    Target,
    Relationship,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchPardner() {
    try {
        const data = await sql<Pardner[]>`SELECT * FROM pardner`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchHitchin() {
    try {
      const data = await sql<Hitchin[]>`SELECT * FROM hitichin`;
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchTarget() {
    try {
        const data = await sql<Target[]>`SELECT * FROM target`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchRelationship() {
    try {
        const data = await sql<Relationship[]>`SELECT * FROM relationship`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
