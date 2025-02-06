import React, { useState } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState(
    "You're looking for something?"
  );
  const [products, setProducts] = useState();

  return (
    <div>
      <p>{searchQuery}</p>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
