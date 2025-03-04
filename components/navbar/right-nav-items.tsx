/* eslint-disable @next/next/no-img-element */
import UserSvg from "@/components/svgs/user-svg";
import ZigProSell from "@/components/svgs/zig-pro-sell-svg";
import clsx from "clsx";
import React from "react";

const RightNavItems = ({
  variant,
  expanded = false,
}: {
  variant: string;
  expanded?: boolean;
}) => {
  return (
    <>
      <div
        className={clsx(
          variant === "fixed" && "duration-300 ease-linear",
          variant === "fixed" && !expanded // on fixed navbar non-expanded
            ? "absolute z-0 translate-x-[150px]"
            : expanded // when expands
            ? "translate-x-0"
            : "" // empty so that nothing is applied on absolute variant
        )}
      >
        <ZigProSell className="fill-inherit" />
      </div>
      <UserSvg className="w-auto h-[16.67px] lg:h-[23.08px] 3xl:h-[30px] flex-shrink-0 z-10 fill-inherit" />
      <div className="z-10">
        <img
          src="/assets/temp/uk-flag.png"
          alt="uk flag"
          className="w-[22.22px] lg:w-[30.77px] 3xl:w-[40px] h-auto flex-shrink-0"
        />
      </div>
    </>
  );
};

export default RightNavItems;
