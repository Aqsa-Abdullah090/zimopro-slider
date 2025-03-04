/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import LeftArrow from "../svgs/left-arrow";
import MiceSvg from "../svgs/mice-svg";
import FooterPricing from "./footer-pricing";
import useThemeContext from "./useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function Footer({ data }: Props) {
  const { theme } = useThemeContext();
  return (
    <footer
      className={clsx(
        "text-[7px] 3xl:text-[12px] uppercase mt-4 lg:mt-auto relative w-full flex gap-8",
        "mb-6 lg:mb-4 2xl:mb-6 3xl:mb-8 px-4 lg:px-12"
      )}
    >
      <div className="flex flex-wrap lg:flex-nowrap gap-1 lg:gap-3 items-center">
        <a href="#">real estate</a>
        <LeftArrowWrapper />
        <a href="#">{data.country_name}</a>

        {data.region_state && (
          <>
            <LeftArrowWrapper /> <a href="#">{data.region_state}</a>
          </>
        )}
        <LeftArrowWrapper />
        <a href="#">{data.city}</a>
        <LeftArrowWrapper />
        <a href="#">{data.address_line_1}</a>
        <LeftArrowWrapper />
        <p>#786123456{data.id}</p>
      </div>

      {/* mouse animation part */}
      <div
        className={clsx(
          "absolute right-8 3xl:right-12 bottom-4 3xl:bottom-8 hidden lg:flex items-center gap-5 z-[100]",
          theme === "light" && "invert"
        )}
      >
        <img
          src="/assets/icons/left-arrow.svg"
          className="h-[18px] 3xl:h-[25px] scroll-arrow-left opacity-25 transition-all duration-200 mt-2 3xl:mt-3.5"
          alt=""
        />
        <div className="scroll__animation">
          <div className="mouse">
            <MiceSvg fill="#fff" />
          </div>
        </div>
        <img
          src="/assets/icons/right-arrow.svg"
          className="h-[18px] 3xl:h-[25px] scroll-arrow-right transition-all duration-200 mt-2 3xl:mt-3.5"
          alt=""
        />
      </div>

      <div className="relative hidden lg:block">
        <FooterPricing data={data} />
      </div>

      {/* black element */}
      {/* <div className="bg-black absolute right-0 bottom-0 w-[200px] z-[99] h-28" /> */}
    </footer>
  );
}
export default Footer;

const LeftArrowWrapper = () => {
  const { theme } = useThemeContext();

  return (
    <LeftArrow
      className={clsx(
        "h-2 3xl:h-3 stroke-white",
        theme === "light" && "invert"
      )}
    />
  );
};
