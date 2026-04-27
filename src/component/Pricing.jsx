const Pricing = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 mt-3">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* First Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Starter</h3>
                        <p className="text-gray-500 mb-6">Perfect for getting started</p>

                        <div className="text-4xl font-bold text-gray-800 mb-6">
                            $0 <span className="text-lg text-gray-500 font-normal">/Month</span>
                        </div>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✔ Access to 10 free tools</li>
                            <li>✔ Basic templates</li>
                            <li>✔ Community support</li>
                            <li>✔ 1 project per month</li>
                        </ul>
                    </div>

                    <button className="mt-auto py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500">
                        Get Started Free
                    </button>
                </div>

                {/* Pro  */}
                <div className="relative rounded-2xl p-8 flex flex-col justify-between text-white bg-gradient-to-b from-purple-600 to-pink-500 shadow-lg">

                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 text-xs px-4 py-1 rounded-full font-medium">
                        Most Popular
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Pro</h3>
                        <p className="opacity-90 mb-6">Best for professionals</p>

                        <div className="text-4xl font-bold mb-6">
                            $29 <span className="text-lg font-normal opacity-90">/Month</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li>✔ Access to all premium tools</li>
                            <li>✔ Unlimited templates</li>
                            <li>✔ Priority support</li>
                            <li>✔ Unlimited projects</li>
                            <li>✔ Cloud sync</li>
                            <li>✔ Advanced analytics</li>
                        </ul>
                    </div>

                    <button className="mt-auto py-3 rounded-full font-medium bg-white text-purple-600">
                        Start Pro Trial
                    </button>
                </div>

                {/* 3rd card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Enterprise</h3>
                        <p className="text-gray-500 mb-6">For teams and businesses</p>

                        <div className="text-4xl font-bold text-gray-800 mb-6">
                            $99 <span className="text-lg text-gray-500 font-normal">/Month</span>
                        </div>

                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>✔ Everything in Pro</li>
                            <li>✔ Team collaboration</li>
                            <li>✔ Custom integrations</li>
                            <li>✔ Dedicated support</li>
                            <li>✔ SLA guarantee</li>
                            <li>✔ Custom branding</li>
                        </ul>
                    </div>

                    <button className="mt-auto py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;