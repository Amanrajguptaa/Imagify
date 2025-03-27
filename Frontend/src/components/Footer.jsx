import React from 'react';
import { Facebook, Twitter, Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-6 flex items-center justify-between">
      <div className="text-gray-400 text-md flex justify-center items-center gap-5">
      <img src="/assets/logo.svg" alt="logo"  className='border-r border-black pr-6'/>
        All right reserved. Copyright @imagify
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-3">
          <a href="#" className="text-gray-800 hover:text-black">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-800 hover:text-black">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;