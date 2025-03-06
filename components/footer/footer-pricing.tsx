/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import BuyEntryNow from "../button/buy-entry-now";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context"; // Import theme context

const Countdown = dynamic(() => import("../listing-detail/countdown"), {
  ssr: false,
});

function FooterPricing() {
  const { theme } = useTheme(); // Get theme from context

  return (
    <div className="flex gap-6 3xl:gap-8 absolute bottom-0 h-[86px] w-max left-[60vw] footer-pricing opacity-0">
      <img
        src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
        className={clsx(
          "h-[50px] 3xl:h-[75px] max-w-[200px] object-contain",
          { "invert": theme === "light" } // Apply invert filter in dark mode
        )}
        alt="Agent Logo"
      />

      {/* The divider with theme-based color */}
      <div
        className={clsx(
          "h-full w-[1px] 2xl:w-[2px]",
          theme === "light" ? "bg-gray-400" : "bg-white"
        )}
      />

      <div className="flex flex-col justify-between w-[210px] 2xl:w-[300px]">
        <div className="text-[23px] flex justify-between leading-[0.7] tracking-[3px] 2xl:tracking-[4px]">
          <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
          <p>GBP</p>
        </div>
        <Countdown />
      </div>

      <div className="flex flex-col justify-between">
        <BuyEntryNow />
        {/* Progress Bar with theme support */}
        <div className="w-full">
          <div
            className={clsx(
              "h-[2px]",
              theme === "light" ? "bg-gray-600/50" : "bg-white/25"
            )}
          >
            <div className="h-full bg-golden" style={{ width: "40%" }}></div>
          </div>
          <p className="text-[10px] pt-[1.5px]">0%</p>
        </div>
      </div>
    </div>
  );
}

export default FooterPricing;


