"use client";

// if wronggoing, blame anna!

import Link from "next/link";
import { FormEvent } from "react";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await res.json();

    console.log(data.status);
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col rounded-xl bg-purple-600 items-center pt-2 p-1">
      <p className="text-2xl"> Welcome back, traveller!</p>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-white h-10 w-80 rounded-xl m-2 text-gray-800 indent-2 placeholder-gray-400"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="bg-white h-10 w-80 rounded-xl m-2 text-gray-800 indent-2 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-orange-200 text-gray-400 rounded-xl w-fit p-1 m-2 hover:bg-orange-300 hover:text-gray-600 border-gray-400 border-1">
        Submit
      </button>
      <p className="text-2">
        {" "}
        Don't have an account?{" "}
        <Link href="/signup">
          <u> Sign up.</u>
        </Link>
      </p>
    </form>
  );
}
