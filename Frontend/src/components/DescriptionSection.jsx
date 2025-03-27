import React from 'react';

const DescriptionSection = () => {
  return (
    <div className="w-full my-20">
      <h2 className="text-center text-4xl font-medium mb-3">How it works</h2>
      <p className="text-center text-[#6B7280] text-base mb-10">Transform Words Into Stunning Images 🌠</p>
      
      <div className="space-y-6">

        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center flex justify-start items-center gap-10 px-10">
          <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div className='flex flex-col justify-start items-start'>
          <h3 className="text-xl font-semibold mb-2.5">Describe Your Vision</h3>
          <p className="text-[#6B7280] text-base">"Type a phrase, sentence, or paragraph that describes the image you want to create."</p>
          </div>
        </div>
        
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center flex justify-start items-center gap-10 px-10">
          <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" x2="21" y1="14" y2="3"></line>
            </svg>
          </div>
          <div className='flex flex-col justify-start items-start'>
          <h3 className="text-xl font-semibold mb-2.5">Watch the Magic</h3>
          <p className="text-[#6B7280] text-base">"Our AI-powered engine will transform your text into a high-quality, unique image in seconds."</p>
          </div>
        </div>
        
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center flex justify-start items-center gap-10 px-10">
          <div className="w-12 h-12 bg-[#F3F4F6] rounded-full flex items-center justify-center ">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
          </div>
          <div className='flex flex-col justify-start items-start'>

          <h3 className="text-xl font-semibold mb-2.5">Download & Share</h3>
          <p className="text-[#6B7280] text-base">"Instantly download your creation or share it with the world directly from our platform."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;