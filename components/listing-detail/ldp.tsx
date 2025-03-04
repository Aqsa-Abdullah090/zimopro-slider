import Desktop from "./desktop";
import MiniNavProvider from "./mini-nav-provider";

interface LdpProps {
  data: any; 
}

function Ldp({ data }: LdpProps) {
  return (
    <div className="tracking-[0.8px] lg:tracking-[1.2px] 3xl:tracking-[2px]">
      <MiniNavProvider />
      <Desktop data={data} />
    </div>
  );
}

export default Ldp;


