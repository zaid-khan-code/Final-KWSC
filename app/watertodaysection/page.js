"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";

export default function WaterToday() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

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
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* Banner */}
      <section
        className={`relative h-screen sm:h-[60vh] md:h-[70vh] lg:h-screen transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover bg-center text-white flex justify-center items-center`}
      >
        <div className="absolute inset-0 bg-blue-900/80 z-0 backdrop-blur-sm"></div>
        <div className="relative z-[1] text-center px-4 sm:px-6 md:px-8 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
            Water Today
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-slate-300 max-w-xl sm:max-w-2xl mx-auto font-light">
            Discover the current state of water supply, innovations, and community initiatives by KW&SC to ensure Karachi has clean and safe water.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gray-50">
        <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 text-gray-800">

          <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-8">
            <img
              src="/filtration.jpg"
              alt="Water Filtration Plant"
              className="w-full md:w-1/2 lg:w-2/5 rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-0"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed md:leading-relaxed">
              KW&SC continues to upgrade Karachi's water infrastructure, ensuring every household has access to clean and reliable water. From modern filtration plants to network expansion, the focus remains on quality and efficiency.
            </p>
          </div>

          <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-6 lg:gap-8">
            <img
              src="/community.jpeg"
              alt="Community Water Programs"
              className="w-full md:w-1/2 lg:w-2/5 rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-0"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed md:leading-relaxed">
              Community awareness and engagement are at the heart of our initiatives. KW&SC regularly conducts programs to educate citizens about water conservation and safe sanitation practices, fostering a culture of sustainability.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-8">
            <img
              src="/emergency.png"
              alt="Emergency Water Services"
              className="w-full md:w-1/2 lg:w-2/5 rounded-lg sm:rounded-xl mb-4 sm:mb-5 md:mb-0"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed md:leading-relaxed">
              Emergency response services ensure that water supply issues are addressed promptly across Karachi. KW&SC teams operate around the clock to restore services, repair pipelines, and maintain sewerage systems, safeguarding public health.
            </p>
          </div>

        </div>
      </section>


    </>
  );
}
