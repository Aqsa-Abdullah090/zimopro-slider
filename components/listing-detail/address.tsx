import clsx from "clsx";


/* eslint-disable @next/next/no-img-element */
function Address() {
  return (
    <div
      className={clsx(
        "address flex items-center text-[7px] 3xl:text-[14px] w-max ml-auto mr-auto lg:mt-auto",
        "px-2 lg:px-0 flex-wrap lg:flex-nowrap gap-1.5 lg:gap-4",
        "mt-8 lg:mt-[unset]"
      )}
    >
      <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1701925788521.png?alt=media&token=e639c433-2a76-40a2-a31f-9d1d9684d7f2" className="h-3 lg:h-6" alt="" />
      <p>Regent Street</p>
      <p>The Lloyd’s Building</p>
      <p>London</p>
      <p>WC2N</p>
      <p>United Kingdom</p>
    </div>
  );
}
export default Address;
