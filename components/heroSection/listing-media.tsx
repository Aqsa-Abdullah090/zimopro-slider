/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";

interface Props {
  data: any;
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
            className="w-[55vw] h-[60vh] 2xl:w-[60vw] 2xl:h-[65vh] object-cover scroll-image"
          />
        </div>
      ))}
    </>
  );
}
export default ListingMedia;
