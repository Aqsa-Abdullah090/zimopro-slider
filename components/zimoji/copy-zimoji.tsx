import Share from "@/components/svgs/share";
import clsx from "clsx";
import { useEffect, useState } from "react";
import useThemeContext from "../heroSection/useThemeContext";
import DownloadQr from "./download-qr";

interface Props {
  data: any;
}

/* eslint-disable @next/next/no-img-element */
function CopyZimoji({ data }: Props) {
  const { theme } = useThemeContext();
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  const handleShareClick = () => {
    navigator.share({
      title: "ZIMO LISTING",
      text: "ZIMO REAL ESTATE LISTING ITEM",
      url: window.location.href,
    });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [copied]);

  return (
    <div className="zimoji-copy lg:absolute ml-[6%] z-[103] flex flex-col gap-4 2xl:gap-6">
      <div className="flex gap-4 2xl:gap-6 items-center">
        <img
          src="/assets/icons/link.svg"
          className={clsx(
            "h-[24px] 2xl:h-[32px]",
            theme === "dark" && "invert"
          )}
          alt=""
        />
        <p className="relative text-[10px] 2xl:text-[14px]">
          <a
            href="#"
            className={clsx(
              "transition-all duration-300",
              !copied ? "opacity-100" : "opacity-0"
            )}
          >
            https://zimo.pro/zp786123456{data.id}/
          </a>
          <span
            className={clsx(
              "absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-300",
              copied ? "opacity-100" : "opacity-0"
            )}
          >
            copied
          </span>
        </p>

        <button
          className={clsx(
            "h-[17px] 2xl:h-[25px]",
            theme === "dark" && "invert"
          )}
          onClick={copyHandler}
        >
          <img
            src="/assets/icons/copy.svg"
            className="h-full opacity-50 hover:opacity-100"
            alt=""
          />
        </button>
      </div>

      <div className="flex gap-6 2xl:gap-8 items-center">
        <DownloadQr qr={data.qr_code} animateQr={data.qr_code_animated} />
        <button onClick={handleShareClick}>
          <Share
            className={clsx(
              "h-[24px] 2xl:h-[32px] hover:fill-golden",
              theme === "dark" ? "fill-white" : "fill-black"
            )}
          />
        </button>
      </div>
    </div>
  );
}
export default CopyZimoji;
