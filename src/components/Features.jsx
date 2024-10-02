import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbPackageImport } from "react-icons/tb";


const Features = () => {
  return (
    <section className="max-padd-container bg-primary mt-16 xl:mt-18 py-8 rounded-xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flexCenter gap-x-4">
          <LiaShippingFastSolid className="text-4xl"/>
          <div>
            <h5 className="medium-18">Envío gratis</h5>
            <p>En ordenes arriba de Q350</p>  
          </div>
        </div>
        <div className="flexCenter gap-x-4">
          <MdCurrencyExchange className="text-4xl"/>
          <div>
            <h5 className="medium-18">Métodos de Pago</h5>
            <p>Transferencia y Tarjeta</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4">
          <TbPackageImport className="text-4xl"/>
          <div>
            <h5 className="medium-18">Entrega Inmediata</h5>
            <p>En la Ciudad de Guatemala</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
