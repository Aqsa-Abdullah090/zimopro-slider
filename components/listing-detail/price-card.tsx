import clsx from "clsx";
import BuyEntryNow from "./buy-entry-now";
import Loaded from "./loaded";
import dynamic from "next/dynamic";
import { LdpResponce } from "@/lib/types";
import { getCurrencySymbol } from "@/lib/currencies";

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
            "text__30 flex justify-between w-full leading-[0.7]",
            "tracking-[3px] 3xl:tracking-[4px]"
          )}
        >
          <p className="tracking-[5px] 3xl:tracking-[6px]">
            <span dir="ltr">{getCurrencySymbol(data.currency)}</span>
            {data.price}
          </p>{" "}
          <p>{data.currency}</p>
        </div>
        <BuyEntryNow data={data} />
        <Countdown expiry={new Date(data.expiry_date)} />
        <Loaded number={parseInt(data.completion_percentage)} />
      </div>
    </div>
  );
}
export default PriceCard;
