import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<string>('green');
  
  const colorImages = {
    green: 'https://i.imgur.com/Bn9raMZ.jpg',
    orange: 'https://i.imgur.com/eCoQh1s.jpg',
    yellow: 'https://i.imgur.com/7Qs7fah.jpg',
    red: 'https://i.imgur.com/RLe0aWq.jpg',
    blue: 'https://i.imgur.com/g6lysRR.jpg'
  };

  const colorSequence = ['green', 'orange', 'yellow', 'red', 'blue'];

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colorSequence.length;
      setCurrentColor(colorSequence[currentIndex]);
    }, 2750);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90 z-0"></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ember Sentinels: Revolutionizing Wildfire Detection
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Ultra-Early Wildfire Detection Through Materials Science
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg max-w-xl">
              Wildfires are becoming more frequent, more intense, and more destructive. 
              Ember Sentinels provide a smarter, faster way to detect wildfires before they 
              spread, protecting communities and saving lives.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/solution" className="btn btn-primary">
                Explore Our Solution
              </Link>
              <Link to="/ai-dashboard" className="btn btn-secondary">
                AI Dashboard
              </Link>
              <Link to="/problem" className="btn btn-secondary">
                Learn About The Problem
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 hexagon overflow-hidden bg-white">
              <motion.img 
                src={colorImages[currentColor]}
                alt={`Ember Sentinel ${currentColor} state`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={currentColor}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;