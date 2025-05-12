import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import type { RootState, AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import "./product.css";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <p>Loading classes...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="product-cards">
      {items.map((prd) => (
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
  );
};

export default Product;
