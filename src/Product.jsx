import React, { useState } from "react";

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <div>28.00€</div>
      <img src="https://via.placeholder.com/150" />
      <div>
        <button onClick={() => setIsLiked(!isLiked)}>
          Like {isLiked ? 1 : 0}
        </button>
        <button>Send</button>
      </div>
      <div>
        <h4>Cool Hat</h4>
        by <span>Stylefresh</span>
      </div>
    </div>
  );
};

export default Product;
