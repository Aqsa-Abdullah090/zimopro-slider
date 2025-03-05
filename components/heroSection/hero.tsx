import PriceCard from "./price-card";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

/* eslint-disable @next/next/no-img-element */
function Hero({ data }: Props) {
  return (
    <section className="lg:grid grid-cols-[1fr_1.5fr] lg:h-[160px] 3xl:h-[218px] mt-4 lg:mt-0">
      {/* 1st col */}
      <div className="border-r-2 flex flex-col justify-center items-center relative lg:px-12 3xl:px-16 mb-8 lg:mb-0">
        <div className="flex-grow flex items-center justify-center">
          <img
            src="https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg"
            className="h-[50px] 3xl:h-[75px] max-w-[200px] object-contain"
            alt="Agent Logo"
          />
        </div>
        <p className="text-[9px] 3xl:text-[12px] tracking-[1px]">
          #78612345617
        </p>
      </div>
      {/* 2nd col */}
      <PriceCard data={data} />
    </section>
  );
}

export default Hero;
