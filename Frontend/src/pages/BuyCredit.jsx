import React from 'react';

const BuyCredit = () => {
  const plans = [
    {
      tier: "Basic",
      description: "Best for personal use.",
      price: "10",
      credits: "100",
    },
    {
      tier: "Advanced",
      description: "Best for business use.",
      price: "50",
      credits: "500",
    },
    {
      tier: "Business",
      description: "Best for enterprise use.",
      price: "250",
      credits: "5000",
    }
  ];
  
  return (
    <div className="mb-32 mt-10">
      <div className="flex justify-center mb-8">
        <div className="inline-block px-6 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
          OUR PLANS
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-12">Choose the plan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg p-10 shadow-md flex flex-col items-center space-y-6">
              <img src="/assets/logo_icon.svg" alt="" />
            
            <h3 className="text-lg font-medium mb-1">{plan.tier}</h3>
            <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-sm text-gray-500 ml-1">/{plan.credits} credits</span>
            </div>
            
            <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;