/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Heart() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="w-6 3xl:w-8">
      <img
        src={`/assets/icons/${
          liked ? "Heart Favourite Red (Model).svg" : "heart-red.svg"
        }`}
        className="h-[20px] 3xl:h-[30px] w-auto"
        alt=""
      />
    </button>
  );
}
export default Heart;
