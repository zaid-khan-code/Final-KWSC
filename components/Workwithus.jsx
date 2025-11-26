"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Handshake, TrendingUp, Cpu } from "lucide-react";

export default function WorkWithUs() {
  // Inject subtle grid background
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .tech-grid-bg {
        background-image:
          linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px);
        background-size: 40px 40px;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sections = [
    {
      id: "licenses",
      icon: FileText,
      title: "Licensing & Permits",
      description: "Streamlined process for licenses, hydrants, and effluent discharge compliance.",
      cta: "Apply Now",
    },
    {
      id: "collaborations",
      icon: Handshake,
      title: "Collaborations",
      description: "National & international partnerships driving tech transfer and funding.",
      cta: "View Portfolio",
    },
    {
      id: "investment",
      icon: TrendingUp,
      title: "Investment Opportunities",
      description: "High-impact private sector opportunities in water & sewerage infrastructure.",
      cta: "Explore Models",
    },
    {
      id: "strategic",
      icon: Cpu,
      title: "Strategic Engagement",
      description: "Engage with KW&SC for regulatory, funding, and technology projects.",
      cta: "Contact Us",
    },
  ];

  return (
    <section className="relative bg-[#020617] text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 text-center max-w-3xl mx-auto mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-300 drop-shadow-lg"
        >
          Work With KW&SC
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-gray-300 text-lg font-light">
          Partner with us for licensing, investment, collaborations, and strategic projects shaping Karachi's water and sewerage systems.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
      >
        {sections.map((section, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-8 h-8 text-cyan-400 mr-3 p-1.5 bg-cyan-900/50 rounded-lg shadow-md shadow-cyan-500/20" />
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
            </div>
            <p className="text-gray-300 text-sm flex-1">{section.description}</p>
            <a
              href={`#${section.id}`}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-gray-900 font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {section.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
