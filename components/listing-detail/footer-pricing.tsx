/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import BuyEntryNow from "./buy-entry-now";
import Loaded from "./loaded";
import useThemeContext from "./useThemeContext";
import clsx from "clsx";
import { LdpResponce } from "@/lib/types";
import { getCurrencySymbol } from "@/lib/currencies";

const Countdown = dynamic(() => import("./countdown"), {
  ssr: false,
});

interface Props {
  data: LdpResponce;
}

function FooterPricing({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <div className="flex gap-4 3xl:gap-8 absolute bottom-0 h-[86px] w-max left-[60vw] footer-pricing opacity-0">
      <img
        src={data.agent_logo}
        className={clsx(
          "h-[37px] 3xl:h-[52px] w-auto my-auto max-w-[150px] 3xl:max-w-[200px] object-contain",
          theme === "light" && "invert"
        )}
        alt=""
      />

      <div
        className={clsx(
          "h-full w-[1px] 3xl:w-[2px]",
          theme === "dark" ? "bg-white" : "bg-black"
        )}
      />
      <div className="flex flex-col justify-between w-[230px] 3xl:w-[300px]">
        <div className="text__30 flex justify-between tracking-[3px] 3xl:tracking-[4px] w-full leading-[0.7]">
          <p className="tracking-[5px] 3xl:tracking-[6px]">
            <span dir="ltr">{getCurrencySymbol(data.currency)}</span>
            {data.price}
          </p>{" "}
          <p>{data.currency}</p>
        </div>
        <Countdown expiry={new Date(data.expiry_date)} />
      </div>

      <div className="flex flex-col justify-between">
        <BuyEntryNow data={data} />
        <Loaded number={parseInt(data.completion_percentage)} />
      </div>
    </div>
  );
}
export default FooterPricing;
