import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UpperBar = () => {
  return (
    <section className="hidden sm:flex flex-wrap justify-between p-3 border-[#0fe95052] border-b-1 shadow-lg bg-white mx-auto">
      <div className="flex gap-8">
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-5 h-5" />
          <p>101 E 129th St, East Chicago, IN 46312, US</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-5 h-5" />
          <p>EderCoimbra@edercoimbra.com</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3 text-sm font-medium">
          <PhoneCall className="w-5 h-5" />
          <p>+1 (219) 588-1234</p>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <Link to={"#"}>
            <IoLogoInstagram />
          </Link>
          <Link>
            <FaWhatsapp />
          </Link>
          <Link>
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpperBar;
