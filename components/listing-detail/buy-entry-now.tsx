import { getCurrencySymbol } from "@/lib/currencies";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function BuyEntryNow({ data }: Props) {
  return (
    <div className="buy-entry-now-wrapper">
      <button className="shiny-cta text__14">
        <p>
          <span dir="ltr">
            {getCurrencySymbol(data.ticket_pricing.default_currency)}
          </span>
          {data.ticket_pricing.price} {data.ticket_pricing.default_currency}
        </p>
        <span>BUY ENTRY NOW</span>
      </button>
    </div>
  );
}
export default BuyEntryNow;
