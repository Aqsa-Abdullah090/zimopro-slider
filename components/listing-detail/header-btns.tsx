/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Heart from "./heart";
import useThemeContext from "./useThemeContext";

function HeaderBtns() {
  const { theme } = useThemeContext();

  return (
    <>
      <Heart />
      <button>
        <img
          src="/assets/icons/share.svg"
          className={clsx(
            "h-[20px] 3xl:h-[30px]",
            theme === "light" && "invert"
          )}
          alt=""
        />
      </button>
      <button>
        <img
          src="/assets/icons/cam.svg"
          className={clsx(
            "h-[20px] 3xl:h-[30px]",
            theme === "light" && "invert"
          )}
          alt=""
        />
      </button>
    </>
  );
}
export default HeaderBtns;
