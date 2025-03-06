import clsx from "clsx";
import BuyEntryNow from "../button/buy-entry-now";
import dynamic from "next/dynamic";
import { LdpResponce } from "@/lib/types";
import { useTheme } from "@/context/theme-context"; // Import theme context

const Countdown = dynamic(() => import("../listing-detail/countdown"), {
  ssr: false,
});

interface Props {
  data: LdpResponce;
}

function PriceCard({ data }: Props) {
  const { theme } = useTheme(); // Get theme from context

  return (
    <div className="lg:px-12 3xl:px-16 price-card">
      <div className="mx-auto lg:mx-[unset] w-[230px] 3xl:w-[300px] flex gap-3 lg:gap-[unset] flex-col items-center lg:justify-between h-full">
        <div
          className={clsx(
            "text-[23px] 3xl:text-[30px] flex justify-between w-full leading-[0.7]",
            "tracking-[3px] 3xl:tracking-[4px]"
          )}
        >
          <p className="tracking-[5px] 3xl:tracking-[6px]">£355,767</p>
          <p>GBP</p>
        </div>
        <BuyEntryNow />
        <Countdown />
        {/* Progress Bar with theme support */}
        <div className="w-full">
          <div
            className={clsx(
              "h-[2px]",
              theme === "light" ? "bg-gray-600/50" : "bg-white/25"
            )}
          >
            <div className="h-full bg-golden" style={{ width: "40%" }}></div>
          </div>
          <p className="text-[10px] pt-[1.5px]">0%</p>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;

