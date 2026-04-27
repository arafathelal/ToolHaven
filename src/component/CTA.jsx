const CTA = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 py-20 px-6 text-center text-white">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready To Transform Your Workflow?
      </h2>

      <p className="max-w-2xl mx-auto text-sm md:text-base opacity-90 mb-8">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        
        <button
          onClick={() => scrollToSection("products")}
          className="px-6 py-3 rounded-full bg-white text-purple-600 font-medium hover:opacity-90 transition"
        >
          Explore Products
        </button>

        <button
          onClick={() => scrollToSection("pricing")}
          className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-purple-600 transition"
        >
          View Pricing
        </button>

      </div>

      <p className="text-sm opacity-80">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default CTA;