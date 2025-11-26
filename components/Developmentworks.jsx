"use client";
import React from "react";

export default function KWSCInfoSections() {
  const developmentWorks = [
    "Expansion of water supply network in Karachi",
    "Construction and rehabilitation of sewerage systems",
    "Installation of smart meters and automated billing",
    "Upgradation of water treatment and filtration plants",
    "Online tanker booking and emergency water supply services",
  ];

  const rightToInformation = [
    "Access KW&SC policies and regulations",
    "Submit complaints and requests under RTI",
    "Track status of requests and applications",
    "Download public reports and notifications",
    "Digital transparency for governance and operations",
  ];

  return (
    <div className="bg-gray-50">
      {/* Development Works Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Development Works
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            KW&SC is continuously implementing development projects to ensure safe, reliable, and sustainable water supply and sewerage services across Karachi.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600 text-base md:text-lg text-left md:text-left mx-auto max-w-xl">
            {developmentWorks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Right to Information Section */}
      <section className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Right to Information
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Citizens have the right to access information regarding KW&SC operations, policies, and services. Transparency ensures accountability and informed decision-making.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600 text-base md:text-lg text-left md:text-left mx-auto max-w-xl">
            {rightToInformation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a
            href="https://www.kwsc.gos.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold text-lg hover:bg-cyan-600 transition-all"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
