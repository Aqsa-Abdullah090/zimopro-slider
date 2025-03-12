import { useEffect, useRef, useState } from "react";
import useThemeContext from "../heroSection/useThemeContext";
import clsx from "clsx";


function FullFeatures() {
  const { theme } = useThemeContext();
  const divRef = useRef<HTMLDivElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  

  // Correctly defining data
  const data = {
    details: {
      flooringTypes: ["Wood", "Tile", "Carpet", "Tile"],
      interiorFeatures: ["Fireplace", "Air Conditioning", "Carpet", "Tile"],
      exteriorFeatures: ["Garden", "Balcony", "Garage"],
    },
  };

  useEffect(() => {
    if (divRef.current && secondDivRef.current) {
      const bigDiv = Math.max(
        divRef.current.offsetHeight,
        secondDivRef.current.offsetHeight
      );
      setHeight(bigDiv);
    }
  }, [data]); // Added data as a dependency

  return (
    <div className="mt-4 2xl:mt-12 flex flex-col lg:flex-row gap-4 lg:gap-32 2xl:gap-40 items-start">
      <section className="description-full max-w-[480px] 2xl:max-w-[588px] flex flex-col gap-3 normal-case text-[11px] 2xl:text-[15px]">
      <p className="normal-case 2xl:tracking-[1px] text-[11px] 2xl:text-[18px]">A beautiful property located in a prime location with all modern
          amenities. A beautiful property located in a prime location with all
          modern amenities. A beautiful property located in a prime location
          with all modern amenities. A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities. A beautiful property located
          in a prime location with all modern amenities. A beautiful property
          located in a prime location with all modern amenities. A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities. A beautiful property located
          in a prime location with all modern amenities. A beautiful property
          located in a prime location with all modern amenities.A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities. A beautiful property located
          in a prime location with all modern amenities. A beautiful property
          located in a prime location with all modern amenities. A beautiful property located in a prime
          location with all modern amenities. A beautiful property located in a
          prime location with all modern amenities.</p>
      </section>

      <section className="features-full flex flex-wrap lg:flex-nowrap items-start gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 2xl:gap-4" ref={divRef}>
          <Item h="Property Type" p="Penthouse" />
          <Item h="Tenure" p="Shared Ownership" />
          <Item h="Year of Build" p="1996" />
          <Item h="Architecture" p="Art Deco" />
          <Item h="Property sq.ft" p="3485 sq.ft" />
          <Item h="Lot size (land)" p="6 Acres" />
          <Item h="Air conditioning" p="No" />
          <Item h="Gymnasium" p="No" />
        </div>
        <BorderLine h={height} theme={theme} />
        <div className="flex flex-col gap-2 2xl:gap-4" ref={secondDivRef}>
          <Item h="Bedrooms" p="5" />
          <Item h="Bathrooms" p="4" />
          <Item h="Reception Rooms" p="2" />
          <Item h="Other Rooms" p="3" />
          <Item h="Number of Floors" p="7" />
          <Item h="Garden" p="Yes" />
          {data.details?.flooringTypes && (
            <div className="normal-case text-[11px] 2xl:text-[15px] flex flex-col gap-1">
              <h4 className="opacity-25 uppercase">Flooring Types</h4>
              {data.details.flooringTypes.map((ft, i) => (
                <p key={i}>{ft}</p>
              ))}
            </div>
          )}
        </div>
        <BorderLine h={height} theme={theme} />
        {data.details?.interiorFeatures && (
          <div className="text-[11px] 2xl:text-[15px] normal-case flex flex-col gap-1 2xl:gap-2">
            <h4 className="opacity-25 uppercase">Interior Features</h4>
            {data.details.interiorFeatures.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        )}
        <BorderLine h={height} theme={theme} />
        {data.details?.exteriorFeatures && (
          <div className="text-[11px] 2xl:text-[15px] normal-case flex flex-col gap-1 2xl:gap-2">
            <h4 className="opacity-25 uppercase">Exterior Features</h4>
            {data.details.exteriorFeatures.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        )}
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
  <div className="flex flex-col gap-1 2xl:gap-2 text-[11px] 2xl:text-[15px]">
    <h4 className="opacity-25">{h}</h4>
    <p className="normal-case">{p}</p>
  </div>
);

interface BorderLineProps {
  h: number;
  theme: string;
}


const BorderLine = ({ h, theme }: Readonly<BorderLineProps>) => (
  <div
    style={{ height: `${h}px` }}
    className={clsx(
      "hidden lg:block w-[1px] 2xl:w-[2px]",
      theme === "dark" ? "bg-white" : "bg-black"
    )}
  />
);

