import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "/assets/profile_img_1.png",
      name: "Donald Jackman",
      role: "Graphic Designer",
      stars: 5,
      feedback: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
    },
    {
      image: "/assets/profile_img_2.png",
      name: "Richard Nelson",
      role: "Content Creator", 
      stars: 5,
      feedback: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
    },
    {
      image: "/assets/profile_img_1.png",
      name: "James Washington",
      role: "Co-Founder",
      stars: 5,
      feedback: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-xl ${index < count ? 'text-red-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-center text-4xl font-medium mb-3">Customer testimonials</h2>
        <p className="text-gray-500 mt-2">What Our Users Are Saying 🗣️</p>
      </div>
      
      <div className="flex items-center justify-between w-full">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="w-80 text-center border rounded-lg p-6 shadow-lg bg-white"
          >
            <div className="flex justify-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full"
              />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {testimonial.name}
            </h3>
            
            <p className="text-gray-500 mb-2">{testimonial.role}</p>
            
            <div className="flex justify-center mb-4 flex justify-center items-center gap-2">
              {renderStars(testimonial.stars)}
            </div>
            
            <p className="text-gray-600 text-sm">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>

        <div className='mt-12 flex flex-col justify-center items-center space-y-5'>
            <p className='text-3xl'>
            See the magic. Try now
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
          Generate Images ✨
        </button>
        </div>

    </div>
  );
};

export default TestimonialSection;