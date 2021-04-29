import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div class="index">
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

export default Home;
