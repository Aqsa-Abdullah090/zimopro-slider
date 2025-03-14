import clsx from "clsx";
import useThemeContext from "../heroSection/useThemeContext";
import CamSvg from "@/components/svgs/cam";

/* eslint-disable @next/next/no-img-element */
function DownloadApp() {
  const { theme } = useThemeContext();

  return (
    <div className="download-app flex flex-col gap-4 2xl:gap-6 w-[237px] 2xl:w-[323px] mx-auto">
      <img
        src="/assets/text/download-scanner.svg"
        className={clsx("w-full", theme === "dark" && "invert")}
        alt=""
      />
      <div className="flex justify-between items-center h-[85px] 2xl:h-[119px]">
        <div className="flex flex-col h-full justify-between w-[114px] 2xl:w-[160px]">
          <img
            src={`/assets/buttons/${
              theme === "dark" ? "google-play.png" : "google-play-b.png"
            }`}
            className="w-full"
            alt=""
          />
          <img
            src={`/assets/buttons/${
              theme === "dark" ? "apple-store.png" : "apple-store-b.png"
            }`}
            className="w-full"
            alt=""
          />
        </div>

        <a href="https://zimoji.org" target="_blank" className="h-full">
          <CamSvg
            className={clsx(
              "h-full hover:fill-golden",
              theme === "dark" ? "fill-white" : "fill-black"
            )}
          />
        </a>
      </div>
    </div>
  );
}
export default DownloadApp;
