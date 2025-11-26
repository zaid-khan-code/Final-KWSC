import React from "react";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";

// Social media data
const social_links = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/kwscofficial", color: "text-blue-700 hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/kwscofficial", color: "text-sky-600 hover:text-sky-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/kwsc", color: "text-blue-800 hover:text-blue-600" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@kwscofficial", color: "text-red-700 hover:text-red-500" },
];

const footer_data = {
  email: "info@kwsc.gos.pk",
  phone: "(+92) 021 111 597 200",
  location: "9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350, Pakistan",
  footer_info:
    "Karachi Water and Sewerage Corporation (KW&SC) is committed to providing reliable water and sewerage services to Karachi, ensuring clean water and efficient sewerage management for all residents.",
};

const CopyRight = () => (
    <p className="text-gray-500 text-sm font-montserrat">
        &copy; {new Date().getFullYear()} KW&SC. All Rights Reserved.
    </p>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-20 font-montserrat relative overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img
                src={"/kwsc logo.png"}
                width={150}
                height={150}
                alt="KW&SC Logo"
                className="mb-6 object-contain h-24 w-auto"
              />
              <p className="mb-6 text-gray-600 leading-relaxed text-base">
                {footer_data.footer_info}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-normal mb-6 border-l-4 border-cyan-500 pl-3">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                    {footer_data.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-500 flex-shrink-0" size={20} />
                <a href={`tel:${footer_data.phone.replace(/[\s\(\)]/g, '')}`} className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                    {footer_data.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-500 flex-shrink-0" size={20} />
                <a href={`mailto:${footer_data.email}`} className="text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                    {footer_data.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-normal mb-6 border-l-4 border-cyan-500 pl-3">Quick Navigation</h3>
            <div className="space-y-3">
              {[
                { label: "About Us", href: "/aboutus" },
                { label: "What We Do", href: "/ourservices" },
                { label: "Our Projects", href: "/portfolio" },
                { label: "Careers", href: "/careers" },
                { label: "News & Updates", href: "/news" },
                { label: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <a key={index} href={item.href} className="block text-gray-600 hover:text-blue-600 transition-colors text-base font-normal group">
                    <span className="group-hover:translate-x-1 transition-transform inline-block text-cyan-500">→</span> {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & External Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-normal mb-6 border-l-4 border-cyan-500 pl-3">Stay Connected</h3>
            
            <div className="flex space-x-4 mb-8">
              {social_links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`p-3 rounded-full bg-white transition-all duration-300 border border-gray-300 hover:bg-gray-100 ${link.color}`}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>

            <h4 className="text-lg font-normal mb-4">Official Portals</h4>
            <div className="space-y-3">
                {[
                    { label: "Online Complaint System", href: "https://complain.kwsc.gos.pk" },
                    { label: "Tanker Booking System", href: "https://campaign.kwsc.gos.pk/" },
                    { label: "Sindh Government Portal", href: "https://www.sindh.gov.pk/" },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-500 hover:text-blue-600 transition-colors text-sm font-normal flex items-center gap-2"
                    >
                        {item.label} <ExternalLink size={14} className="flex-shrink-0" />
                    </a>
                ))}
            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 py-8 text-center">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
