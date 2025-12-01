"use client";
import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

export default function Leadership() {
  const pastLeaders = [
    // {
    //   name: "Engr. Syed Najib Ahmed",
    //   role: "Former Managing Director",
    //   period: "2022 - 2023",
    //   img: "/leaders/najib.jpg",
    // },
    // {
    //   name: "Asadullah Khan",
    //   role: "Former Managing Director",
    //   period: "2020 - 2022",
    //   img: "/leaders/asadullah.jpg",
    // },
    // {
    //   name: "Hashim Raza Zaidi",
    //   role: "Former Managing Director",
    //   period: "2018 - 2020",
    //   img: "/leaders/hashim.jpg",
    // },



    // Dummy Data Below for Representation


    {
      name: "Muhammad Saqib",
      role: "Deputy Managing Director-HRD&A",
      img: "/images-leader/saqib.jpeg",
    },
    {
      name: "Khurram Shehzad",
      role: "Deputy Managing Director-Planning",
      img: "/images-leader/khurram.jpg",
    },
    {
      name: "Minhaj Ur Rehman",
      role: "Chief Internal Auditor",
      img: "/images-leader/minhaj.jpg",
    }
  ];

  const managementTeam = [
    // {
    //   name: "Ahmed Ali Siddiqui",
    //   role: "Managing Director",
    //   img: "/leaders/salahuddin.jpg",
    // },
    // {
    //   name: "Asadullah Khan",
    //   role: "Chief Operating Officer",
    //   img: "/leaders/imran.jpg",
    // },
    // {
    //   name: "Muhammad Ali Sheikh",
    //   role: "Chief Engineer Water Supply",
    //   img: "/leaders/sarah.jpg",
    // },
    // {
    //   name: "Aftab Alam Chandio",
    //   role: "Chief Engineer Sewerage",
    //   img: "/leaders/bilal.jpg",
    // },

    // Dummy Data Below for Representation

    {
      name: "Muhammad Saqib",
      role: "Deputy Managing Director-HRD&A",
      img: "/images-leader/saqib.jpeg",
    },
    {
      name: "Khurram Shehzad",
      role: "Deputy Managing Director-Planning",
      img: "/images-leader/khurram.jpg",
    },
    {
      name: "Minhaj Ur Rehman",
      role: "Chief Internal Auditor",
      img: "/images-leader/minhaj.jpg",
    },
    {
      name: "Abdul Rehman",
      role: "Deputy Chief Finance Officer",
      img: "/images-leader/abul Rehman.jpg",
    },
    {
      name: "Abdul Raqeeb Phul",
      role: "Secretary to the Board, KW&SC",
      img: "/images-leader/Abdul Raqeeb.png",
    },
  ];

  return (
    <>
      {/* 🔥 CYBER HERO BANNER (Same as Services & News) */}
      <section className="relative h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center flex justify-center items-center overflow-hidden text-white">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

        <div className="relative z-[1] max-w-5xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan text-[10px] sm:text-xs font-mono mb-4 sm:mb-6 backdrop-blur-md">
            <Globe className="w-3 h-3 animate-pulse" />
            <span>KW&SC LEADERSHIP CORE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-white drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            OUR LEADERSHIP
          </h2>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Meet the visionaries guiding Karachi Water & Sewerage Corporation (KW&SC)
            toward a sustainable and efficient future.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      {/* BODY SECTION */}
      <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 mt-10 sm:mt-14 md:mt-20">
        <div className="text-gray-900 max-w-[95%] sm:max-w-[90%] mx-auto px-2 sm:px-3">

          <header className="text-center mb-10 sm:mb-14 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5">Leadership & Management</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              KW&SC has evolved under the guidance of exceptional leaders who have contributed
              to the organization's growth. Meet our current management team and past leaders.
            </p>
          </header>

          {/* CURRENT MANAGEMENT TEAM */}
          <section className="mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-8 sm:mb-10 md:mb-12">
              Current Management Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-2 sm:px-0">
              {managementTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 text-center hover:shadow-lg sm:hover:shadow-xl transition-all"
                >
                  <div className="w-full aspect-square relative mb-3 sm:mb-4 md:mb-5">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-800">{member.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-1.5 md:mt-2">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PAST LEADERS */}
          <section className="mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-8 sm:mb-10 md:mb-12">
              Past Leaders
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-2 sm:px-0">
              {pastLeaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 text-center hover:shadow-lg sm:hover:shadow-xl transition-all"
                >
                  <div className="w-full aspect-square relative mb-3 sm:mb-4 md:mb-5">
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, (max-width: 1024px) 35vw, 25vw"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-800">{leader.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 sm:mt-1.5 md:mt-2">{leader.role}</p>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{leader.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
