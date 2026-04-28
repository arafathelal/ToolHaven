import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111625] text-white py-16 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 tracking-wide text-white">
                            DigiTools
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs pr-4">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-normal mb-5 text-white">Product</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Features</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Templates</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-normal mb-5 text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-normal mb-5 text-white">Resources</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Documentation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Community</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-normal mb-5 text-white">Social Links</h3>
                        <div className="flex space-x-3">
                            {/* Insta */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#111625] hover:bg-gray-200 transition-colors" aria-label="Instagram">
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>
                            {/* Fb */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#111625] hover:bg-gray-200 transition-colors" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f text-lg"></i>
                            </a>
                            {/* X */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#111625] hover:bg-gray-200 transition-colors" aria-label="X">
                                <i className="fa-brands fa-x-twitter text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-[#2a3041] mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;