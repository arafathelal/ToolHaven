import { use, useState } from "react";
import ProductCard from "./ProductCards";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);
  // const [carts, setCarts] = useState([]);

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;