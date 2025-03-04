import useIsMobile from "@/hooks/use-mobile";
import DescriptionDropdown from "./description/dropdown";
import Desktop from "./desktop";
import MiniNavProvider from "./mini-nav-provider";
import Mobile from "./mobile";
import ThemedFixedSidenavBtn from "./themed-fixed-sidenav-btn";
import ZimojiDropdown from "./zimoji/dropdown";
import { useQuery } from "react-query";
import { zpBackend } from "@/lib/service";
import Loader from "../common/card/loader";
import { LdpResponce } from "@/lib/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

function Ldp() {
  const isMobile = useIsMobile();
  const params = useSearchParams();
  const router = useRouter();

  const listingQuery = useQuery(
    `listing-detail-${params.get("listing-id")}`,
    async () => {
      try {
        interface ResType {
          data: {
            listing: LdpResponce;
          };
        }
        const { data }: ResType = await zpBackend.get(
          `/api/listing_details?listing_id=${params.get("listing-id")}`
        );

        return data.listing;
      } catch (e) {
        console.log("error while fetching");
        router.push("/404");
      }
    }
  );

  if (listingQuery.isSuccess && listingQuery.data)
    return (
      <div className="tracking-[0.8px] lg:tracking-[1.2px] 3xl:tracking-[2px]">
        <ThemedFixedSidenavBtn />
        <MiniNavProvider />
        {isMobile ? (
          <Mobile data={listingQuery.data} />
        ) : (
          <Desktop data={listingQuery.data} />
        )}
        <DescriptionDropdown data={listingQuery.data} />
        <ZimojiDropdown data={listingQuery.data} />
      </div>
    );

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <Loader />
    </div>
  );
}
export default Ldp;
