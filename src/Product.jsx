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
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <div>{product.price}.00€</div>
      <img src={product.picture} />
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
        >
          {product.liked ? "❤️" : "♡"} {product.likesCount}
        </button>
        <button>Send</button>
      </div>
      <div>
        <h4>{product.title}</h4>
        by <span>{product.author}</span>
      </div>
    </div>
  );
};

export default Product;
