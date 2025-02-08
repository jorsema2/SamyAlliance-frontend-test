import React, { useState } from "react";

const Product = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.liked);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <div>{product.price}.00€</div>
      <img src={product.picture} />
      <div>
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? "❤️" : "♡"} {product.likesCount}
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
