/* eslint-disable @next/next/no-img-element */
import Address from "../footer/address";
import Description from "../heroSection/description";
import Footer from "../footer/footer";
import ScrollProgress from "./scroll-progress";
import ListingMedia from "../heroSection/listing-media";
import Features from "../heroSection/features";
import Header from "../header/header";
import clsx from "clsx";
import Hero from "../heroSection/hero";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function ListingPage({ data }: Props) {
  return (
    <div
      className={clsx(
        "hero relative flex flex-col h-full items-start justify-start uppercase overflow-hidden flex-nowrap"
      )}
    >
      <Header />
      <div className="hero-x-scrollable flex gap-6 lg:gap-0 flex-col lg:flex-row flex-nowrap w-screen lg:w-[400vw]">
        <div className="2xl:w-[825px] flex-shrink-0 hero-text-content mb-8 lg:mb-0">
          <Hero data={data} />
          <div className="mt-8 lg:mt-0">
            <Description />
            <Features />
          </div>
        </div>
        <ListingMedia data={data ?? { images: [] }} />

      </div>

      <ScrollProgress />
      <Address />
      <Footer />
    </div>
  );
}
export default ListingPage;
