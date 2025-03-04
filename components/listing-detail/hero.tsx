import clsx from "clsx";
import PriceCard from "./price-card";
import useThemeContext from "./useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

/* eslint-disable @next/next/no-img-element */
function Hero({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <section className="lg:grid grid-cols-[1fr_1.5fr] lg:h-[160px] 3xl:h-[218px] mt-4 lg:mt-0">
      {/* 1st col */}
      <div
        className={clsx(
          "border-r-2 flex flex-col justify-center items-center relative lg:px-12 3xl:px-16 mb-8 lg:mb-0",
          theme === "dark" ? "lg:border-white" : "lg:border-black"
        )}
      >
        <img
          src={data.agent_logo}
          className={clsx(
            "h-[50px] 3xl:h-[75px] max-w-[200px] object-contain",
            theme === "light" && "invert"
          )}
          alt=""
        />
        <p className="text__12 mt-4 lg:mt-[unset] lg:absolute -bottom-1">
          #786123456{data.id}
        </p>
      </div>
      {/* 2nd col */}
      <PriceCard data={data} />
    </section>
  );
}
export default Hero;
