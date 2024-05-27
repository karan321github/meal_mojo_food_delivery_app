import React from 'react';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(your-image-url)' }}>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-6xl text-white font-bold">Karan's Restaurant Finder</h1>
      </div>
    </div>
  );
};

export default HomePage;
