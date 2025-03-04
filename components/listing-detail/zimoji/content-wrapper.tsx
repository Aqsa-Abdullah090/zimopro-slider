/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef } from "react";
import useThemeContext from "../useThemeContext";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LdpResponce } from "@/lib/types";

gsap.registerPlugin(useGSAP);

interface Props {
  data: LdpResponce;
}

function ContentWrapper({ data }: Props) {
  const { theme, setZimoji } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ".zimoji-drop-header",
          {
            opacity: 0,
            y: -100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8,
          }
        )
        .fromTo(
          ".zimoji-drop-back",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        )
        .fromTo(
          ".download-app",
          {
            opacity: 0,
            x: -200,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          }
        )
        .fromTo(
          ".social-share",
          {
            opacity: 0,
            x: 200,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".zimoji-gif",
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
          }
        )
        .fromTo(
          ".zimoji-copy",
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        )
        .fromTo(
          ".zimoji-drop-footer",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.5,
          }
        );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={clsx(
        "fixed inset-0 z-[102] listing__detail__page overflow-hidden",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <div className="p-4 lg:p-8 3xl:p-10 uppercase flex flex-col h-full overflow-auto lg:overflow-hidden">
        <Header data={data} />
        <button
          onClick={() => setZimoji(false)}
          className="zimoji-drop-back flex items-center justify-between gap-2 lg:gap-4 group w-max mt-20 lg:mt-6 3xl:mt-8 mb-4"
        >
          <img
            src="/assets/icons/up-arrow.svg"
            className={clsx(
              "h-[9px] 3xl:h-[11px]",
              theme === "light" && "invert"
            )}
            alt=""
          />
          <p className="uppercase text__12 opacity-25 group-hover:opacity-100">
            back
          </p>
        </button>

        <Content data={data} />

        <Footer data={data} />
      </div>
    </motion.div>
  );
}
export default ContentWrapper;
