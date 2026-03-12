import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../rudex/productSlice";
import DetailComp from "../components/detail/detailComp";
import Loading from "../components/loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.products,
  );
  console.log(productDetail);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
