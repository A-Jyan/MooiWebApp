import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { DataContext } from "../../context/DataProvider";
import "./Products.css";

const Products = () => {
  const { products } = useContext(DataContext);
  const navigate = useNavigate();


  return (
    <div className="products__container">
      <div className="products__products-container">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            isNew={product.isNew}
            onClick={() => navigate(`/productos/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export { Products };
