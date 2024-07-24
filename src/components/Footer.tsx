import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#062448] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row items-center">
          <img src="/iabtechlab_verified_seal_rgb-1.png" alt="Compliance Badge" className="h-[200px] mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col items-center md:items-start  md:ml-20">
            <a href="#" className="mb-1">why Tumblr ads?</a>
            <a href="#" className="mb-1">Tumblr ad policy</a>
            <a href="#" className="mb-1">advertise on Tumblr</a>
            <a href="#" className="mb-1">contact us</a>
            <a href="#">start your own Tumblr</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:justify-start md:items-end mt-4 md:mt-0 md:ml-20 md:mb-20">
          <a href="#" className="mb-1">Tumblr app</a>
          <a href="#" className="mb-1">Tumblr.com</a>
        </div>
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 md:ml-20 md:mb-28">
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6 ">
        <p>© Tumblr, Inc. Brought to you by Automattic</p>
      </div>
    </footer>
  );
};

export default Footer;

