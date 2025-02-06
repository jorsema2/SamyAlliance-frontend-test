import React from "react";

const Product = () => {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <div>28.00€</div>
      <img src="https://via.placeholder.com/150" />
      <div>
        <button>Like</button>
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
