"use client";
import React, { useEffect, useState, useRef } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import Link from "next/link";
import { Globe, MoveRight } from "lucide-react";

import GetYourBillPopup from "@/components/GetYourBill";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("en");
  const [chatOpen, setChatOpen] = useState(false);
  const [showBillPopup, setShowBillPopup] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I am KWSC Assistant. How can I help you today?" },
  ]);

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });
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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { from: "user", text: inputText }]);
    setInputText("");

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Thank you for your message. Our team will get back to you shortly." },
      ]);
    }, 1000);
  };

  const floatAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <div className="bg-[#020617] min-h-[100vh] font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative">
      {loading && <Loader />}

      <section
        className="relative min-h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover bg-center text-white flex flex-col items-center justify-start overflow-hidden px-6 pt-32"
      >
        {/* Language Toggle */}
        <div className="absolute top-5 right-5 z-[50]">
          <button
            onClick={() => setLanguage(prev => (prev === "en" ? "ur" : "en"))}
            className="px-3 py-1 rounded-md border border-cyan-400/30 bg-white/10 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
          >
            {language === "en" ? "اردو" : "English"}
          </button>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/50 z-0"></div>
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.05)1px,transparent 1px),linear-gradient(to_bottom,rgba(6,182,212,0.05)1px,transparent 1px)] bg-[length:40px_40px] opacity-15 z-0 pointer-events-none"
        ></div>

        {/* Top Buttons */}
        <div className="relative z-[20] flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/NewConnectionPage"
            className="px-5 py-2.5 rounded-md border border-cyan-400/30 bg-white/5 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
          >
            New Connection
          </Link>

          <Link
            href="/EComplaintPage"
            className="px-5 py-2.5 rounded-md border border-cyan-400/30 bg-white/5 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
          >
            E-Complaint
          </Link>

          {/* Book Tanker Page */}
          <Link
            href="/BookTankerPage"
            className="px-5 py-2.5 rounded-md border border-cyan-400/30 bg-white/5 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
          >
            Book Tanker
          </Link>

          {/* Get Your Bill Popup */}
          <button
            onClick={() => setShowBillPopup(true)}
            className="px-5 py-2.5 rounded-md border border-cyan-400/30 bg-white/5 text-cyan-300 text-sm font-medium backdrop-blur-sm hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
          >
            Get Your Bill
          </button>
        </div>

        {/* Get Your Bill Popup */}
        <GetYourBillPopup
          open={showBillPopup}
          onClose={() => setShowBillPopup(false)}
        />

        {/* Glass Panel */}
        <div
          className="relative z-[30] w-full max-w-3xl mx-auto p-10 rounded-3xl
            bg-white/5 backdrop-blur-sm border border-white/5 ring-1 ring-white/10
            flex flex-col items-center text-center shadow-lg"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
            bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-6">
            <Globe className="w-4 h-4" />
            <span>KARACHI WATER & SEWERAGE CORPORATION</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            COMMITTED TO DELIVER
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Ensuring a reliable, clean water supply and modern sewerage services across Karachi — focused on integrity, sustainability, and public trust.
          </p>

          <div className="mt-8">
            <Link
              href="/aboutus"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-white/10
                bg-white/5 hover:bg-white/10 backdrop-blur-sm font-semibold text-white transition-all duration-200"
            >
              <span className="whitespace-nowrap">Learn About KW&amp;SC</span>
              <MoveRight size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>

        {/* CHAT BOT */}
        <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-center">
          <button
            onClick={() => setChatOpen(prev => !prev)}
            style={floatAnimation}
            className="w-24 h-24 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:scale-110"
            title="Chat with KWSC Assistant"
          >
            <img
              src="/Ai_Bot.png"
              alt="KWSC Assistant"
              className="w-full h-full object-cover"
            />
          </button>

          {chatOpen && (
            <div className="mt-3 w-96 bg-gray-100 rounded-2xl border border-gray-300 shadow-2xl flex flex-col overflow-hidden animate-slide-in">
              <div className="px-4 py-3 bg-gray-200 text-gray-800 font-semibold flex justify-between items-center border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="/Ai_Bot.png" alt="KWSC Assistant" className="w-full h-full object-cover" />
                  </div>
                  <span>KWSC Assistant</span>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-gray-600 font-bold text-lg">&times;</button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-2 max-h-80 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-xs break-words ${
                        msg.from === "bot"
                          ? "bg-gray-300 text-gray-900"
                          : "bg-cyan-500 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="px-4 py-3 border-t border-gray-300 flex items-center gap-2 bg-gray-200">
                <input
                  type="text"
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-200"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>
      </section>
    </div>
  );
}
