


function Features() {
  return (
    <div className="lg:pl-12 3xl:pl-16 pl-4 mt-3 3xl:mt-5">
      <div className="grid max-w-[800px] grid-cols-3">
        <div className="ldp_feature_col">
          <Item h="Property Type" p={"3485 sq.ft"} />
          <Item h="Tenure" p={"3485 sq.ft"} />
          <Item h="Year of Build" p={"No"} />
          <Item h="Architecture" p={"3485 sq.ft"} />
        </div>
        <div className="ldp_feature_col">
          <Item h="Property sq.ft" p={"3485 sq.ft"} />
          <Item h="Lot size (land)" p={"3485 sq.ft"} />
          <Item h="Air conditioning" p={"No"} />
          <Item h="Gymnasium" p={"3485 sq.ft"} />
        </div>
        <div className="ldp_feature_col">
          <Item h="Bedrooms" p={"No"} />
          <Item h="Bathrooms" p={"No"} />
          <Item h="Reception Rooms" p={"No"} />
          <Item h="Other Rooms" p={"No"} />
        </div>
      </div>
      <button className="uppercase mt-1 text__15 text-black/25 hover:text-black">
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
