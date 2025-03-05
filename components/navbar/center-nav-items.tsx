import React, { useState } from "react";
import { links } from "./contants";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const CenterNavItems = () => {
  const searchParams = useSearchParams();
 

  return (
    <>
      <ul className="flex lg:space-x-3 xl:space-x-5 3xl:space-x-[48px] 4xl:space-x-[1vw]">
        {links.map((link) => (
          <li
            key={link}
            className={clsx(
              "uppercase text-[9.23px] tracking-[3px] whitespace-nowrap opacity-50",
              searchParams.get("type")?.toString() === link.replaceAll(" ", "-")
                ? "opacity-100 cursor-pointer"
                : "opacity_hover_animation"
            )}
          >
            {link}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CenterNavItems;
