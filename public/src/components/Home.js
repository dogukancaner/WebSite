import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-bold'>Hoşgeldin. Ben </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Doğukan Caner
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Web Geliştirici.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Yeni teknolojileri araştırarak ve kullanarak kendimi yazılım alanında geliştiriyorum.
        </p>
        <div>
          <a href="#skills">
  <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           
            Yeteneklerim
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Home;