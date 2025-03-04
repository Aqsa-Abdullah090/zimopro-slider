"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // ✅ Correct import
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Fix for Next.js 13+

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

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{router && <Ldp data={{ images }} />}</>;
}

export default Page;

