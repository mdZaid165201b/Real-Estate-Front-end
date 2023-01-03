import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import urlencode from "urlencode";

const WhatsappBtn = () => {
  return (
    <div className="fixed bottom-[25px] right-[20px]">
      <a
        href={`https://wa.me/923094100370?text=${urlencode.encode(
          "http://localhost:3000/properties/property-view/63b081c65e63588f83d2cd56"
        )}`}
        target="_blank"
      >
        <IoLogoWhatsapp
          size={60}
          className="text-[#25D366] hover:text-[#39a861]"
        />
      </a>
    </div>
  );
};

export default WhatsappBtn;
