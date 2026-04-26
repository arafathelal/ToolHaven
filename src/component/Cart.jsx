import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    setCarts(carts.filter((c) => c.id !== item.id));
    toast.success("Item removed!");
  };

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <img src={item.icon} className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item)}
                  className="text-pink-500 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 text-lg font-semibold">
            <span className="text-gray-500">Total:</span>
            <span>${totalPrice}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;