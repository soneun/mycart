import { useState } from "react";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import UseData from "../../Hook/UseData";

// //서버에서 가져오는 제품 데이터 객체(임시)
// const product = {
//   id: 1,
//   title: "상품 타이틀",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
//   price: 9900,
//   images: [
//     "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_2.jpg",
//     "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Coke.jpg",
//     "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Beverage_Cup_Lid_2.jpg",
//     "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Bottle_Poland_Spring.jpg",
//   ],
//   stock: 10,
// };

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams(); //주소 변수 id를 받음
  console.log(id);
  const { data: product, error, isLoading } = UseData(`products/${id}`);
  console.log(product);

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}
      {product._id && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000/products/${image}`}
                  alt={product.title}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            <img
              src={`http://localhost:5000/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>

          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">
              ￦ {product.price.toLocaleString("ko-KR")} 원
            </p>

            <h2 className="quantity_title">구매개수:</h2>
            <div className="align_center quantity_input">
              <QuantityInput />
            </div>

            <button className="search_button add_cart">장바구니 추가</button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;
