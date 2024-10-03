import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import { useState } from "react";
import  {NavLink}  from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));

  },[cart])
  return (

    <div className="flex ">{
      
      cart.length > 0 ?
      (
        <div className="flex max-w-6xl mx-auto  gap-x-24 ">


          <div className="w-[50%]">
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemsIndex={index}/>
              })
            }
          </div>

          <div className="flex flex-col gap-y-48 ">
            <div className="flex flex-col mt-10">
              <div className="text-xl text-green-800 font-bold">
                Your Cart
              </div>
              <div className="text-3xl text-green-800 uppercase font-extrabold">
                Summary
              </div>
              <p className="text-2xl font-bold">
                <span>Total Items:{cart.length}</span>
              </p>
            </div>

            <div className="">
              <p className="text-xl">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="bg-green-800 text-white font-bold uppercase p-3 rounded-md mt-3 ">Checkout Now</button>
            </div>

          </div>
        </div>
      )
      :
      (<div>
        <h1>Cart is Empty</h1>
        <NavLink to={"/"}>
        <button>Shop Now</button>
        </NavLink>
      </div>)
      }

    </div>

  );
};

export default Cart;
