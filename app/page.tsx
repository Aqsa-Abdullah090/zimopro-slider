"use client";
import ThemeProvider from "@/components/listing-detail/theme-context";
import { isFixedVisibleReducer } from "@/store/featues/navbar.slice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis"; // ✅ Correct import
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // ✅ Fix for Next.js 13+

const Ldp = dynamic(() => import("@/components/listing-detail/ldp"), {
  ssr: false,
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("hide-scrollbar");
    dispatch(isFixedVisibleReducer(true));

    return () => {
      document.body.classList.remove("hide-scrollbar");
      dispatch(isFixedVisibleReducer(false));
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

  return (
    <ThemeProvider>
      {router && <Ldp />}
    </ThemeProvider>
  );
}

export default Page;

