import { Play } from "lucide-react";
import {CircleDot } from "lucide-react"
const Banner = () => {
  return (
    <section className="bg-gray-50 px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        <div>
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-purple-600 text-sm px-4 py-1 rounded-full mb-6">
            <CircleDot size={14} />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-[42px] md:text-[52px] font-black text-gray-800 leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore Products
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-5 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
            <Play size={18}/>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/banner.png" alt="banner" className="rounded-xl shadow-sm max-w-full h-auto"/>
        </div>

      </div>
    </section>
  );
};

export default Banner;