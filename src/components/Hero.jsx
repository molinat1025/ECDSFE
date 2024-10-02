import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[777px] w-full"
      id="home"
    >
      <div className="relative max-w-[666px] top-44 xs:top-72">
        {/* <h4 className="flex items-baseline gap-x-2 uppercase text-secondary medium-18">
          MODERN COLLECTION <BsFire />
        </h4> */}
        <h2 className="h2 capitalize">be different</h2>
        <h2 className="h2 capitalize">be unique</h2>
        <h2 className="h2 capitalize">be deluxe</h2>
        <p className="border-l-4 border-secondary pl-3 my-2">
          Comienza a comprar...
        </p>
        {/* buttons */}
        <div className="flex items-center gap-x-4 mt-7">
          <a
            href={"#shop"}
            className="btn-secondary rounded-full flexCenter gap-x-2"
          >
            Ver Productos
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
