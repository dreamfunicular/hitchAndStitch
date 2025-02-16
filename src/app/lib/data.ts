import postgres from "postgres";
import { Pardner, Hitchin, Target, Relationship } from "./definitions";
const { Pool } = require("pg");

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function fetchPardner() {
  try {
    const data = await sql<Pardner[]>`SELECT * FROM pardner`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function pushAuthToken(authToken: string, id: number) {
  console.log(authToken);
  console.log(id);
  pool.query(`UPDATE pardner SET authtoken='${authToken}' WHERE id=${id}`);
}

export async function newPardner(p: Pardner) {
  pool.query(
    `INSERT INTO pardner (username, password, authtoken) VALUES ('${p.username}', '${p.password}', '${p.authtoken}');`
  );
}

export async function fetchHitchin() {
  try {
    const data = await sql<Hitchin[]>`SELECT * FROM hitichin`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchTarget() {
  try {
    const data = await sql<Target[]>`SELECT * FROM target`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchRelationship() {
  try {
    const data = await sql<Relationship[]>`SELECT * FROM relationship`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
