/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import BuyEntryNow from "./buy-entry-now";
import Loaded from "./loaded";

const Countdown = dynamic(() => import("./countdown"), {
  ssr: false,
});


function FooterPricing() {
  return (
    <div className="flex gap-4 3xl:gap-8 absolute bottom-0 h-[86px] w-max left-[60vw] footer-pricing opacity-0">
      <img
        src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
        className="h-[37px] 3xl:h-[52px] w-auto my-auto max-w-[150px] 3xl:max-w-[200px] object-contain"
        alt=""
      />

      <div className="h-full w-[1px] 3xl:w-[2px] bg-black" />

      <div className="flex flex-col justify-between w-[230px] 3xl:w-[300px]">
        <div className="text__30 flex justify-between tracking-[3px] 3xl:tracking-[4px] w-full leading-[0.7]">
        <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
        <p>GBP</p>
        </div>
        <Countdown />
      </div>

      <div className="flex flex-col justify-between">
        <BuyEntryNow />
        <Loaded />
      </div>
    </div>
  );
}
export default FooterPricing;

