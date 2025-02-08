import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import "@testing-library/jest-dom";

const mockProduct = {
  id: "1",
  title: "Shutter Island",
  price: 100,
  picture: "https://example.com/image.jpg",
  author: "Martin Scorsese",
  liked: false,
  likesCount: 10,
};

describe("Product", () => {
  it("shows title and author", () => {
    render(<Product product={mockProduct} />);

    expect(screen.getByText("Shutter Island")).toBeInTheDocument();
    expect(screen.getByText("Martin Scorsese")).toBeInTheDocument();
  });
});
