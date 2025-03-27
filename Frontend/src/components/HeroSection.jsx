import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 mb-20">
      <div className="max-w-2xl w-full">
        <div className="inline-block bg-gray-200 text-blue-600 px-3 py-3 rounded-full text-sm mb-4">
          Best text to image generator ⭐
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl mb-6">
          Turn <span className="text-blue-600">text</span> to image, in seconds.
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          Unleash your creativity with AI. Turn your imagination into visual art in 
          seconds – just type, and watch the magic happen.
        </p>
        
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
          Generate Images ✨
        </button>
      </div>

        <div className='mt-10'>
            <div className='flex justify-center items-center gap-7 '>
                <img src="/assets/sample_img_2.png" className='w-28 h-28 rounded-md' alt="image" />
                <img src="/assets/sample_img_1.png" className='w-28 h-28 rounded-md' alt="image" />
                <img src="/assets/sample_img_2.png" className='w-28 h-28 rounded-md' alt="image" />
                <img src="/assets/sample_img_1.png" className='w-28 h-28 rounded-md' alt="image" />
                <img src="/assets/sample_img_2.png" className='w-28 h-28 rounded-md' alt="image" />
            </div>
            <p className='mt-4'>Generated images from Imagify</p>
        </div>

    </div>
  );
};

export default HeroSection;