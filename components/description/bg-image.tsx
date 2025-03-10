/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
function BgImage({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const temp = index + 1;
      setIndex(temp % images.length);
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
