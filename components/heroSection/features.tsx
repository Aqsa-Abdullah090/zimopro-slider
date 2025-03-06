


function Features() {
  return (
    <div className="lg:pl-12 3xl:pl-16 pl-4 mt-3 3xl:mt-5 text-[11px] tracking-[1.5px]">
      <div className="grid max-w-[800px] grid-cols-3">
        <div>
          <Item h="Property Type" p={"Penthouse"} />
          <Item h="Tenure" p={"Shared Ownership"} />
          <Item h="Year of Build" p={"1996"} />
          <Item h="Architecture" p={"Art Deco"} />
        </div>
        <div>
          <Item h="Property sq.ft" p={"3485 sq.ft"} />
          <Item h="Lot size (land)" p={"6 Acres"} />
          <Item h="Air conditioning" p={"No"} />
          <Item h="Gymnasium" p={"No"} />
        </div>
        <div>
          <Item h="Bedrooms" p={"5"} />
          <Item h="Bathrooms" p={"4"} />
          <Item h="Reception Rooms" p={"2"} />
          <Item h="Other Rooms" p={"3"} />
        </div>
      </div>
      <button className="uppercase mt-1 text-white/25 hover:text-white text-[11px] 3xl:text-[15px]">
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
  <div className="ldp_feature_col_item text-[11px] 3xl:text-[15px]">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);
