/* eslint-disable @next/next/no-img-element */
import Heart from "./heart";

function HeaderBtns() {
  return (
    <>
      <Heart />
      <button>
        <img src="/assets/icons/share.svg" className="h-[20px] 3xl:h-[30px]" alt="" />
      </button>
      <button>
        <img src="/assets/icons/cam.svg" className="h-[20px] 3xl:h-[30px]" alt="" />
      </button>
    </>
  );
}

export default HeaderBtns;

