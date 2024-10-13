import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2";

const Order = () => {
  const { getTotalCartAmount, all_products, token, cartItems, setCartItems, url } =
    useContext(ShopContext);

    const [data, setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:"",
    })

    const navigate = useNavigate()

    const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //   console.log(data)
    // },[data])

    const placeOrder = async (event)=>{
      event.preventDefault();
      let orderItems = [];
      all_products.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });
      // console.log(orderItems)
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+0,
      }
      try {
        let response = await axios.post(url + "/api/order/place", orderData, {
          headers: { token },
        });
    
        if (response.data.success) {
          setCartItems({});
          // Mostrar alerta de éxito con SweetAlert2
          Swal.fire({
            icon: "success",
            title: "Orden registrada",
            text: "Su orden fue registrada satisfactoriamente.",
            showConfirmButton: false,  // No mostrar el botón de confirmación
            timer: 3000,  // La alerta desaparecerá después de 3 segundos
            willClose: () => {
              // Redirigir a la página de inicio después de que la alerta desaparezca
              window.scrollTo(0, 0);
              navigate("/"); 
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al registrar su orden. Inténtelo nuevamente.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al procesar su orden.",
        });
      }
    }


    useEffect(()=>{
      if(!token){
        navigate("/cart")
      }else if(getTotalCartAmount()===0){
        navigate(("/cart"))
      }
    })


  return (
    <section className="max-padd-container py-28 xl:py-32">
      <form onSubmit={placeOrder} className="flex flex-col xl:flex-row gap-20 xl:gap-28 ">
        {/* delivery information */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Información de Envío</h3>
          <div className="flex gap-3">
            <input
            required
              onChange={onChangeHandler}
              name="firstName"
              value={data.firstName}
              type="text"
              placeholder="Nombre"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
              type="text"
              placeholder="Apellido"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
          required
          onChange={onChangeHandler}
          name="email"
          value={data.email}
            type="email"
            placeholder="Correo"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={data.phone}
            type="text"
            placeholder="Teléfono"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
          required
          onChange={onChangeHandler}
          name="street"
          value={data.street}
            type="text"
            placeholder="Dirección"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <div className="flex gap-3">
            <input
            required
            onChange={onChangeHandler}
            name="city"
            value={data.city}
              type="text"
              placeholder="Municipio"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
            required
            onChange={onChangeHandler}
            name="state"
            value={data.state}
              type="text"
              placeholder="Departamento"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={data.zipcode}
              type="text"
              placeholder="Código Postal"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
            required
            onChange={onChangeHandler}
            name="country"
            value={data.country}
              type="text"
              placeholder="País"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
        </div>
        {/* cart total */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="bold-22">Resumen</h4>
            <div>
              <div className="flexBetween py-3">
                <h4 className="medium-16">Subtotal:</h4>
                <h4 className="text-gray-30 font-semibold">
                  Q{getTotalCartAmount()}
                </h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-16">Envío:</h4>
                <h4 className="text-gray-30 font-semibold">
                  Q{getTotalCartAmount() === 0 ? 0 : 0}
                </h4>
              </div>
              <hr />
              <div className="flexBetween py-3">
                <h4 className="medium-18">Total:</h4>
                <h4 className="bold-18">
                  Q{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 0}
                </h4>
              </div>
            </div>
            <button type="submit" className="btn-secondary w-52 rounded">
              Finalizar Orden
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Order;
