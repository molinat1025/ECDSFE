import React, { useState, useEffect } from "react";

const Offer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-11-30T23:59:59") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl max-padd-container my-8">
      <div className="flex items-center flex-col gap-1 mt-40 max-w-xl">
        <h3 className="uppercase medium-20">20% de descuento</h3>
        <h2 className="bold-44 uppercase">¡En toda la tienda!</h2>
        <span className="italic font-ace">la oferta finaliza en</span>
          <div className="flex gap-x-7 mt-2">
            <div className="bg-white p-2 rounded-lg">
              <span className="font-bold text-4xl">{timeLeft.days}</span>
              <span className="block">Días</span>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <span className="font-bold text-4xl">{timeLeft.hours}</span>
              <span className="block">Horas</span>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <span className="font-bold text-4xl">{timeLeft.minutes}</span>
              <span className="block">Minutos</span>
            </div>
            <div className="bg-white p-2 rounded-lg">
              <span className="font-bold text-4xl">{timeLeft.seconds}</span>
              <span className="block">Segundos</span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Offer;
