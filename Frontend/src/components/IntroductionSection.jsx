import React from 'react';

const IntroductionSection = () => {
  return (
    <div className='my-20'>
      <div className="text-center py-4">
        <h1 className="text-center text-4xl font-medium mb-3">Create AI Images</h1>
        <p className="text-gray-600 mt-2">Turn your imagination into visuals ✨</p>
      </div>
      <div className="flex items-center py-10">
        <div className="w-1/2 pr-12">
          <img 
            src="/assets/sample_img_1.png" 
            alt="AI-powered monster chef with birthday cake"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2 h-full">
          <h2 className="text-4xl mb-8 text-gray-800">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 text-md mb-3 leading-relaxed">
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className="text-gray-600 text-md mb-3 leading-relaxed">
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;