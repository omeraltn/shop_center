import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../rudex/categorySlice";
import { DiBackbone } from "react-icons/di";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1  px-2 text-xl font-bold">Kategori</div>
      {categories?.map((category, key) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg  cursor-pointer hover:bg-gray-200 p-2 uppercase"
          key={key}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
