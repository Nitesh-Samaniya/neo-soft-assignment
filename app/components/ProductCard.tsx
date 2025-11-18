"use client";

import React from "react";
import { TProduct } from "../types/product";

type Props = {
  product: TProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <article
      className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200"
      aria-labelledby={`product-${product.id}-title`}
      role="article"
    >
      <div className="w-full h-48 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2
          id={`product-${product.id}-title`}
          className="text-center font-semibold text-lg"
        >
          {product.title}
        </h2>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
          {product.description}
        </p>

        <p className="mt-3 text-center font-bold">₹{product.price}</p>
      </div>

      <div>
        <button
          className="cursor-pointer hover:text-red-600 w-full block text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-b-2xl"
          aria-label={`View more about ${product.title}`}
        >
          View More
        </button>
      </div>
    </article>
  );
}
