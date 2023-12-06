import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import items from './data'


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector('.slider');

    function activate(e) {
      const items = document.querySelectorAll('.item');
      e.target.matches('.next') && handleNext(items);
      e.target.matches('.prev') && handlePrev(items);
    }

    document.addEventListener('click', activate, false);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', activate, false);
    };
  }, [activeIndex]);

  const handleNext = (items) => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = (items) => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="flex">
      <main className="w-full relative flex">
        <ul className="slider overflow-hidden flex-none">
          {items.map((item, index) => (
            <li
              key={index}
              className={`item bg-cover bg-center h-screen relative transition-transform transform ${
                index === activeIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                backgroundImage: `url('${item.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end w-1/3">
          <IonIcon className="btn prev text-5xl text-black cursor-pointer" name="arrow-back-outline" onClick={() => handlePrev(items)} />
          <IonIcon className="btn next text-2xl text-white cursor-pointer" name="arrow-forward-outline" onClick={() => handleNext(items)} />
        </div>
      </main>
    </div>
  );
};

export default Home;
