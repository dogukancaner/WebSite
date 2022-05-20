import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Hakkımda
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Merhaba. Ben Doğukan CANER, tanıştığımıza memnun oldum. Sayfamı rahatlıkla inceleyebilirsin.</p>
            </div>
            <div>
              <p>Yazılım hata ayıklama, tasarım ve test konularında bilgi sahibi bir Yönetim Bilişim Sistemleri Bölümü öğrencisiyim. Yeni teknolojileri araştırıp hızlıca öğrenip uygulayan güçlü bir takım oyuncusuyum.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;