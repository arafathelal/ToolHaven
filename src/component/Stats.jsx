const Stats = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#6725f4] to-[#b824f5] py-16 px-6 flex justify-center font-sans">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 md:gap-0">
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-2">
            50K+
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-normal">
            Active Users
          </p>
        </div>
        <div className="hidden md:block h-20 w-[1px] bg-white/20"></div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-2">
            200+
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-normal">
            Premium Tools
          </p>
        </div>
        <div className="hidden md:block h-20 w-[1px] bg-white/20"></div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-2">
            4.9
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-normal">
            Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;