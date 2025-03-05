import clsx from "clsx";
import BuyEntryNow from "./button/buy-entry-now";
import dynamic from "next/dynamic";
import { LdpResponce } from "@/lib/types";
import Loaded from "./loaded";

const Countdown = dynamic(() => import("./countdown"), {
  ssr: false,
});

interface Props {
  data: LdpResponce;
}

function PriceCard({ data }: Props) {
  return (
    <div className="lg:px-12 3xl:px-16 price-card">
      <div className="mx-auto lg:mx-[unset] w-[230px] 3xl:w-[300px] flex gap-3 lg:gap-[unset] flex-col items-center lg:justify-between h-full">
        <div
          className={clsx(
            "text-[23px] flex justify-between w-full leading-[0.7]",
            "tracking-[3px] 3xl:tracking-[4px]"
          )}
        >
          <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
          <p>GBP</p>
        </div>
        <BuyEntryNow />
        <Countdown />
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
export default PriceCard;
