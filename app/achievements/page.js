"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

// NOTE: Since the user provided the code with the Image import and icon paths, 
// we must use them, but the styling below is designed to make them look futuristic.

export default function Achievements() {
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
      .to(
        ".wrapper",
        { y: "-100%", ease: "power4.inOut", duration: 1 },
        "-=0.8"
      );
  }, []);

  const achievements = [
    {
      title: "Hydrant Management Cell",
      description: "Established comprehensive hydrant management system to combat illegal water connections and ensure proper water distribution.",
      icon: "/icon/airdrop.png",
      year: "2024"
    },
    {
      title: "Global Water Summit 2024",
      description: "Represented Pakistan at the prestigious Global Water Summit in London, showcasing KW&SC's innovative water management solutions.",
      icon: "/icon/people.png",
      year: "2024"
    },
    {
      title: "Rangers Partnership",
      description: "Joined forces with Pakistan Rangers to combat illegal hydrants and water theft, ensuring fair water distribution.",
      icon: "/icon/microphone.png",
      year: "2024"
    },
    {
      title: "Fareeda Salam Development Center",
      description: "Established community development center to engage with local communities and improve service delivery.",
      icon: "/icon/user-icon.png",
      year: "2024"
    },
    {
      title: "Grievance Redressal Management",
      description: "Introduced comprehensive GRM cell to address customer complaints and improve service quality.",
      icon: "/icon/clipboar02.svg",
      year: "2024"
    },
    {
      title: "Digital Transformation",
      description: "Implemented digital solutions including online billing, mobile apps, and automated systems for better service delivery.",
      icon: "/icon/medal-star.svg",
      year: "2024"
    }
  ];

  return (
    <>
      {loading && <Loader />}
      
      {/* 1. Futuristic Hero Section */}
      <section className={`relative h-[60vh] md:h-[70vh] transition-opacity duration-700 bg-gray-900 text-white flex justify-center items-center overflow-hidden`}>
        {/* Background Effect: Subtle Glitch/Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/abstract-lines.svg')]"></div>
        <div className="absolute inset-0 bg-blue-900/40 z-0"></div>
        
        <div className="relative z-[1] max-w-5xl mx-auto px-6 text-center">
          <Fade direction="up" cascade damping={0.1} triggerOnce duration={1000}>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              MILESTONES
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
                ACHIEVED
              </span>
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-blue-200/90 font-light font-mono">
               EVOLVING KARACHI'S INFRASTRUCTURE
            </p>
          </Fade>
        </div>
      </section>

      {/* 2. Achievements Grid Section (Futuristic Dark Body) */}
      <div className="bg-gray-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Our Digital & Infrastructural Feats
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
                KW&SC has implemented next-generation solutions for service delivery and governance.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Fade key={index} direction="up" triggerOnce duration={800} delay={index * 150} className="h-full">
                <div 
                  className="bg-gray-800/80 rounded-xl shadow-2xl p-8 flex flex-col justify-between h-full 
                             border border-gray-700 transition-all duration-300 relative 
                             hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  {/* Subtle Corner Accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 opacity-70"></div>
                  
                  <div className="flex items-center mb-4">
                    {/* Icon Container with Futuristic Styling */}
                    <div className="w-12 h-12 bg-blue-900/50 p-2 rounded-full flex items-center justify-center mr-4 border border-blue-600">
                        <Image
                          src={achievement.icon}
                          width={40}
                          height={40}
                          alt={achievement.title}
                          className="invert" // Invert image color for dark background
                        />
                    </div>

                    {/* Year Tag */}
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-green-600/30">
                      {achievement.year}
                    </span>
                  </div>
                  
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-3 mt-4 tracking-wide">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Footer Line with Accent */}
                  <div className="mt-6 pt-4 border-t border-cyan-500/30">
                    <span className="text-xs font-mono text-cyan-400">
                        INITIATIVE COMPLETE
                    </span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}