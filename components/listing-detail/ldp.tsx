import Desktop from "./desktop";
import MiniNavProvider from "../navbar/mini-nav-provider";

interface LdpProps {
  data: any; 
}

function Ldp({ data }: LdpProps) {
  return (
    <div className="tracking-[0.8px] lg:tracking-[1.2px] 3xl:tracking-[2px] bg-black text-white">
      <MiniNavProvider />
      <Desktop data={data} />
    </div>
  );
}

export default Ldp;


