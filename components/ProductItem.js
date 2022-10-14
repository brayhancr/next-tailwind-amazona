/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card group relative">
      <Link href={`/product/${product.slug}`}>
        <a className="group-hover:opacity-75">
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2 text-gray-500">{product.brand}</p>
        <p className="text-md font-semibold">${product.price}</p>
        <button
          className="primary-button mt-2 w-full"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
