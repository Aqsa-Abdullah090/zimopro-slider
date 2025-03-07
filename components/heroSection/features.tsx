


function Features() {
  return (
    <div className="lg:pl-12 2xl:pl-16 pl-4 mt-3 2xl:mt-5 tracking-[1.5px]">
      <div className="grid max-w-[800px] grid-cols-3 ">
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
      <button className="uppercase mt-1 text-white/25 hover:text-white text-[11px] 2xl:text-[15px]">
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
  <div className="flex flex-col gap-1 2xl:gap-3 text-[11px] 2xl:text-[15px] 2xl:leading-[2]">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);
