import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useThemeContext from "../useThemeContext";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function FullFeatures({ data }: Props) {
  const divRef = useRef<HTMLDetailsElement>(null); // Create a ref for the div
  const secondDivRef = useRef<HTMLDetailsElement>(null); // Create a ref for the div
  const [height, setHeight] = useState(0); // State to store the height

  useEffect(() => {
    if (divRef.current && secondDivRef.current) {
      // Get the height of the div after it has rendered
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
        <p>{data.description}</p>
      </section>

      <section className="features-full flex flex-wrap lg:flex-nowrap items-start gap-6 lg:gap-12">
        <div className="flex flex-col gap-2 3xl:gap-4" ref={divRef}>
          <Item h="Property Type" p={data.details.propertyType} />
          <Item h="tenure" p={data.details.tenure} />
          <Item h="Year of build" p={data.details.yearOfBuild} />
          <Item h="achitecture" p={data.details.architecture} />
          <Item h="property sq.ft" p={data.details.property_sqft} />
          <Item h="lot size (land)" p={data.details.lot_size} />
          <Item h="air conditioning" p={data.details.air_conditioning} />
          <Item h="gymnasium" p={data.details.gymnasium} />
        </div>
        <BorderLine h={height} />
        <div className="flex flex-col gap-2 3xl:gap-4" ref={secondDivRef}>
          <Item h="Bedrooms" p={data.details.bedrooms} />
          <Item h="Bathrooms" p={data.details.bathrooms} />
          <Item h="Reception rooms" p={data.details.receptionRooms} />
          <Item h="other rooms" p={data.details.otherRooms} />
          <Item h="Number of Floors" p={data.details.numberOfFloors} />
          <Item h="Garden" p="Yes" />
          <div className="normal-case text__15 flex flex-col gap-1">
            <h4 className="opacity-25 uppercase">Flooring Types</h4>
            {data.details.flooringTypes?.map((ft, i) => (
              <p key={i}>{ft}</p>
            ))}
          </div>
        </div>
        <BorderLine h={height} />
        <div className="text__15 normal-case flex flex-col gap-1 3xl:gap-2">
          <h4 className="opacity-25 uppercase">interior features</h4>
          {data.details.interiorFeatures.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <BorderLine h={height} />
        <div className="text__15 normal-case flex flex-col gap-1 3xl:gap-2">
          <h4 className="opacity-25 uppercase">exterior features</h4>
          {data.details.exteriorFeatures.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
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

const BorderLine = ({ h }: Readonly<BorderLineProps>) => {
  const { theme } = useThemeContext();
  return (
    <div
      style={{ height: `${h}px` }}
      className={clsx(
        "hidden lg:block w-[1px] 3xl:w-[2px]",
        theme === "light" ? "bg-black" : "bg-white"
      )}
    />
  );
};
