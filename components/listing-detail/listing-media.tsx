/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import VideoEl from "./video-el";
import { LdpResponce } from "@/lib/types";
import jsonData from "./data.json";

interface Props {
  data: LdpResponce;
}

function ListingMedia({ data }: Props) {
  return (
    <>
      {data.images.map((item, i) => (
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
            className="h-full w-full object-cover scroll-image"
          />
          {/* {item.type === "image" ? (
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover scroll-image"
            />
          ) : (
            <VideoEl url={item.video} />
          )} */}
        </div>
      ))}
      {/* video elements */}
      <div className="scroll-media-wrapper flex-shrink-0 lg:mr-28 relative mx-auto lg:mx-[unset]">
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx(
            "absolute top-2 left-2 3xl:top-8 3xl:left-8 h-4 lg:h-6 invert opacity-25"
          )}
        />
        <VideoEl url={jsonData[5].video as string} />
      </div>
    </>
  );
}
export default ListingMedia;
