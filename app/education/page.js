"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";

export default function Education() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });

    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  const posts = [
    {
      title: "Water Conservation Workshops",
      description: "KW&SC conducts interactive workshops for schools and communities, teaching smart water usage and leak detection techniques to promote sustainable water practices.",
      image: "/images/workshop.jpg",
    },
    {
      title: "Educational Seminars",
      description: "Regular seminars and webinars educate citizens about Karachi’s water supply system, sewerage management, and the importance of environmental sustainability.",
      image: "/images/seminar.jpg",
    },
    {
      title: "Digital Learning & Awareness",
      description: "Online resources, infographics, and e-learning modules help students and the public understand water treatment, wastewater management, and smart city water solutions.",
      image: "/images/digital-learning.jpg",
    },
  ];

  return (
    <>
      {loading && <Loader />}

      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[60vh] bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)] bg-[size:40px_40px] opacity-30 z-0"></div>
        <div className="relative z-[1] max-w-4xl text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 backdrop-blur-md">
            KW&SC EDUCATION INITIATIVES
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "Roboto, sans-serif" }}>
            EDUCATION 
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Learn about KW&SC's programs to educate students, citizens, and communities on water conservation, sanitation, and sustainable practices.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
      </section>

      {/* Educational Posts */}
      <section className="bg-[#020617] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {posts.map((post, i) => (
            <Fade key={i} direction="up" triggerOnce duration={800} delay={i * 150}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:flex-1">
                  <img src={post.image} alt={post.title} className="rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] w-full h-auto" />
                </div>
                <div className="md:flex-1">
                  <h3 className="text-3xl font-bold text-cyan-400 mb-4">{post.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{post.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01041b] text-cyan-400 py-12 text-center border-t border-cyan-600">
        <p>© 2025 Karachi Water & Sewerage Board (KW&SC). All rights reserved.</p>
      </footer>
    </>
  );
}
