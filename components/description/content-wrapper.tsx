import { useEffect, useRef } from "react";
import ForwardArrowSvg from "@/components/svgs/forward_arrow_svg";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import gsap from "gsap";
import useThemeContext from "../heroSection/useThemeContext";
import BgImage from "./bg-image";
import Footer from "./footer";
import FullFeatures from "./full-features";
import Header from "./header";

gsap.registerPlugin(useGSAP);

interface Props {
  data: any;
}

function ContentWrapper({ data }: Props) {
  const { theme, setDescription } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);

  // Disable scrolling when component mounts, enable when it unmounts
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.documentElement.style.overflow = "hidden"; // Also disable scrolling for <html>

    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling on unmount
      document.documentElement.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ".desc-drop-header",
          { opacity: 0, y: -100 },
          { opacity: 1, y: 0, duration: 1, delay: 0.8 }
        )
        .fromTo(
          ".desc-drop-back",
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
        .fromTo(
          ".description-full",
          { opacity: 0, x: -200 },
          { opacity: 1, x: 0, duration: 1 }
        )
        .fromTo(
          ".features-full",
          { opacity: 0, y: 200 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".desc-drop-footer",
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );
    },
    { scope: containerRef }
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={clsx(
        "fixed inset-0 top-[-5.7rem] z-[100] listing__detail__page overflow-hidden",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <BgImage />
      <div className="relative z-[101] p-4 lg:p-8 3xl:p-10 uppercase flex flex-col max-w-screen h-full overflow-hidden">
        <Header data={data} />
        <button
          onClick={() => setDescription(false)}
          className="desc-drop-back flex items-center justify-between gap-2 lg:gap-4 group w-max mt-6 3xl:mt-8"
        >
          <ForwardArrowSvg
            className={clsx(
              "h-[9px] 3xl:h-[11px] -scale-x-[1]",
              theme === "dark" ? "fill-white" : "fill-black"
            )}
          />
          <p className="uppercase text-[9px] 2xl:text-[12px] opacity-25 group-hover:opacity-100">
            back
          </p>
        </button>

        <FullFeatures />
        <Footer />
      </div>
    </motion.div>
  );
}
export default ContentWrapper;


