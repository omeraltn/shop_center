import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../rudex/cartSlice";
import CartComp from "../components/cart/cartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemsCount } = useSelector(
    (state) => state.carts,
  );
  console.log(carts, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="text-2xl font-extrabold flex items-center justify-end gap-2">
            Toplam Tutar :{" "}
            <span className="text-red-500 ">
              {" "}
              {totalAmount.toLocaleString("tr-TR")} $
            </span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş...</div>
      )}
    </div>
  );
};

export default Cart;
