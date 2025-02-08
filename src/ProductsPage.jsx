import React, { useState, useRef, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import Header from "./Header";
import ProductsList from "./ProductsList";

const GET_PRODUCTS = gql`
  query GetImages($first: Int, $after: String, $title: String) {
    images(first: $first, after: $after, title: $title) {
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
  const { loading, error, data, fetchMore, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      first: 12,
    },
  });

  const loaderRef = useRef(null);

  const searchByTitle = (title) => {
    refetch({
      title,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (
        entry.isIntersecting &&
        !loading &&
        data?.images.pageInfo.hasNextPage
      ) {
        fetchMore({
          variables: {
            after: data.images.pageInfo.endCursor,
          },
        });
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, data, fetchMore]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <p>{searchQuery}</p>
      <Header searchQuery={searchQuery} search={searchByTitle} />
      <ProductsList products={data.images.edges} />
      <div ref={loaderRef}></div>
    </div>
  );
};

export default ProductsPage;
