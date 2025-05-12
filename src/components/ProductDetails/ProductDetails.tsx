import { useEffect } from "react";
import "./productDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import {
  fetchProducts,
  selectProductBySlug,
} from "../../redux/slices/productSlice";
import Button from "../Button/Button";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.products.items);
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  const prd = useSelector((state: RootState) =>
    slug ? selectProductBySlug(state, slug) : null
  );

  useEffect(() => {
    if (!prd) {
      dispatch(fetchProducts());
    }
  }, [dispatch, prd]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!prd) return <p>Class not found</p>;
  return (
    <div className="product-details">
      <div className="product-details-card">
        <div className="product-images">
          <img className="main-product-image" src={prd.image} alt="" />
        </div>
        <div className="product-info">
          <h3>{prd.name}</h3>
          <div className="product-prices">
            {prd.oldPrice ? (
              <span className="old-price">${prd.oldPrice} USD</span>
            ) : (
              ""
            )}
            <span>${prd.price} USD</span>
          </div>
          <p>{prd.description}</p>
          <hr />

          {prd.sizes && (
            <div className="product-sizes">
              <label htmlFor="size">Select Size</label>
              <select
                id="size"
                name="size"
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {prd.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          <Button
            name="ADD TO CART"
            style="black-button"
            onClick={() => {
              dispatch(
                addToCart({
                  ...prd,
                  quantity: 1,
                  selectedSize: selectedSize || prd.sizes?.[0] || undefined,
                })
              );
            }}
          />
        </div>
      </div>
      <div className="more-products">
        <div className="more-product-title">
          <h2>More Products</h2>
          <div>
            <Button
              name="BROWSE PRODUCTS"
              style="black-button"
              to={"/product"}
            />
          </div>
        </div>
        <div className="product-cards">
          {items
            .filter((prd) => prd.slug !== slug)
            .map((prd) => (
              <div
                onClick={() => navigate(`/product/${prd.slug}`)}
                data-aos="fade-up"
                className="product-card"
                key={prd.id}
              >
                <img src={prd.image} alt={prd.name} />
                <h3>{prd.name}</h3>
                <p>{prd.description}</p>
                <hr />
                <div className="product-price">${prd.price} USD</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
