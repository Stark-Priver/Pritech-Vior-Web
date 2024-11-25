import React, { useState } from "react";
import { Tilt } from "react-tilt"; // Use named export

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      id: "facebook",
      icon: "fab fa-facebook-f",
      url: "#",
      details: "Facebook: PritechVior",
    },
    {
      id: "twitter",
      icon: "fab fa-twitter",
      url: "#",
      details: "Twitter: @PritechVior",
    },
    {
      id: "instagram",
      icon: "fab fa-instagram",
      url: "#",
      details: "Instagram: @PritechVior",
    },
    {
      id: "linkedin",
      icon: "fab fa-linkedin-in",
      url: "#",
      details: "LinkedIn: PritechVior",
    },
  ];

  return (
    <footer className="w-full bg-primary py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="text-white text-center sm:text-left">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Pritech Vior. All rights reserved.
          </p>
          <p className="text-sm text-secondary mt-1">
            Designed with creativity and passion.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex mt-4 sm:mt-0 gap-6 relative">
          {socialLinks.map((link) => (
            <Tilt
              key={link.id}
              className="relative"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              onMouseEnter={() => setHoveredIcon(link.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <a
                href={link.url}
                className="text-secondary hover:text-white text-[18px] flex justify-center items-center"
              >
                <i className={link.icon}></i>
              </a>

              {hoveredIcon === link.id && (
                <div className="absolute top-[-70px] left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 text-white rounded-xl shadow-xl transform transition-all duration-300 z-10">
                  <p className="text-sm font-medium">{link.details}</p>
                </div>
              )}
            </Tilt>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
