'use client';

import { useState } from "react";

function SeedTester() {

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    setText(e.target.value);
  }

  return (
    <div>
      <h3>Seed: <input type="text" onChange={handleChange}></input></h3>
      <h3>The Hitchin's traits:</h3>
      <HitchinTraitsDump seed={text}></HitchinTraitsDump>
    </div>
  )
}

function HitchinTraitsDump({seed}: {seed: string}) {
  
  return (
    <table>
      <tr></tr>
    </table>
  )
}

function TraitRow({name, stringValue}: {name: string, stringValue: string}) {
  return (
    <tr>
      <td>{name}:</td>
      <td>{stringValue}</td>
    </tr>
  )
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SeedTester></SeedTester>
      </main>
    </div>
  );
}
