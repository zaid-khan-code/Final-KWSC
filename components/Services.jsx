"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";

export default function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: () => setLoading(false) });
    loaderTimeline
      .fromTo(".loader", { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.5, ease: "power2.inOut" })
      .to(".loader", { scaleY: 0, transformOrigin: "0% -100%", duration: 0.5, ease: "power2.inOut" })
      .to(".wrapper", { y: "-100%", ease: "power4.inOut", duration: 1 }, "-=0.8");
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* Corporate Section Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg md:text-xl">
            KW&SC provides essential services to the citizens of Karachi, ensuring efficient water supply, sewerage management, and digital accessibility.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Complaint Management */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Complaint Management</h2>
              <p className="text-gray-600">
                Citizens can register complaints regarding water supply issues, sewerage problems, or service disruptions. KW&SC ensures timely tracking and resolution of all complaints.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Register complaints online or via helpline</li>
                <li>Track status of registered complaints</li>
                <li>Timely resolution and escalation management</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Citizen Support</h3>
              <p className="text-gray-600 mb-2">Dedicated team for resolving complaints efficiently and maintaining service quality.</p>
            </div>
          </div>

          

          {/* Online Water Tanker Booking */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Online Tanker Booking</h2>
              <p className="text-gray-600">Book water tankers online for residential or commercial needs. KW&SC manages scheduling, delivery, and ensures timely supply.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Online booking portal for citizens</li>
                <li>Flexible delivery schedules</li>
                <li>Real-time tracking of tankers</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tanker Services</h3>
              <p className="text-gray-600 mb-2">Efficient management and monitoring of water tanker deliveries across the city.</p>
            </div>
          </div>

          {/* New Connections */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">New Connection Services</h2>
            <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Water & Sewerage Connections</h3>
                <p className="text-gray-600 mb-2">Apply for new connections or modifications online. KW&SC streamlines approvals, installation, and activation.</p>
                <a href="https://www.kwsc.gos.pk/assets/documents/Connection-Guideline-RRG.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Connection Guidelines
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficient Approvals</h3>
                <p className="text-gray-600">Fast processing of applications for residential and commercial connections to ensure uninterrupted service.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
