/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import HeaderBtns from "../header-btns";
import useThemeContext from "../useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function Header({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <header className="zimoji-drop-header grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center">
      <div>
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx("h-8 3xl:h-10", theme === "dark" && "invert")}
        />
      </div>

      <div className="hidden lg:flex text__14 justify-center items-center gap-3">
        <img src={data.flag_url} className="h-3 lg:h-6" alt="" />
        <p>{data.address_line_1}</p>
        <p>{data.address_line_2}</p>
        <p>{data.city}</p>
        <p>{data.postal_code}</p>
        <p>{data.country_name}</p>
      </div>

      <div className="flex justify-end">
        <div className="relative w-max">
          <img
            src="/assets/zimoji.svg"
            className={clsx("h-8 3xl:h-10", theme === "light" && "invert")}
            alt=""
          />
          <div className="absolute flex flex-col items-start gap-4 pt-4">
            <img
              src="/assets/icons/listing-zimoji-code.svg"
              className={clsx(
                "w-[128px] 3xl:w-[160px]",
                theme === "light" && "invert"
              )}
              alt=""
            />
            <p className="text-[13px] 3xl:text-[15px] tracking-[3px] 3xl:tracking-[4px] leading-[0.7]">
              #786123456{data.id}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
