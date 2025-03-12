/* eslint-disable @next/next/no-img-element */
import BuyEntryNow from "../button/buy-entry-now";
import Countdown from "../listing-detail/countdown";
import useThemeContext from "../heroSection/useThemeContext";
import clsx from "clsx";

function FooterPricing() {
  const { theme } = useThemeContext();
  return (
    <section className="flex items-start lg:items-stretch flex-col lg:flex-row h-[160px] 3xl:h-[218px]">
      {/* 1st col */}
      <div className="lg:border-r-2 flex flex-col justify-center items-center relative lg:px-12 3xl:px-16 mb-8 lg:mb-0">
          <img
                src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
                className={clsx(
                  "h-[50px] 3xl:h-[75px] max-w-[150px] 2xl:max-w-[200px] object-contain",
                  { "invert": theme === "light" } // Apply invert filter in dark mode
                )} 
                alt="Agent Logo"
              />
      </div>
      {/* 2nd col */}
      <div className="lg:pl-12 3xl:pl-16 price-card">
        <div className="mx-auto lg:mx-[unset] w-[230px] 3xl:w-[300px] flex gap-3 lg:gap-[unset] flex-col items-center lg:justify-between h-full">
          <div className="text__30 flex justify-between w-full leading-[0.7] tracking-[3px] 3xl:tracking-[4px]">
            <p className="tracking-[5px] 3xl:tracking-[6px]">
              <span dir="ltr">453785</span>
              395389
            </p>
            <p>24927582</p>
          </div>
          <BuyEntryNow />
          <Countdown />
        </div>
      </div>
    </section>
  );
}
export default FooterPricing;

