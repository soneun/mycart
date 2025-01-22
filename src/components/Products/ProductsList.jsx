import ProductCard from "./ProductCard";
import "./ProductsList.css";
import apiClient from "../../utils/api-client";
import { useEffect, useState } from "react";
import useData from "../../Hook/UseData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams(); //요청 주소 뒤의 쿼리스트링
  const category = search.get("category"); //category=값 을 가져옴
  const { data, error, isLoading } = useData(
    "products",
    {
      params: {
        category,
      },
    },
    [category]
  ); //products는 주소
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   apiClient
  //     .get("/products")
  //     .then((res) => setProducts(res.data.products))
  //     .catch((err) => setError(err));
  // }, []);
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>상품목록</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">정렬방법</option>
          <option value="price desc">가격높은순</option>
          <option value="price asc">가격낮은순</option>
          <option value="rate desc">평점높은순</option>
          <option value="rate asc">평점낮은순</option>
        </select>
      </header>

      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}

        {data.products &&
          data.products.map((p) => (
            <ProductCard
              key={p._id}
              id={p._id}
              image={p.images[0]}
              price={p.price}
              rating={p.rating}
              ratingCounts={p.reviews.counts}
              stock={p.stock}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductsList;
