import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.node.id} product={product.node} />
      ))}
    </div>
  );
};

export default ProductsList;
