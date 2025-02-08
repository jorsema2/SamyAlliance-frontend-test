import React from "react";
import ProductContainer from "./ProductContainer";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductContainer key={product.node.id} product={product.node} />
      ))}
    </div>
  );
};

export default ProductsList;
