/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import BuyEntryNow from "../button/buy-entry-now";
import Countdown from "../listing-detail/countdown";
import useThemeContext from "../heroSection/useThemeContext";

function Footer() {
  const { theme } = useThemeContext();
  return (
    <footer className="zimoji-drop-footer lg:absolute 2xl:bottom-10 2xl:left-290 bottom-4 left-204 mt-12 lg:mt-0">
      <section className="flex items-start lg:items-stretch flex-col lg:flex-row h-[160px] 2xl:h-[218px] lg:ml-auto lg:w-max">
        {/* 1st col */}
        <div
          className={clsx(
            "lg:border-r-2 flex flex-col justify-center items-center relative lg:px-12 2xl:px-16 mb-8 lg:mb-0",
            theme === "dark" ? "lg:border-white" : "lg:border-black"
          )}
        >
          <img
            src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
            className={clsx(
              "h-[50px] 2xl:h-[75px] max-w-[150px] 2xl:max-w-[200px] object-contain",
              { invert: theme === "light" } // Apply invert filter in dark mode
            )}
            alt="Agent Logo"
          />
        </div>
        {/* 2nd col */}
        <div className="lg:pl-12 2xl:pl-16 price-card">
          <div className="mx-auto lg:mx-[unset] w-[230px] 2xl:w-[300px] flex lg:gap-[-8px] flex-col items-center lg:justify-between h-full">
            <div className="w-[100%] text-[23px] flex justify-between leading-[0.7] tracking-[3px] 2xl:tracking-[4px] 2xl:text-[42px]">
              <p className="tracking-[5px] 2xl:tracking-[6px]">£355,767</p>
              <p>GBP</p>
            </div>
            <BuyEntryNow />
            <Countdown />
            {/* Progress Bar with theme support */}
            <div className="w-full">
              <div
                className={clsx(
                  "h-[2px]",
                  theme === "light" ? "bg-gray-600/50" : "bg-white/25"
                )}
              >
                <div
                  className="h-full bg-golden"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <p className="text-[10px] pt-[1.5px]">0%</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
