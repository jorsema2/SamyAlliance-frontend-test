import React from "react";
import { gql } from "@apollo/client";
import { BiSend } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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

const Product = ({ product, likeProduct }) => {
  return (
    <article
      style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}
    >
      <p>{product.price}.00€</p>
      <img src={product.picture} alt={product.title} />
      <div>
        <button
          onClick={() =>
            likeProduct({
              variables: {
                input: {
                  imageId: product.id,
                },
              },
            })
          }
          aria-label={`Like this product. Currently ${
            product.liked ? "liked" : "unliked"
          }`}
        >
          {product.liked ? <FaHeart /> : <FaRegHeart />} {product.likesCount}
        </button>
        <button aria-label="Send this product to someone">
          <BiSend /> 0
        </button>
      </div>
      <div>
        <p>{product.title}</p>
        by <span>{product.author}</span>
      </div>
    </article>
  );
};

export default Product;
