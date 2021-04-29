import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br></br>
      <Link href="/numbers">
        <a>Number Generator</a>
      </Link>
      <br></br>
      <Link href="/colors">
        <a>Hexadecimal Colors</a>
      </Link>
      <br></br>
      <Link href="/data">
        <a>World Population</a>
      </Link>
    </div>
  );
}
