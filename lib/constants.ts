export const LAMDI_API_BASE_1 =
  "https://vvqquy7mf47ai6mx7qjpnctuy40ymhpi.lambda-url.eu-west-2.on.aws";

export const LAMDI_API_BASE_1_HEADERS = {
  "api-key": "#9QYxNr6",
};

// for framer motion animate presence when elements are being hidden after half scroll and on top again

export const exit = { opacity: 0 };
export const transition = { duration: 0.5, ease: "easeInOut" };

// define navbar behaviour based on current section
export const NAV_BEHEIVIOURS = {
  //   background transparent, fixed to top
  transparentBg: 1,
  // background with solid colors
  solidBg: 2,
  solidwhiteBg: 3,
};

export const featuredImages = [
  {
    id: 1,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F1.png?alt=media&token=ad1d9ceb-5f0a-4f46-9a26-f4014c6b6d02",
    name: "img",
    logo: "/assets/temp/g12.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 2,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F2.png?alt=media&token=d1ef2f56-f3be-46cc-80bd-60fdee4bafe6",
    name: "img",
    logo: "/assets/temp/Savills.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 3,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F3.png?alt=media&token=f3018214-821d-4182-9728-2e81d234c106",
    name: "img",
    logo: "/assets/temp/g12.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 4,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F4.png?alt=media&token=ed013751-34d6-46f4-b310-1e04dff34bea",
    name: "img",
    logo: "/assets/temp/Savills.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 5,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F5.png?alt=media&token=317f94d1-ba5f-4d38-9a6b-86c472cb26c3",
    name: "img",
    logo: "/assets/temp/g12.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 6,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F6.png?alt=media&token=3fa64872-b8e2-46f1-9536-a2aca708a5b5",
    name: "img",
    logo: "/assets/temp/Savills.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 7,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F7.png?alt=media&token=e26cd974-2264-410d-b0ad-a2d6a07508f1",
    name: "img",
    logo: "/assets/temp/g12.svg",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 8,
    src: "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F8.png?alt=media&token=f11f7f03-9f2b-44aa-87f8-fbcf1d430d23",
    name: "img",
    logo: "/assets/temp/Savills.svg",
    flag: "/assets/temp/uk-flag.png",
  },
];

export enum LISTING_TYPES {
  FEATURED = "featured",
  PREMIUN = "premium",
  TRENDING = "trending",
  POPULAR = "popular",
  JUST_FOR_YOU = "just-for-you",
  NEWLY_LISTED = "newly-listed",
  ENDING_SOON = "ending-soon",
  WISHLIST = "wishlist",
}
