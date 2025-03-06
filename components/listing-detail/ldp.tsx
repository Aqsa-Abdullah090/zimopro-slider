import { useTheme } from "@/context/theme-context";
import Desktop from "./desktop";
import MiniNavProvider from "../navbar/mini-nav-provider";

interface LdpProps {
  data: any;
}

function Ldp({ data }: LdpProps) {
  const { theme } = useTheme(); // Get the theme from context

  return (
    <div className={`tracking-[0.8px] lg:tracking-[1.2px] 3xl:tracking-[2px] hide-scrollbar
      ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <MiniNavProvider />
      <Desktop data={data} />
    </div>
  );
}

export default Ldp;




