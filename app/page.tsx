"use client";

import { useEffect, useState } from "react";
import { TProduct } from "./types/product";
import ProductCard from "./components/ProductCard";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const [productData, setProductData] = useState<TProduct[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  async function fetchProductsData() {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }
  return (
    <div
      className={`p-5 min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 border-white/50"
          : "bg-gray-100 border-gray-200"
      } border-b`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {productData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
