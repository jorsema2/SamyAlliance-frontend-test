import React from "react";
import { gql, useMutation } from "@apollo/client";

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

const Product = ({ product }) => {
  const [likeImage, { data, loading, error }] = useMutation(LIKE_IMAGE);

  return (
    <article
      style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}
    >
      <p>{product.price}.00€</p>
      <img src={product.picture} alt={product.title} />
      <div>
        <button
          onClick={() =>
            likeImage({
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
          {product.liked ? "❤️" : "♡"} {product.likesCount}
        </button>
        <button aria-label="Send this product to someone">Send</button>
      </div>
      <div>
        <p>{product.title}</p>
        by <span>{product.author}</span>
      </div>
    </article>
  );
};

export default Product;
