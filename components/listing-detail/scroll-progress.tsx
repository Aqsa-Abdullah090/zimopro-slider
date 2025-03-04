import clsx from "clsx";
import useThemeContext from "./useThemeContext";

function ScrollProgress() {
  const { theme } = useThemeContext();

  return (
    <div
      className={clsx(
        "w-[600px] ml-auto h-[2px] absolute bottom-40 right-14 hidden lg:block",
        theme === "dark" ? "bg-white/25" : "bg-black/25"
      )}
    >
      <div
        className={clsx(
          "w-0 scroll-progressbar h-full",
          theme === "dark" ? "bg-white" : "bg-black"
        )}
      />
    </div>
  );
}
export default ScrollProgress;
