import LinkWithIcon from "../Navbar/LinkWithIcon";
import "./ProductsSidebar.css";
import { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";
import UseData from "../../Hook/UseData";

const ProductsSidebar = () => {
  const { data: categories, error } = UseData("category"); //category는 주소

  return (
    <aside className="products_sidebar">
      <h2>카테고리</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              key={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
