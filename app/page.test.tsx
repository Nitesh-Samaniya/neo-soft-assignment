import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./page";

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "Classic Leather Bag",
    description: "Handy everyday leather bag with roomy interior.",
    image: "/images/products/bag.jpg",
    price: 2499,
  },
  {
    id: 2,
    title: "Sport Running Shoes",
    description: "Lightweight shoes built for comfort and speed.",
    image: "/images/products/shoes.jpg",
    price: 3999,
  },
];

describe("Home Page", () => {
  beforeEach(() => {
    // Mock global fetch
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => mockProducts,
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading initially", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders product cards after fetch", async () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    );

    // Wait for products to appear
    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(screen.getByText(`₹${product.price}`)).toBeInTheDocument();
      });
    });

    // Check buttons
    const buttons = screen.getAllByRole("button", { name: /View more about/i });
    expect(buttons.length).toBe(mockProducts.length);
  });
});
