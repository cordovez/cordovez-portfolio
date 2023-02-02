import { useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Hero } from "@/Components/Hero/Hero";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  // useSelectedLayoutSegment();

  const [night, setNight] = useState(true);

  return (
    <>
      <Hero night={night} setNight={setNight} />
      <main className={night ? "dark" : ""}>{children}</main>
      <Footer />
    </>
  );
}
