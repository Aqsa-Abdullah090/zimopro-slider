import clsx from "clsx";
import useThemeContext from "./useThemeContext";
import { listingDetailsFeatues } from "@/lib/types";

interface Props {
  data: listingDetailsFeatues;
}

function Features({ data }: Props) {
  const { theme, setDescription } = useThemeContext();

  return (
    <div className="lg:pl-12 3xl:pl-16 pl-4 mt-3 3xl:mt-5">
      <div className="grid max-w-[800px] grid-cols-3">
        <div className="ldp_feature_col">
          <Item h="Property Type" p={data.propertyType} />
          <Item h="tenure" p={data.tenure} />
          <Item h="Year of build" p={data.yearOfBuild} />
          <Item h="achitecture" p={data.architecture} />
        </div>
        <div className="ldp_feature_col">
          <Item h="property sq.ft" p={data.property_sqft} />
          <Item h="lot size (land)" p={data.lot_size} />
          <Item h="air conditioning" p={data.air_conditioning} />
          <Item h="gymnasium" p={data.gymnasium} />
        </div>
        <div className="ldp_feature_col">
          <Item h="Bedrooms" p={data.bedrooms} />
          <Item h="Bathrooms" p={data.bathrooms} />
          <Item h="Reception rooms" p={data.receptionRooms} />
          <Item h="other rooms" p={data.otherRooms} />
        </div>
      </div>
      <button
        className={clsx(
          "uppercase mt-1 text__15",
          theme === "dark"
            ? "text-white/25 hover:text-white"
            : "text-black/25 hover:text-black"
        )}
        onClick={() => setDescription(true)}
      >
        view all features
      </button>
    </div>
  );
}
export default Features;

interface ItemProps {
  h: string;
  p: string;
}

const Item = ({ h, p }: Readonly<ItemProps>) => (
  <div className="ldp_feature_col_item text__15">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);
