import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div class="header">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/numbers">
        <a>Number Generator</a>
      </Link>
      <Link href="/colors">
        <a>Hexadecimal Colors</a>
      </Link>
      <Link href="/data">
        <a>World Population</a>
      </Link>
    </div>
  );
}
