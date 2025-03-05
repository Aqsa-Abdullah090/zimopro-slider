/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import BuyEntryNow from "../button/buy-entry-now";
const Countdown = dynamic(() => import("../listing-detail/countdown"), {
  ssr: false,
});

function FooterPricing() {
  return (
    <div className="flex gap-6 3xl:gap-8 absolute bottom-0 h-[86px] w-max left-[60vw] footer-pricing opacity-0">
      <img
        src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
        className="h-[37px] 3xl:h-[52px] w-auto my-auto max-w-[150px] 3xl:max-w-[200px] object-contain"
        alt=""
      />

      <div className="h-full w-[1px] 3xl:w-[2px] bg-white" />

      <div className="flex flex-col justify-between w-[210px] 3xl:w-[300px]">
        <div className="text-[23px] flex justify-between leading-[0.7] tracking-[3px] 3xl:tracking-[4px]">
          <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
          <p>GBP</p>
        </div>
        <Countdown />
      </div>

      <div className="flex flex-col justify-between">
        <BuyEntryNow />
        {/* Progress Bar */}
        <div className="w-full">
          <div className="h-[2px] bg-white/25">
            <div className="h-full bg-golden" style={{ width: "40%" }}></div>
          </div>
          <p className="text-[10px] pt-[1.5px]">0%</p>
        </div>
      </div>
    </div>
  );
}
export default FooterPricing;
