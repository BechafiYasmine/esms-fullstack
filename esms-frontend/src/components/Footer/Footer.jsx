import React from "react";
import {
  Youtube,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Lightbulb,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", color: "#F41824" },
    { icon: Facebook, label: "Facebook", color: "#0EF9FD" },
    { icon: Linkedin, label: "LinkedIn", color: "#E9DB3A" },
    { icon: Instagram, label: "Instagram", color: "#F41824" },
    { icon: Twitter, label: "Twitter", color: "#0EF9FD" },
  ];

  return (
    <footer className=" py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Still Have Questions */}
        <p className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-10 sm:mb-14 lg:mb-16 tracking-wide">
          STILL HAVE A QUESTIONS ABOUT
        </p>

        {/* Logo and Brand Name */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-14 lg:mb-16">
          {/* Club Logo */}
          <div className="relative">
            <div className="">
              <img src="../../public/logo.png" alt="logo"  width={200} className=" rounded-full"/>
            </div>
          </div>

          {/* Hack Escape Text */}
          <div className="text-left">
            <h2
              className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
              style={{
                color: "#E9DB3A",
                letterSpacing: "0.05em",
              }}
            >
              Hack
            </h2>
            <h2
              className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight"
              style={{
                color: "#E9DB3A",
                letterSpacing: "0.05em",
              }}
            >
              Escape
            </h2>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-3">
            CONTACT US
          </h3>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            by email{" "}
            <a
              href="mailto:cse@esi.dz"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "#0EF9FD" }}
            >
              cse@esi.dz
            </a>{" "}
            or on social media
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 lg:gap-8 flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
              aria-label={social.label}
            >
              <social.icon
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black"
                strokeWidth={2}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}