import axios from "axios";
import { ProductCard } from "../../Products/components/ProductCard";
import { useEffect, useState } from "react";

export const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/featured_products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products]);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
