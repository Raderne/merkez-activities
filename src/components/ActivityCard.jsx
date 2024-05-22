/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import image from "../assets/Logo-bg.jpeg";
import gsap from "gsap";
import { useRef } from "react";

const ActivityCard = ({ index }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5 * index,
    });
  }, []);

  return (
    <div
      className="max-md:relative w-full bg-slate-300 rounded-lg overflow-hidden flex max-md:flex-col lg:h-60 border border-zinc-300 shadow-md"
      ref={cardRef}
    >
      <div className="lg:w-1/3 max-md:absolute max-md:top-0 max-md:left-0 flex items-center justify-center max-md:h-full z-10">
        <img
          src={image}
          alt="image"
          className="object-cover h-full object-center w-full"
        />
      </div>

      <div className="max-md:hidden w-0.5 h-full bg-slate-400"></div>

      <div className="flex-1 max-md:px-4 max-md:py-8 max-md:h-full max-md:space-y-4 lg:p-10 bg-zinc-200 max-md:bg-slate-600 max-md:opacity-75 z-50 flex flex-col lg:justify-between max-md:text-white">
        <h1 className="text-2xl">Etkinlik Adı</h1>
        <p className="text-lg">Etkinlik Açıklaması</p>
        <p>Kontj / date time</p>
        <p>Saloun isim</p>
      </div>

      <div className="h-full max-md:h-10 flex items-center justify-center z-50 bg-orange-600 hover:bg-orange-300 transition duration-300 ease-in-out">
        <a
          href="#"
          className="h-full flex items-center justify-center w-full text-white font-bold font-mono px-2 hover:text-black transition duration-300 ease-in-out"
        >
          Rezervasyon
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
