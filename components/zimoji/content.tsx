/* eslint-disable @next/next/no-img-element */
import useThemeContext from "../heroSection/useThemeContext";
import CopyZimoji from "./copy-zimoji";
import DownloadApp from "./download-app";
import Social from "./social";

interface Props {
  data: any;
}

function Content({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <div className="2xl:mt-[6%] grid gap-8 lg:gap-0 lg:grid-cols-3 lg:items-center">
      <DownloadApp />
      <div>
        <div className="relative w-[300px] lg:w-[428px] 2xl:w-[600px] mx-auto">
          <img
            src={
              theme === "dark"
                ? "/assets/zimoji/ZIMOJI GIF ZP LDP1.gif"
                : "/assets/zimoji/ZIMOJI GIF ZP LDP1W.gif"
            }
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
