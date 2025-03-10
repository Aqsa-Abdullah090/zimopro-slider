import { useEffect, useRef, useState } from "react";

function FullFeatures() {
  const divRef = useRef<HTMLDetailsElement>(null);
  const secondDivRef = useRef<HTMLDetailsElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current && secondDivRef.current) {
      const bigDiv = Math.max(
        divRef.current.offsetHeight,
        secondDivRef.current.offsetHeight
      );
      setHeight(bigDiv);
    }
  }, []);

  return (
    <div className="mt-4 2xl:mt-12 flex flex-col lg:flex-row gap-4 lg:gap-32 3xl:gap-40 items-start">
      <section className="description-full max-w-[480px] 3xl:max-w-[588px] flex flex-col gap-3 normal-case text__15">
      <p className="normal-case 2xl:tracking-[0.8px]">A beautiful property located in a prime location with all modern
          amenities. A beautiful property located in a prime location with all
          modern amenities. A beautiful property located in a prime location
          with all modern amenities. A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities. A beautiful property located
          in a prime location with all modern amenities. A beautiful property
          located in a prime location with all modern amenities. A beautiful
          property located in a prime location with all modern ame...</p>
      </section>

      <section className="features-full flex flex-wrap lg:flex-nowrap items-start gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 3xl:gap-4" ref={divRef}>
          <Item h="Property Type" p={"Penthouse"} />
          <Item h="Tenure" p={"Shared Ownership"} />
          <Item h="Year of Build" p={"1996"} />
          <Item h="Architecture" p={"Art Deco"} />
          <Item h="Property sq.ft" p={"3485 sq.ft"} />
          <Item h="Lot size (land)" p={"6 Acres"} />
          <Item h="Air conditioning" p={"No"} />
          <Item h="Gymnasium" p={"No"} />
        </div>
        <BorderLine h={height} />
        <div className="flex flex-col gap-2 3xl:gap-4" ref={secondDivRef}>
          <Item h="Bedrooms" p={"5"} />
          <Item h="Bathrooms" p={"4"} />
          <Item h="Reception Rooms" p={"2"} />
          <Item h="Other Rooms" p={"3"} />
          <Item h="Number of Floors" p={"7"} />
          <Item h="Garden" p="Yes" />
          {/* {data.details?.flooringTypes && (
            <div className="normal-case text__15 flex flex-col gap-1">
              <h4 className="opacity-25 uppercase">Flooring Types</h4>
              {data.details.flooringTypes.map((ft, i) => (
                <p key={i}>{ft}</p>
              ))}
            </div>
          )} */}
        </div>
        <BorderLine h={height} />
        {/* {data.details?.interiorFeatures && (
          <div className="text__15 normal-case flex flex-col gap-1 3xl:gap-2">
            <h4 className="opacity-25 uppercase">interior features</h4>
            {data.details.interiorFeatures.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        )} */}
        <BorderLine h={height} />
        {/* {data.details?.exteriorFeatures && (
          <div className="text__15 normal-case flex flex-col gap-1 3xl:gap-2">
            <h4 className="opacity-25 uppercase">exterior features</h4>
            {data.details.exteriorFeatures.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        )} */}
      </section>
    </div>
  );
}
export default FullFeatures;

interface ItemProps {
  h: string;
  p: string;
}

const Item = ({ h, p }: Readonly<ItemProps>) => (
  <div className="flex flex-col gap-1 3xl:gap-2 text__15">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);

interface BorderLineProps {
  h: number;
}

const BorderLine = ({ h }: Readonly<BorderLineProps>) => (
  <div
    style={{ height: `${h}px` }}
    className="hidden lg:block w-[1px] 3xl:w-[2px] bg-black"
  />
);
