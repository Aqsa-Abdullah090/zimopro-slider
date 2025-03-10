/* eslint-disable @next/next/no-img-element */

import FooterPricing from "./footer-pricing";


function Footer() {
  return (
    <footer
      className="desc-drop-footer flex flex-col lg:flex-row justify-between lg:items-end lg:absolute mt-8 lg:mt-0 pb-4 lg:pb-0 3xl:bottom-10 3xl:left-10 3xl:right-10 bottom-8 left-8 right-8 gap-4 lg:gap-0"
    >
      <p className="text__12">#786123456</p>

      <div className="lg:ml-auto flex flex-col items-start lg:flex-row gap-4 lg:gap-0">
        <button>
          <img
            src="/"
            className="h-[160px] 3xl:h-[218px] w-auto"
            alt=""
          />
        </button>
        <FooterPricing />
      </div>
    </footer>
  );
}
export default Footer;

