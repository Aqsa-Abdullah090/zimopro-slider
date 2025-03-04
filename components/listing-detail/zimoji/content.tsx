/* eslint-disable @next/next/no-img-element */
import { LdpResponce } from "@/lib/types";
import useThemeContext from "../useThemeContext";
import CopyZimoji from "./copy-zimoji";
import DownloadApp from "./download-app";
import Social from "./social";

interface Props {
  data: LdpResponce;
}

function Content({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <div className="3xl:mt-[6%] grid gap-8 lg:gap-0 lg:grid-cols-3 lg:items-center">
      <DownloadApp />
      <div>
        <div className="relative w-[300px] lg:w-[428px] 3xl:w-[600px] mx-auto">
          <img
            // src={
            //   theme === "dark"
            //     ? "/assets/zimoji/ZIMOJI GIF ZP LDP1.gif"
            //     : "/assets/zimoji/ZIMOJI GIF ZP LDP1W.gif"
            // }
            src={data.qr_code_animated}
            className="w-full zimoji-gif"
            alt=""
          />
          <CopyZimoji data={data} />
        </div>
      </div>
      <Social />
    </div>
  );
}
export default Content;
