import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { describe, it, expect } from "vitest";

// Sample product data
const product = {
  id: 1,
  title: "Classic Leather Bag",
  description: "Handy everyday leather bag with roomy interior.",
  image: "/images/products/bag.jpg",
  price: 2499,
};

describe("ProductCard", () => {
  it("renders the product title, description, and price", () => {
    render(<ProductCard product={product} />);

    // Title
    const title = screen.getByText(product.title);
    expect(title).toBeInTheDocument();

    // Description
    const description = screen.getByText(product.description);
    expect(description).toBeInTheDocument();

    // Price
    const price = screen.getByText(`₹${product.price}`);
    expect(price).toBeInTheDocument();
  });

  it("renders the product image with correct src and alt", () => {
    render(<ProductCard product={product} />);

    const image = screen.getByRole("img", { name: product.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", product.image);
    expect(image).toHaveAttribute("alt", product.title);
  });

  it("renders the 'View More' button with correct label", () => {
    render(<ProductCard product={product} />);

    const button = screen.getByRole("button", {
      name: `View more about ${product.title}`,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("View More");
  });

  it("has correct aria-labelledby on the article", () => {
    render(<ProductCard product={product} />);

    const article = screen.getByRole("article");
    expect(article).toHaveAttribute(
      "aria-labelledby",
      `product-${product.id}-title`
    );
  });
});
