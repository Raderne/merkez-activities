import { useGSAP } from "@gsap/react";
import ActivityCard from "./ActivityCard";
import gsap from "gsap";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const Activities = () => {
  useGSAP(() => {
    gsap.from("#title", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen gap-y-8 lg:gap-y-14 pt-8">
      <div
        className="w-full text-center flex items-center justify-center"
        id="title"
      >
        <img
          src={logo}
          alt="logo"
          className=" w-16 bg-white rounded-full logo ml-4 shadow-md"
        />
        <h1 className="text-3xl lg:text-6xl font-serif flex-1">
          Etkinliklerimiz
        </h1>
      </div>

      <div className="w-full min-h-0.5 bg-slate-500"></div>

      <div className="w-full pb-10 lg:px-24 px-10 flex flex-col items-center space-y-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <ActivityCard key={index} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
