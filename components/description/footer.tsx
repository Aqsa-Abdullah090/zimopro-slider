/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import FooterPricing from "./footer-pricing";
import ZimojiDropdown from "../zimoji/dropdown";

function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer
      className="desc-drop-footer flex flex-col lg:flex-row justify-between lg:items-end lg:absolute mt-8 lg:mt-0 pb-4 lg:pb-0 2xl:bottom-10 2xl:left-10 2xl:right-20 bottom-8 left-8 right-8 gap-4 lg:gap-0"
    >
      <p className="text-[11px] 2xl:text-[15px]">#786123456</p>

      <div className="lg:ml-auto flex flex-col items-start lg:flex-row gap-4 lg:gap-0">
        {/* Click Image to Toggle Dropdown */}
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/zimopro%2Fqr-codes%2FZIMOJI%20ZIMOPRO%201%20Gold.svg?alt=media&token=6a752ed5-af26-43f3-bd01-f894380480e8"
            className="h-[160px] 2xl:h-[218px] w-auto"
            alt=""
          />
        </button>

        <FooterPricing />
      </div>

      {/* Show Dropdown when isDropdownOpen is true */}
      {isDropdownOpen && <ZimojiDropdown data={{}} />}
    </footer>
  );
}

export default Footer;

