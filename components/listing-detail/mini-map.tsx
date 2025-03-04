/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import dynamic from "next/dynamic";
import useThemeContext from "./useThemeContext";
import { LdpResponce } from "@/lib/types";
const GMap = dynamic(() => import("../common/gmap"), {
  ssr: false,
});

interface Props {
  black: boolean;
  data: LdpResponce;
}

function MiniMap({ black, data }: Props) {
  const { theme } = useThemeContext();

  return (
    <div className="gmap-wrapper scroll-media-wrapper flex-shrink-0 relative mx-auto lg:mx-[unset]">
      <div className="z-50 absolute inset-0" />
      <GMap black={theme === "dark"}>
        <div className="wrapper">
          <div className="cube">
            <div
              className="side s-1"
              style={{
                backgroundImage: "url('/assets/map/ZIMO-Map-BW.png')",
              }}
            />
            <div
              className="side s-2"
              style={{
                backgroundImage: data.image[0],
              }}
            />
            <div
              className="side s-3"
              style={{
                backgroundImage: "url('/assets/map/PRO-Map-WB.png')",
              }}
            />
            <div
              className="side s-4"
              style={{
                backgroundImage: data.image[1],
              }}
            />
            <div
              className="side s-5"
              style={{
                backgroundImage: "url('/assets/map/ZPRO-Map-WB.png')",
              }}
            />
            <div
              className="side s-6"
              style={{
                backgroundImage: data.image[2],
              }}
            />
          </div>
          <div className="shadow" />
        </div>
      </GMap>
      <img
        src="/assets/ZigPro.svg"
        alt=""
        className={clsx(
          "absolute top-2 left-2 3xl:top-8 3xl:left-8 h-4 3xl:h-6 opacity-25",
          theme === "dark" && "invert"
        )}
      />
      <div
        className={clsx(
          `absolute bottom-0 left-0 w-full h-6 lg:h-10 3xl:h-12 z-50 uppercase tracking-[0.8px] lg:tracking-widest text__11 px-2 lg:px-4 3xl:px-8`,
          theme === "dark" ? "bg-white text-black" : "bg-black text-white",
          "flex justify-between items-center"
        )}
      >
        <p>&copy; {new Date().getFullYear()} zimopro. all rights reserved</p>

        <div className="hidden lg:flex flex-col lg:flex-row gap-1 lg:gap-2.5 3xl:gap-4 lg:items-center">
          <p>#zm78616778512</p>
          <p>{data.address_line_1}</p>
          <p>{data.address_line_2}</p>
          <p>{data.city}</p>
          <p>{data.postal_code}</p>
          <p>{data.country_name}</p>
          <img src={data.flag_url} alt="" className="h-6 hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
export default MiniMap;
