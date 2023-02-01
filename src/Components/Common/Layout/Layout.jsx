import { useState } from "react";

import { Hero } from "@/Components/Hero/Hero";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  const [night, setNight] = useState(true);

  return (
    <>
      <Hero night={night} setNight={setNight} />
      <main className={night ? "dark" : ""}>{children}</main>
      <Footer />
    </>
  );
}
