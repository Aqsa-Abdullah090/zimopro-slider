import clsx from "clsx";
import { useRef } from "react";
import ListingPage from "./listing-page";
import useThemeContext from "./useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function Mobile({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(
        "listing__detail__page",
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
      ref={containerRef}
    >
      <main className="h-auto lg:h-dvh hide-scrollbar scrollable-container">
        <ListingPage data={data} />
      </main>
    </div>
  );
}
export default Mobile;
