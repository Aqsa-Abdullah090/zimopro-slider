import { formatNumber2Digit } from "@/lib/helpers";
import moment from "moment";
import { useTimer } from "react-timer-hook";
import useThemeContext from "./useThemeContext";
import clsx from "clsx";

function Countdown({ expiry }: { expiry: Date }) {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: expiry,
  });

  return (
    <div className="uppercase flex items-center justify-between w-full mx-auto relative">
      <CountdownItem value={days} unit="day(s)" />
      <Border />
      <CountdownItem value={hours} unit="hour(s)" />
      <Border />
      <CountdownItem value={minutes} unit="minute(s)" />
      <Border />
      <CountdownItem value={seconds} unit="second(s)" />
    </div>
  );
}
export default Countdown;

interface CProps {
  value: any;
  unit: string;
}

const CountdownItem = ({ value, unit }: Readonly<CProps>) => (
  <div className="flex flex-col gap-2 items-center font-light w-12 3xl:w-16">
    <span className="text__45 tracking-[3px] 3xl:tracking-[4px] leading-[0.7]">
      {formatNumber2Digit(value)}
    </span>
    <span className="text__7 tracking-[1px] 3xl:tracking-[1.1px]">{unit}</span>
  </div>
);

const Border = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={clsx(
        "h-full w-[1px] self-end",
        theme === "dark" ? "bg-white" : "bg-black"
      )}
    />
  );
};
