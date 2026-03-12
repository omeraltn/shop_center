import { useState } from "react";
import Category from "../components/home/category";
import Products from "../components/home/products";
import SliderComp from "../components/home/sliderComp";
import Sorting from "../components/home/sorting";

const Home = () => {
  const [sort, setSort] = useState(null);
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
