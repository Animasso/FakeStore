import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Rating } from "../components/Elements/Rating";
import { useTitle } from "../hook/useTitle";
import { useCart } from "../context";
import { getProduct } from "../services";
export const ProductDetail = () => {
  const { cartlist, addToCart, removeFromCart } = useCart();
  const [singleProduct, setSingleProduct] = useState({});
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();
  const {
    name,
    long_description,
    price,
    in_stock,
    best_seller,
    size,
    overview,
    rating,
    poster,
  } = singleProduct;
  useTitle(`${name}`);
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProduct(id);
      setSingleProduct(data);
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartlist.find((item) => item.id === singleProduct.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartlist, singleProduct.id]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={poster} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{price}</span>
            </p>
            <p className="my-3">
              <Rating rating={rating} />
            </p>
            <p className="my-4 select-none">
              {best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {size} MB
              </span>
            </p>
            <p className="my-3">
              {inCart ? (
                <button
                  onClick={() => removeFromCart(singleProduct)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                  disabled={singleProduct.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              ) : (
                <button
                  onClick={() => addToCart(singleProduct)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    !in_stock && "cursor-not-allowed"
                  }`}
                  disabled={!in_stock}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
