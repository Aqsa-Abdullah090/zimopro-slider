import clsx from "clsx";
import useThemeContext from "./useThemeContext";

interface Props {
  number: number;
}

function Loaded({ number }: Readonly<Props>) {
  const { theme } = useThemeContext();

  return (
    <div className="w-full flex flex-col gap-1 3xl:gap-2">
      <div
        className={clsx(
          "h-[2px]",
          theme === "dark" ? "bg-white/25" : "bg-black/25"
        )}
      >
        <div className="h-full bg-golden" style={{ width: number + "%" }} />
      </div>
      <p className="text__14">{number}%</p>
    </div>
  );
}
export default Loaded;
