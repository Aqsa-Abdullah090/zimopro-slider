import clsx from "clsx";
import useThemeContext from "./useThemeContext";
import DescriptionDropdown from "../description/dropdown";

function Features() {
  const { theme, setDescription, description } = useThemeContext();

  return (
    <div className="lg:pl-12 3xl:pl-16 pl-4 mt-3 3xl:mt-5">
      <div className="grid max-w-[800px] grid-cols-3">
        <div className="flex flex-col gap-2 2xl:gap-5">
          <Item h="Property Type" p={"Penthouse"} />
          <Item h="Tenure" p={"Shared Ownership"} />
          <Item h="Year of Build" p={"1996"} />
          <Item h="Architecture" p={"Art Deco"} />
        </div>
        <div className="flex flex-col gap-2 2xl:gap-5">
          <Item h="Property sq.ft" p={"3485 sq.ft"} />
          <Item h="Lot size (land)" p={"6 Acres"} />
          <Item h="Air conditioning" p={"No"} />
          <Item h="Gymnasium" p={"No"} />
        </div>
        <div className="flex flex-col gap-2 2xl:gap-5">
          <Item h="Bedrooms" p={"5"} />
          <Item h="Bathrooms" p={"4"} />
          <Item h="Reception Rooms" p={"2"} />
          <Item h="Other Rooms" p={"3"} />
        </div>
      </div>
      <button
        className={clsx(
          "uppercase mt-1 text-[11px] 3xl:text-[15px]",
          theme === "dark"
            ? "text-white/25 hover:text-white"
            : "text-black/25 hover:text-black"
        )}
        onClick={() => setDescription(true)}
      >
        view all features
      </button>

      {/* Add dropdown below */}
      {description && <DescriptionDropdown />}
    </div>
  );
}

export default Features;



interface ItemProps {
  h: string;
  p: string;
}

const Item = ({ h, p }: Readonly<ItemProps>) => (
  <div className="flex flex-col gap-1 2xl:gap-3 text-[11px] 3xl:text-[15px] 3xl:leading-[2]">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);