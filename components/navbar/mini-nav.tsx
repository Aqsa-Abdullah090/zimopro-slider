/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useEffect, useState } from "react";
import CenterNavItems from "./center-nav-items";
import LeftNavItems from "./left-nav-items";
import RightNavItems from "./right-nav-items";
import { NAV_BEHEIVIOURS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

const MiniNav = ({ page }: { page: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preventClose, setPreventClose] = useState(false);
  const [isCenterOut, setIsCenterOut] = useState(true);

  useEffect(() => {
    if (!isHovered) {
      const collapseTimeout = setTimeout(() => {
        setExpanded(false);
      }, 500);

      return () => clearTimeout(collapseTimeout);
    }
  }, [isHovered]);

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleExpandedNavbar = () => {
    if (isHovered && !expanded) {
      setExpanded(true);
    }
  };

  const reelsPage = page === "reels";

  const handleCenterTransitionEnd = () => {
    if (!expanded) {
      setTimeout(() => {
        setIsCenterOut(true);
      }, 500);
    } else {
      setIsCenterOut(false);
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      if (isHovered) {
        setPreventClose(true);
      } else {
        setPreventClose(false);
      }
    };

    const handleScroll = () => {
      if (preventClose) {
        setPreventClose(false);
      }
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);

    return () => {
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleScroll);
    };
  }, [isHovered, preventClose]);

  return (
    <div className="h-20 3xl:h-28 fixed top-0 left-0 w-full z-10 flex justify-center items-start group">
      <header
        className={clsx(
          "transition-all ease-in-out w-[161px] lg:w-[267px] 3xl:w-[361px] hover:w-full overflow-hidden hover:-ml-[1px] group-hover:opacity-100 ",
          expanded ? "duration-[0.7s] delay-[2000ms]" : "duration-[0.4s]",
          isCenterOut ? "opacity-0" : "opacity-100",
          NAV_BEHEIVIOURS.transparentBg && !reelsPage ? "bg-transparent fill-white text-white" : "",
          NAV_BEHEIVIOURS.solidBg && !reelsPage ? "bg-black text-white fill-white" : "",
          reelsPage && "bg-black text-white fill-white",
          NAV_BEHEIVIOURS.solidwhiteBg && "bg-white fill-black text-black"
        )}
        onTransitionEnd={handleExpandedNavbar}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleHoverEnd}
      >
        <nav className="lg:h-[10vh] 3xl:h-[100px] flex items-center justify-between px-[30px]">
          <div className="flex items-center">
            <LeftNavItems />
            <AnimatePresence>
              {reelsPage && expanded && (
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.5, delay: isHovered ? 0.7 : 1, ease: "linear" }}
                    className="pl-[5px] lg:pl-[40px] 2xl:pl-[75px] 3xl:pl-[70px] "
                  >
                    <img src="/assets/forward_arrow.svg" className="w-[27.52px] h-[20px] rotate-180 cursor-pointer z-[2]" />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 left-1/2 flex items-center justify-center -translate-x-1/2 overflow-hidden w-[85vw] 4xl:w-[88vw]">
            <div className={clsx("duration-700", expanded ? "translate-x-0 delay-0" : "-translate-x-[80vw] delay-[1200ms]")} onTransitionEnd={handleCenterTransitionEnd}>
              <CenterNavItems />
            </div>
          </div>
          <div className="flex items-center space-x-5 lg:space-x-8 3xl:space-x-14">
            <RightNavItems variant={"fixed"} expanded={expanded} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MiniNav;

