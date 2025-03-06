"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Fix for Next.js 13+
import { ThemeProvider } from "@/context/theme-context"; // Import the ThemeProvider
import "./globals.css";

const Ldp = dynamic(() => import("@/components/listing-detail/ldp"), {
  ssr: false,
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Page() {
  const router = useRouter();

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2Fbackground_carousel%2F2400%2FZP172594.jpg?alt=media&token=0faf3bf5-71c0-4d99-9fd2-7248411ad332",
    "./assets/2.png",
    "./assets/3.png",
    "./assets/4.png",
    "./assets/1.png",
    "./assets/2.png",
    "./assets/3.png",
    "./assets/4.png",
    "./assets/1.png",
    "./assets/2.png",
    "./assets/3.png",
    "./assets/4.png",
  ];

  useEffect(() => {
    document.body.classList.add("hide-scrollbar");

    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  return (
    <ThemeProvider>
      {router && <Ldp data={{ images }} />}
    </ThemeProvider>
  );
}

export default Page;

