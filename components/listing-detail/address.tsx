import { LdpResponce } from "@/lib/types";
import clsx from "clsx";

interface Props {
  data: LdpResponce;
}

/* eslint-disable @next/next/no-img-element */
function Address({ data }: Props) {
  return (
    <div
      className={clsx(
        "address flex items-center text-[8px] 3xl:text-[14px] w-max ml-auto mr-auto lg:mt-auto",
        "px-4 lg:px-0 flex-wrap lg:flex-nowrap gap-1.5 lg:gap-6",
        "mt-8 lg:mt-[unset]"
      )}
    >
      <img src={data.flag_url} className="h-3 lg:h-6" alt="" />
      <p>{data.address_line_1}</p>
      <p>{data.address_line_2}</p>
      <p>{data.city}</p>
      <p>{data.postal_code}</p>
      <p>{data.country_name}</p>
    </div>
  );
}
export default Address;
