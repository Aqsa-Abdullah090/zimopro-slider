/* eslint-disable @next/next/no-img-element */
import { getCurrencySymbol } from "@/lib/currencies";
import { LdpResponce } from "@/lib/types";
import clsx from "clsx";
import BuyEntryNow from "../buy-entry-now";
import Countdown from "../countdown";
import Loaded from "../loaded";
import useThemeContext from "../useThemeContext";

interface Props {
  data: LdpResponce;
}

function Footer({ data }: Props) {
  const { theme } = useThemeContext();
  return (
    <footer className="zimoji-drop-footer lg:absolute 3xl:bottom-10 3xl:left-10 3xl:right-10 bottom-8 left-8 right-8 mt-12 lg:mt-0">
      <section className="flex items-start lg:items-stretch flex-col lg:flex-row h-[160px] 3xl:h-[218px] lg:ml-auto lg:w-max">
        {/* 1st col */}
        <div
          className={clsx(
            "lg:border-r-2 flex flex-col justify-center items-center relative lg:px-12 3xl:px-16 mb-8 lg:mb-0",
            theme === "dark" ? "lg:border-white" : "lg:border-black"
          )}
        >
          <img
            src={data.agent_logo}
            className={clsx(
              "h-[50px] 3xl:h-[75px] max-w-[150px] 3xl:max-w-[200px] object-contain",
              theme === "light" && "invert"
            )}
            alt=""
          />
        </div>
        {/* 2nd col */}
        <div className="lg:pl-12 3xl:pl-16 price-card">
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
      </section>
    </footer>
  );
}
export default Footer;
