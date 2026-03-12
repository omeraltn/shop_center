import { useDispatch } from "react-redux";
import { removeFromCart } from "../../rudex/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between  hover:border-black hover:shadow-2xl hover:scale-101 transition duration-1000 mt-5 border-b cursor-pointer border-black p-2 hover:border-2 ">
      <img className="w-37.5 h-37.5 object-cover" src={cart?.image} alt="" />
      <div>
        <div className="max-w-[15ch] font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="flex flex-col text-center w-25!">
        <span className="text-xl font-extrabold text-red-500 underline ">
          Fiyat
        </span>
        {cart?.price} $
        <span className="text-xl font-extrabold text-red-500 underline">
          {" "}
          Adet{" "}
        </span>{" "}
        <span className="">{cart?.quantity}</span>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="cursor-pointer bg-red-500 text-white text-2xl hover:scale-95 transition duration-500 rounded-md hover:brightness-50 w-50 h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
