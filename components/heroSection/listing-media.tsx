/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  data: { images: string[] }; // Explicitly define `images` as an array of strings
}

function ListingMedia({ data }: Props) {
  const [imageWidth, setImageWidth] = useState("55vw"); // Default width

  useEffect(() => {
    const updateSize = () => {
      setImageWidth(window.innerWidth >= 2500 ? "70vw" : "55vw");
    };

    if (typeof window !== "undefined") {
      updateSize(); // Set on mount
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  return (
    <>
      {data.images.map((item: string, i: number) => (
        <div
          key={i}
          className="scroll-media-wrapper flex-shrink-0 lg:mr-28 relative mx-auto lg:mx-[unset]"
        >
          <img
            src="/assets/ZigPro.svg"
            alt=""
            className={clsx(
              "absolute top-2 left-2 3xl:top-8 3xl:left-8 h-4 lg:h-6 invert opacity-25"
            )}
          />
          <img
            src={item}
            alt=""
            style={{ width: imageWidth }}
            className="h-[60vh] 2xl:h-[65vh] object-cover scroll-image"
          />
        </div>
      ))}
    </>
  );
}

export default ListingMedia;

