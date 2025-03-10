/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

function BgImage() {
  const [index, setIndex] = useState<number>(0);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2Fbackground_carousel%2F2400%2FZP172594.jpg?alt=media&token=0faf3bf5-71c0-4d99-9fd2-7248411ad332",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div
      className="fixed w-screen h-screen object-cover opacity-20 transition-all duration-500"
      style={{
        backgroundImage: `url("${images[index]}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}

export default BgImage;
