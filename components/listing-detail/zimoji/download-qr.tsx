/* eslint-disable @next/next/no-img-element */
import { zpBackend } from "@/lib/service";
import clsx from "clsx";
import { useState } from "react";
import { useMutation } from "react-query";
import useThemeContext from "../useThemeContext";

interface Props {
  qr: string;
  animateQr: string;
}

function DownloadQr({ qr, animateQr }: Props) {
  const [downloadHover, setDownloadHov] = useState<boolean>(false);
  const { theme } = useThemeContext();

  const qrQuery = useMutation(async () => {
    const response = await zpBackend.post(
      "/api/download-listing-qrcodes-zip",
      {
        file_urls: [qr, animateQr],
      },
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qr-codes.zip");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  return (
    <button
      onClick={() => qrQuery.mutate()}
      onMouseEnter={() => setDownloadHov(true)}
      onMouseLeave={() => setDownloadHov(false)}
      disabled={qrQuery.isLoading}
      className="disabled:opacity-50"
    >
      <img
        src={`/assets/icons/${
          downloadHover ? "download-golden.svg" : "download.svg"
        }`}
        className={clsx(
          "h-[24px] 3xl:h-[32px]",
          theme === "dark" && !downloadHover && "invert"
        )}
        alt=""
      />
    </button>
  );
}
export default DownloadQr;
