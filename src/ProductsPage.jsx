import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Header from "./Header";
import ProductsList from "./ProductsList";

const GET_PRODUCTS = gql`
  query GetImages {
    images {
      edges {
        node {
          id
          title
          picture
          price
          liked
          author
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState(
    "You're looking for something?"
  );
  // const [products, setProducts] = useState();
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return (
    <div>
      <p>{searchQuery}</p>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductsList products={data.images.edges} />
    </div>
  );
};

export default ProductsPage;
