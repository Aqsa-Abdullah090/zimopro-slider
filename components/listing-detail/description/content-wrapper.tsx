import ForwardArrowSvg from "@/components/svgs/forward_arrow_svg";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";
import useThemeContext from "../useThemeContext";
import BgImage from "./bg-image";
import Footer from "./footer";
import FullFeatures from "./full-features";
import Header from "./header";
import { LdpResponce } from "@/lib/types";

gsap.registerPlugin(useGSAP);

interface Props {
  data: LdpResponce;
}

function ContentWrapper({ data }: Props) {
  const { theme, setDescription } = useThemeContext();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          ".desc-drop-header",
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
          ".desc-drop-back",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        )
        .fromTo(
          ".description-full",
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
          ".features-full",
          {
            opacity: 0,
            y: 200,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
        )
        .fromTo(
          ".desc-drop-footer",
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
        "fixed inset-0 z-[100] listing__detail__page overflow-hidden",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
    >
      <BgImage images={data.images} />
      <div className="relative z-[101] p-4 lg:p-8 3xl:p-10 uppercase flex flex-col h-full overflow-y-auto lg:overflow-y-hidden">
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
          <p className="uppercase text__12 opacity-25 group-hover:opacity-100">
            back
          </p>
        </button>

        <FullFeatures data={data} />
        <Footer data={data} />
      </div>
    </motion.div>
  );
}
export default ContentWrapper;
