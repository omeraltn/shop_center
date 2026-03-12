import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-100  p-3 mb-2 mx-2 border rounded-md cursor-pointer hover:scale-105 transition duration-500 hover:shadow-black-400 hover:shadow-2xl relative "
    >
      <div className="text-2xl absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price} <span className="text-sm">$</span>
      </div>
      <img
        className="w-50 h-50 object-cover m-auto "
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 line-clamp-1 text-xl font-bold ">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
