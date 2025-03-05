import clsx from "clsx";


function Loaded() {

  return (
    <div className="w-full flex flex-col gap-1 3xl:gap-2">
      <div
        className={clsx(
          "h-[2px]"
        )}
      >
        <div className="h-full bg-golden" style={{ width: 0 + "%" }} />
      </div>
      <p className="text-[11px] 3xl:text-[13px]">0%</p>
    </div>
  );
}
export default Loaded;
