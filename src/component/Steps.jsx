import React from 'react';

const Steps = () => {
  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Create Account */}
          <div className="bg-white rounded-2xl p-10 relative flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100/60">
            <div className="absolute top-6 right-6 bg-[#6934e5] text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold">
              01
            </div>
            <div className="w-24 h-24 bg-[#f4e6f9] rounded-full flex items-center justify-center mb-8">
              <img src="/user.png" alt="Create Account icon" className="w-10 h-10 object-contain"/>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Create Account
            </h3>
            <p className="text-slate-500 leading-relaxed text-base">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2: Choose Products */}
          <div className="bg-white rounded-2xl p-10 relative flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100/60">
            <div className="absolute top-6 right-6 bg-[#6934e5] text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold">
              02
            </div>
            <div className="w-24 h-24 bg-[#f4e6f9] rounded-full flex items-center justify-center mb-8">
              <img src="/package.png" alt="Choose Products icon" className="w-10 h-10 object-contain"/>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Choose Products
            </h3>
            <p className="text-slate-500 leading-relaxed text-base">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3: Start Creating */}
          <div className="bg-white rounded-2xl p-10 relative flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100/60">
            <div className="absolute top-6 right-6 bg-[#6934e5] text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold">
              03
            </div>
            <div className="w-24 h-24 bg-[#f4e6f9] rounded-full flex items-center justify-center mb-8">
              <img src="/rocket.png" alt="Start Creating icon" className="w-10 h-10 object-contain"/>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Start Creating
            </h3>
            <p className="text-slate-500 leading-relaxed text-base">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;