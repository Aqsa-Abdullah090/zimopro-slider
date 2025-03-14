/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useState } from "react";
import useThemeContext from "../heroSection/useThemeContext";

interface Props {
  qr: string;
  animateQr: string;
}

function DownloadQr({ qr, animateQr }: Props) {
  const [downloadHover, setDownloadHov] = useState<boolean>(false);
  const { theme } = useThemeContext();



  return (
    <button
      onMouseEnter={() => setDownloadHov(true)}
      onMouseLeave={() => setDownloadHov(false)}
      className="disabled:opacity-50"
    >
      <img
        src={`/assets/icons/${
          downloadHover ? "download-golden.svg" : "download.svg"
        }`}
        className={clsx(
          "h-[24px] 2xl:h-[32px]",
          theme === "dark" && !downloadHover && "invert"
        )}
        alt=""
      />
    </button>
  );
}
export default DownloadQr;
