import { useEffect, useState } from "react";

import Head from "next/head";
import { Hero } from "../Components/Hero/Hero";

import Portfolio from "./portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => setDarkMode(true), []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cordovez-Mantilla</title>
        <meta name="description" content="development portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portfolio />
    </div>
  );
}
