import React, { useState } from 'react';

const Result = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="w-full mt-16 mb-20">
      <div>
        <div className="max-w-sm mx-auto">
          <img
            src="/assets/sample_img_1.png" 
            alt="Generated result" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="bg-gray-500 flex items-center justify-between mt-14 max-w-2xl mx-auto rounded-4xl p-1">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe what you want to generate"
            className="pl-5 w-full mx-5 text-white 
              placeholder-white
              focus:outline-none 
              focus:ring-white/300"
          />
          <button 
            className="bg-black text-white px-18 py-3 rounded-4xl hover:bg-gray-800 transition-colors"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;