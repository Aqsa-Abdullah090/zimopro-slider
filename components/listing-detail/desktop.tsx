import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import ListingPage from "./listing-page";
import { LdpResponce } from "@/lib/types";

interface Props {
  data: LdpResponce;
}

function Desktop({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef(0);

  useGSAP(
    () => {
      // x-axis scroll
      const horizontalScrollTween = gsap.to(".hero-x-scrollable", {
        x: String(-(data.images.length * 90) + "vw"),
        ease: "none",
        scrollTrigger: {
          trigger: ".scrollable-container",
          scrub: 0.1,
          pin: true,
          end: "+=2500",
        },
      });
      // scroll progress
      gsap.to(".scroll-progressbar", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          markers: false,
        },
        width: "100%",
        duration: 1,
        ease: "none",
      });
      // fade the opacity of content
      gsap.to(".hero-text-content", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=200",
          scrub: true,
          markers: false,
        },
        opacity: 0,
        duration: 2,
        ease: "none",
      });
      // move few hero text x axis
      gsap.to(".price-card", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100",
          scrub: true,
          markers: false,
        },
        x: 100,
        duration: 2,
        ease: "none",
      });
      // move few hero text x axis
      gsap.to(".small-description", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100",
          scrub: true,
          markers: false,
        },
        x: -150,
        duration: 2,
        ease: "none",
      });
      // scroll progress for left, right icons opacity
      ScrollTrigger.create({
        start: "top top", // Start when the top of the page is at the top of the viewport
        end: "bottom bottom", // End when the bottom of the page is at the bottom of the viewport
        scrub: true, // Smooth scrolling effect
        onUpdate: (self) => {
          const scrollPercentage = Math.round(self.progress * 100);
          // left side
          if (scrollPercentage === 0) {
            document
              .querySelector(".scroll-arrow-left")
              ?.classList.add("opacity-25");
          } else {
            document
              .querySelector(".scroll-arrow-left")
              ?.classList.remove("opacity-25");
          }
          // right side
          if (scrollPercentage === 100) {
            document
              .querySelector(".scroll-arrow-right")
              ?.classList.add("opacity-25");
          } else {
            document
              .querySelector(".scroll-arrow-right")
              ?.classList.remove("opacity-25");
          }
        },
      });

      // animate image and video wrapper items when in view
      // remove 1st element from animation list
      const listingMediaItems = gsap.utils
        .toArray(".scroll-media-wrapper")
        .slice(1);
      listingMediaItems.forEach((mediaItem: any) => {
        gsap.fromTo(
          mediaItem,
          {
            scale: 0.85,
          },
          {
            scrollTrigger: {
              trigger: mediaItem,
              start: "top 95%",
              markers: false,
              containerAnimation: horizontalScrollTween,
              toggleActions: "play reset play reverse",
            },
            scale: 1,
            duration: 1,
          }
        );
      });

      // footer scroll animation timeline
      const footerAddressTl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=200px",
          toggleActions: "play none none reverse",
          scrub: false,
        },
        defaults: {
          ease: "sine.in",
        },
      });

      footerAddressTl
        .to(".address", {
          marginLeft: 40,
          duration: 0.8,
        })
        .to(".footer-pricing", {
          left: "2vw",
          opacity: 1,
          duration: 1.8,
        });
    },
    {
      scope: containerRef,
    }
  );

  // implement blur on images while scrolling
  useEffect(() => {
    let blurTimeout: any;
    const elements = document.querySelectorAll<HTMLDivElement>(
      ".scroll-media-wrapper"
    );

    const handleWindowScroll = (e: Event) => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollSpeed = Math.abs(scrollTop - scrollingRef.current);

      // Apply the blur based on the scroll speed using GSAP
      gsap.to(elements, {
        filter: `blur(${Math.min(scrollSpeed / 10, 5)}px)`,
        duration: 0.1,
      });

      clearTimeout(blurTimeout);
      blurTimeout = setTimeout(() => {
        gsap.to(elements, {
          filter: "blur(0px)",
          duration: 0.5,
        });
      }, 50);

      scrollingRef.current = scrollTop;
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      clearTimeout(blurTimeout);
    };
  }, []);

  return (
    <div
      className={clsx(
        "listing__detail__page"
      )}
      ref={containerRef}
    >
      <main className="h-auto lg:h-dvh hide-scrollbar scrollable-container">
        <ListingPage data={data} />
      </main>
    </div>
  );
}
export default Desktop;
