import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (carts.find((item) => item.id === product.id)) return toast.error("Item already in cart!");
    setIsAdded(true);
    setCarts([...carts, product]);
    toast.success("Item added to cart!");
  };

  const tagStyles = {
    popular: "bg-purple-100 text-purple-600",
    new: "bg-green-100 text-green-600",
    "best seller": "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col justify-between transition shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
      
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={product.icon} alt={product.name} className="w-6 h-6" />
        </div>

        {product.tag && (
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${tagStyles[product.tag] || "bg-gray-100 text-gray-600"}`}>
            {product.tag}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-gray-800 mb-4">
          ${product.price}
          <span className="text-sm text-gray-500 font-normal ml-1">/{product.period}</span>
        </p>

        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleAddToCart}
        className={`mt-auto py-2 rounded-full text-white font-medium transition ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
        }`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;