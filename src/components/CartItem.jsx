
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast"
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed successfully");
  }
  return (
    <div className="flex  justify-center items-center border-b-2 border-black  gap-x-5 gap-y-8 p-4">
      <div className="w-[188px]">
        <img src={item.image} alt="" className="w-full h-full" />

        </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-700 font-semibold text-lg text-left ">{item.title}</h1>
        <h1 className=" text-gray-600 font-medium  text-[13px] text-left">{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>
        <div className="flex justify-between items-center">
          <p className=" text-gray-400 font-normal text-[20px] text-left">${item.price}</p>
        <div onClick={removeFromCart} className="bg-red-300 w-10 h-10 items-center flex rounded-full">
        <MdDelete className="text-red-600 mx-auto text-2xl"/>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
