import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const Landing: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: '/slide1.jpg',
      title: 'Welcome to Kitabu.AI',
      subtitle: 'Your Personal AI Tutor 24/7',
      buttonText: 'Next'
    },
    {
      id: 2,
      image: '/slide2.jpg',
      title: 'Study Ahead of Everyone',
      subtitle: 'Boost Confidence and Curiosity',
      buttonText: 'Next'
    },
    {
      id: 3,
      image: '/slide3.jpg',
      title: 'Quiz Mania Challenge!',
      subtitle: 'Win Big Prizes in Various Games',
      buttonText: 'Next'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-400 to-orange-300">
      <div className="relative h-screen">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-md">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full object-cover mb-4 rounded-lg"
                  />
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">
                      <span className="text-black">{slide.title.split('Kitabu')[0]}</span>
                      {slide.title.includes('Kitabu') && (
                        <>
                          <span className="text-black">Kitabu</span>
                          <span className="text-green-500">.AI</span>
                        </>
                      )}
                    </h1>
                    <p className="text-blue-600 mb-4">{slide.subtitle}</p>
                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-4">
                      {slide.buttonText}
                    </button>
                  </div>
                  <Link
                    to="/signup"
                    className="block w-full text-center bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};