import React from "react";
import { gql, useMutation } from "@apollo/client";
import Product from "./Product";

export const LIKE_IMAGE = gql`
  mutation LikeImage($input: LikeImageInput!) {
    likeImage(input: $input) {
      image {
        id
        liked
        likesCount
      }
    }
  }
`;

const ProductContainer = ({ product }) => {
  const [likeImage, { data, loading, error }] = useMutation(LIKE_IMAGE);

  return <Product product={product} likeProduct={likeImage} />;
};

export default ProductContainer;
