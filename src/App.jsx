import { useState } from "react";
import Banner from "./component/Banner"
import NavBar from "./component/NavBar"
import Products from "./component/Products"
import Stats from "./component/Stats"
import Cart from "./component/Cart"
import { ToastContainer } from 'react-toastify'
import Steps from "./component/Steps";

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productPromise = getProducts()

function App() {

  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);


  return (
    <>
      <NavBar />
      <Banner />
      <Stats />
      {/* <Products productPromise={productPromise} /> */}
      <div className="text-center mb-12 pt-20">
        <h1 className="text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mt-6">
        <div className="bg-gray-100 rounded-full p-1 flex gap-2">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab === "products"
              ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow"
              : "text-gray-500"
              }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeTab === "cart"
              ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow"
              : "text-gray-500"
              }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "products" && (
        <Products productPromise={productPromise} carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}
      <Steps />
    </>
  )
}

export default App
