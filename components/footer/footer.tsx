/* eslint-disable @next/next/no-img-element */
import LeftArrow from "../svgs/left-arrow";
import MiceSvg from "../svgs/mice-svg";
import FooterPricing from "./footer-pricing";
import useThemeContext from "../heroSection/useThemeContext"; // Import context
import "./footer.scss";

function Footer() {
  const { description } = useThemeContext(); // Get description state

  // Hide Footer when DescriptionDropdown is open
  if (description) return null;

  return (
    <footer
      className="text-[7px] 2xl:text-[12px] uppercase mt-4 lg:mt-auto relative w-full flex gap-8 mb-6 lg:mb-4 2xl:mb-6 3xl:mb-8 px-4 lg:px-12"
    >
      <div className="flex flex-wrap lg:flex-nowrap gap-1 lg:gap-3 items-center">
        <a href="#">real estate</a>
        <LeftArrowWrapper />
        <a href="#">country name</a>
        <LeftArrowWrapper />
        <a href="#">city</a>
        <LeftArrowWrapper />
        <a href="#">address_line_1</a>
        <LeftArrowWrapper />
        <p>#786123456id</p>
      </div>

      {/* mouse animation part */}
      <div className="absolute right-8 2xl:right-12 bottom-4 2xl:bottom-8 hidden lg:flex items-center gap-5 z-[100]">
        <img
          src="/assets/icons/left-arrow.svg"
          className="h-[18px] 2xl:h-[25px] scroll-arrow-left opacity-25 transition-all duration-200 mt-2 2xl:mt-3.5"
          alt=""
        />
        <div className="scroll__animation">
          <div className="mouse">
            <MiceSvg fill="#fff" />
          </div>
        </div>
        <img
          src="/assets/icons/right-arrow.svg"
          className="h-[18px] 2xl:h-[25px] scroll-arrow-right transition-all duration-200 mt-2 2xl:mt-3.5"
          alt=""
        />
      </div>

      <div className="relative hidden lg:block">
        <FooterPricing />
      </div>
    </footer>
  );
}

export default Footer;

const LeftArrowWrapper = () => {
  return <LeftArrow className="h-2 3xl:h-3 stroke-white" />;
};

