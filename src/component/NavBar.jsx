const NavBar = () => {
  return (
    <div className="navbar bg-white px-10 py-3">
      
      <div className="navbar-start">
        <div className="text-[26px] font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-[15px] font-medium text-gray-700 gap-10">
          <li><a className="hover:text-purple-600 transition">Products</a></li>
          <li><a className="hover:text-purple-600 transition">Features</a></li>
          <li><a className="hover:text-purple-600 transition">Pricing</a></li>
          <li><a className="hover:text-purple-600 transition">Testimonials</a></li>
          <li><a className="hover:text-purple-600 transition">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-6">
        
        <img src="/shopping-cart.png" alt="cart" className="w-[18px] h-[18px] cursor-pointer opacity-80 hover:opacity-100 transition"/>

        <a className="btn text-[15px] font-medium text-gray-700 hover:text-purple-600 transition">
          Login
        </a>

        <a className=" btn bg-purple-600 text-white text-[14px] font-semibold px-5 py-2 rounded-full hover:bg-purple-700 transition">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;