import clsx from "clsx";
import useThemeContext from "./useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function Description({ data }: Props) {
  const { theme, setDescription } = useThemeContext();

  return (
    <div className="max-w-[700px] text__15 px-4 lg:pl-12 3xl:pl-16 mt-3 3xl:mt-4 small-description">
      <p className="normal-case">{data.description.slice(0, 600)}...</p>
      <button
        className={clsx(
          "uppercase mt-1 text__15",
          theme === "dark"
            ? "text-white/25 hover:text-white"
            : "text-black/25 hover:text-black"
        )}
        onClick={() => setDescription(true)}
      >
        view full description
      </button>
    </div>
  );
}
export default Description;
