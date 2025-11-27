// Updated Home component with banner height set to half of the screen

"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
import Loader from "@/components/Loader";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import {
  usePerformanceMonitor,
  useImagePreloader,
} from "@/hooks/usePerformance";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCityOfLights, setShowCityOfLights] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState([]);

  const performanceMetrics = usePerformanceMonitor();

  const backgroundGifs = [
    "/downtownkarachi.gif",
    "/karachicharminar.gif",
    "/teentalwarkarachi.gif",
    "/4.gif",
    "/5.gif",
    "/6.gif",
    "/7.gif",
    "/8.gif",
    "/9.gif",
    "/10.gif",
    "/11.gif",
    "/12.gif",
  ];

  const { loadedImages, loadingProgress } = useImagePreloader(backgroundGifs);

  useEffect(() => {
    const preloadImages = () => {
      const criticalGifs = backgroundGifs.slice(0, 3);
      criticalGifs.forEach((gif, index) => {
        const img = new Image();
        img.src = gif;
      });

      setTimeout(() => {
        const remainingGifs = backgroundGifs.slice(3);
        remainingGifs.forEach((gif) => {
          const img = new Image();
          img.src = gif;
        });
      }, 2000);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const particleData = Array.from({ length: 20 }, () => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 2,
    }));
    setParticles(particleData);
  }, []);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        setTimeout(() => {
          setShowCityOfLights(true);
          setTimeout(() => {
            setShowCityOfLights(false);
            setTimeout(() => {
              setShowMainContent(true);
            }, 500);
          }, 3000);
        }, 500);
      },
    });

    const loaderElement = document.querySelector(".loader");
    const wrapperElement = document.querySelector(".wrapper");

    if (loaderElement && wrapperElement) {
      loaderTimeline
        .fromTo(
          ".loader",
          { scaleY: 0, transformOrigin: "50% 100%" },
          { scaleY: 1, duration: 0.5, ease: "power2.inOut" }
        )
        .to(".loader", {
          scaleY: 0,
          transformOrigin: "0% -100%",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          ".wrapper",
          { y: "-100%", ease: "power4.inOut", duration: 1 },
          "-=0.8"
        );
    } else {
      setTimeout(() => setLoading(false), 1000);
    }
  }, []);

  useEffect(() => {
    const startRotation = () => {
      const interval = setInterval(() => {
        setIsTransitioning(true);

        setTimeout(() => {
          setCurrentBgIndex(
            (prevIndex) => (prevIndex + 1) % backgroundGifs.length
          );
          setNextBgIndex(
            (prevIndex) => (prevIndex + 2) % backgroundGifs.length
          );

          setTimeout(() => {
            setIsTransitioning(false);
          }, 2000);
        }, 100);
      }, 8000);

      return interval;
    };

    const rotationTimer = setTimeout(() => {
      const interval = startRotation();
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(rotationTimer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* Banner height changed from full screen to half screen */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative subtle shapes */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 lg:w-96 h-48 sm:h-64 md:h-72 lg:h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[30rem] h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-cyan-100/40 rounded-full blur-3xl"></div>

        <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 text-center tracking-tight">
            Water Today
          </h2>

          <div className="rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl bg-white shadow-lg md:shadow-xl lg:shadow-2xl p-4 sm:p-5 md:p-8 lg:p-10 xl:p-12 2xl:p-14 border border-gray-200 flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 transition-all hover:shadow-2xl">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/downtownkarachi.gif"
                alt="Water Update"
                className="rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl shadow-md object-cover w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-96"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-lg space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <p>
                Today’s water distribution across Karachi remains stable, with
                major pumping stations operating at optimal capacity. Supply to
                central and western zones is reported as normal, while select
                southern sectors may experience low-pressure intervals during
                peak hours. Maintenance teams are deployed to ensure smooth flow
                and address any temporary disruptions.
              </p>
              <button className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 inline-block text-xs sm:text-sm md:text-base lg:text-lg text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
