"use client";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function Countdown() {
  const targetDate: Date = new Date("2024-12-31T00:00:00Z");

  const calculateTimeLeft = (): TimeLeft => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const formatNumber = (num: number): string => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="uppercase flex items-center justify-center gap-4 2xl:gap-8 relative font-light">
      {["day(s)", "hour(s)", "minute(s)", "second(s)"].map((unit, index) => {
        const values: string[] = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
        return (
          <div key={index} className="flex flex-col gap-2 items-center relative w-12 2xl:w-16">
            <span className="text-[27px] lg:text-[31px] 2xl:text-[45px] tracking-[3px] 2xl:tracking-[4px] leading-[0.7]">{values[index]}</span>
            <span className="text-[5.3px] 2xl:text-[7px] tracking-[1px] 2xl:tracking-[1.1px]">{unit}</span>
            {index < 3 && <div className="w-[1px] h-[85%] bg-current absolute bottom-0.5 -right-1.5"></div>}
          </div>
        );
      })}
    </div>
  );
}

export default Countdown;
