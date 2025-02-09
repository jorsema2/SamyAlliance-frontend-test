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
    <article className="product">
      <div className="price-tag">
        <p>{product.price}.00€</p>
      </div>
      <img src={product.picture} alt={product.title} className="image" />
      <div className="interaction-buttons-container">
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
          <div className="button-content-container">
            <div className="like-icon">{product.liked ? <FaHeart /> : <FaRegHeart />}</div>
            <div>{product.likesCount}</div>
          </div>
        </button>
        <button aria-label="Send this product to someone">
          <div className="button-content-container">
            <div>
              <BiSend />
            </div>
            <div>0</div>
          </div>
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
