import { useTheme } from "../../context/theme-context"; // Ensure the correct import path
import clsx from "clsx";

function ScrollProgress() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "w-[600px] ml-auto h-[2px] fixed bottom-36 right-10 2xl:right-50 hidden lg:block z-0",
        theme === "light" ? "bg-gray-600/50" : "bg-white/25"
      )}
    >
      <div
        className={clsx(
          "w-0 scroll-progressbar h-full",
          theme === "light" ? "bg-gray-600/50" : "bg-white"
        )}
      />
    </div>
  );
}

export default ScrollProgress;
