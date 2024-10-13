import React from 'react';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id='contact' className="bg-tertiary max-padd-container text-white py-12 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
           <Link to={"/"} className="bold-24 mb-4">
            <h3>Deluxe<span className='text-secondary'>Shop</span></h3>
          </Link>
          <p className="text-center md:text-left">Deluxe Shop es tu tienda única para lo último en moda y más. Te ofrecemos productos de alta calidad a precios inigualables.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Accesos Rápidos</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li><a href="/" className="hover:text-secondary">Inicio</a></li>
            <li><a href="/#categories" className="hover:text-secondary">Categoría</a></li>
            <li><a href="/" className="hover:text-secondary">Compra</a></li>
            <li><a href="/" className="hover:text-secondary">Contactanos</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg mb-4">Contáctanos</h4>
          <p>Correo: <a href="mailto:support@fusionmart.com" className="hover:text-secondary">contact@deluxeshop.com</a></p>
          <p>Teléfono: <a href="tel:+1234567890" className="hover:text-secondary">+502 2456 7890</a></p>
          <p>Dirección: Zona 4 de Mixco, Guatemala</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <SocialIcons />
        <hr className="h-[1px] w-full max-w-screen-md my-4 border-white" />
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} DeluxeShop | Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
