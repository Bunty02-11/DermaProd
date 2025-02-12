"use client";
import Image from "next/image";

const FloatingIcon = () => {
  return (
    <div className="floating_icon_wrape">
      <a
        href={"https://wa.me/971509870036"}
        className="contact-pannel-btn text-decoration-none"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <figure>
          <Image
            src="/whatsapp1.webp"
            width={55}
            height={55}
            loading="lazy"
            alt="whatsapp"
          />
        </figure>
      </a>
    </div>
  );
};

export default FloatingIcon;
