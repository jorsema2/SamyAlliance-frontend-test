import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Header from "./Header";
import ProductsList from "./ProductsList";

const GET_PRODUCTS = gql`
  query GetImages($first: Int, $after: String) {
    images(first: $first, after: $after) {
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
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      first: 12,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <p>{searchQuery}</p>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductsList products={data.images.edges} />
      <button
        onClick={() => {
          fetchMore({
            variables: {
              after: data.images.pageInfo.endCursor,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              return {
                images: {
                  ...fetchMoreResult.images,
                  edges: [
                    ...prev.images.edges,
                    ...fetchMoreResult.images.edges,
                  ],
                },
              };
            },
          });
        }}
      >
        Fetch more
      </button>
    </div>
  );
};

export default ProductsPage;
