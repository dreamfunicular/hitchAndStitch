"use client";

// if wronggoing, blame anna!

import Link from "next/link";
import { FormEvent } from "react";
import { useState } from "react";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warningText, setWarningText] = useState("");
  const [major, setMajor] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      password == "" ||
      username == "" ||
      confirmPassword == "" ||
      major == ""
    ) {
      setWarningText("One or more missing fields: try again!");
      return 0;
    } else {
      setWarningText("");
    }

    if (password != confirmPassword) {
      setWarningText("Passwords don't match: try again!");
      return 0;
    } else {
      setWarningText("");
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        major: major,
      }),
    });

    const data = await res.json();

    console.log(data.status);
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col rounded-xl bg-purple-600 items-center pt-2 p-1">
      <p className="text-2xl"> Welcome aboard, traveller!</p>
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
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="bg-white h-10 w-80 rounded-xl m-2 text-gray-800 indent-2 placeholder-gray-400"
      />
      <select
        defaultValue="defaultValue"
        className="bg-white h-10 w-80 rounded-xl m-2 text-gray-800 placeholder-gray-400 p-2"
        onChange={(e) => setMajor(e.target.value)}>
        <option value="defaultValue" disabled>
          {" "}
          Your Major{" "}
        </option>
        <option value="a"> a </option>
        <option value="b"> b </option>
      </select>
      <p className="text-2"> {warningText} </p>
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
