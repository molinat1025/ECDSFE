import React, { useContext } from "react";
import { FaStar, FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import { LuMoveUpRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ProductMd = (props) => {
  const { product } = props;
  const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
      {/* left side */}
      <div className="flex gap-x-2 xl:flex-1 py-5 justify-center lg:justify-start">
        <div className="max-h-[400px] w-full sm:w-auto flex">
          <img
            src={url + "/images/" + product.image}
            alt="bigImg"
            className="rounded-xl bg-white object-cover"
          />
        </div>
      </div>
      {/* right side */}
      <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl min-h-[300px]">
        <h4 className="bold-28">{product.name}</h4>
        <div className="flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-5">
          <div>Q{product.price}.00</div>
          <div className="flex items-start gap-x-1 medium-16 text-secondary">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(223)</p>
          </div>
        </div>
        <div className="flex gap-4 mb-8 max-w-[555px] flex-wrap mt-5">
          <button className="btn-secondary rounded-sm !px-4">
            <FaHeart />
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="btn-dark rounded-sm sm:!px-20 !py-2 flexCenter gap-x-2"
          >
            Ir al carrito
            <LuMoveUpRight className="text-xl" />
          </button>
          {!cartItems[product._id] ? (
            <FaPlus
              onClick={() => addToCart(product._id)}
              className=" bg-tertiary text-white rounded-sm h-[38px] w-[38px] p-2 cursor-pointer"
            />
          ) : (
            <div className="bg-tertiary text-white rounded-sm flexCenter gap-2">
              <FaMinus
                onClick={() => removeFromCart(product._id)}
                className="h-8 w-8 p-2 cursor-pointer"
              />
              <p className="text-white pr-2 w-3">{cartItems[product._id]}</p>
              <FaPlus
                onClick={() => addToCart(product._id)}
                className="rounded-sm bg-secondary h-8 w-8 p-1 mr-1 cursor-pointer"
              />
            </div>
          )}
        </div>
        <p>
          <span className="medium-16 text-tertiary">Categoría:</span> {product.category}
        </p>
        <p>
          <span className="medium-16 text-tertiary">Etiquetas:</span> Nuevo ingreso
        </p>
        {/* Descripción del producto */}
        <div className="mt-4">
          <h4 className="medium-16 text-tertiary">Descripción:</h4>
          <p className="text-sm">{product.description}</p> {/* Renderiza la descripción */}
        </div>
      </div>
    </section>
  );
};

export default ProductMd;
