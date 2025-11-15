import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ColorInfo {
  title: string;
  description: string;
  technicalExplanation: string;
  visualRepresentation: string;
  realWorldExample: string;
  source?: string;
}

const ColorFunctionalityDisplay: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('green');

  const colorData: Record<string, ColorInfo> = {
    green: {
      title: 'Normal (Green)',
      description: 'Stable environment; no detected risk',
      technicalExplanation: 'VOCs and temperature below thresholds',
      visualRepresentation: 'Sticker appears as a clean, green hexagon.',
      realWorldExample: 'A sticker on a tree in a healthy forest shows green, indicating no immediate threat.'
    },
    yellow: {
      title: 'Elevated (Yellow)',
      description: 'Minor vegetation stress',
      technicalExplanation: 'Early VOC rise',
      visualRepresentation: 'Sticker glows yellow, signaling caution.',
      realWorldExample: 'A sticker on a tree in a dry, heat-exposed area starts turning yellow.',
      source: 'Maleknia, Bell, & Adams, 2009'
    },
    orange: {
      title: 'High (Orange)',
      description: 'Significant heat + VOC emissions',
      technicalExplanation: 'Clear indication of pre-ignition conditions',
      visualRepresentation: 'Sticker changes to orange, glowing more intensely.',
      realWorldExample: 'A sticker in a dry forest area during a heatwave starts turning orange.'
    },
    red: {
      title: 'Critical (Red)',
      description: 'Severe thermal/chemical signals',
      technicalExplanation: 'Immediate hazard; notify authorities',
      visualRepresentation: 'Sticker turns bright red, pulsing with a faint glow.',
      realWorldExample: 'A sticker near a heat source or in a dry forest facing direct sunlight rapidly turns red.'
    },
    blue: {
      title: 'High Humidity - Reduced Fire Risk',
      description: 'Elevated humidity detected, which may reduce fire risk.',
      technicalExplanation: 'Hygroscopic materials detect high moisture in the air, reducing flammability.',
      visualRepresentation: 'Sticker turns blue, indicating a safe, moisture-rich environment.',
      realWorldExample: 'A sticker in a wet, foggy area turns blue, indicating low fire risk.'
    }
  };

  const colorImages: Record<string, string> = {
    green: 'https://i.imgur.com/Bn9raMZ.jpg',
    yellow: 'https://i.imgur.com/7Qs7fah.jpg',
    orange: 'https://i.imgur.com/eCoQh1s.jpg',
    red: 'https://i.imgur.com/RLe0aWq.jpg',
    blue: 'https://i.imgur.com/g6lysRR.jpg'
  };

  const colorClasses: Record<string, { bg: string, text: string, border: string }> = {
    green: { bg: 'bg-forest-500', text: 'text-forest-500', border: 'border-forest-500' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
    orange: { bg: 'bg-ember-500', text: 'text-ember-500', border: 'border-ember-500' },
    red: { bg: 'bg-scarlet-600', text: 'text-scarlet-600', border: 'border-scarlet-600' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4 text-center">Color Functionality Display</h3>
        <p className="text-gray-600 text-center mb-6">
          Click on a color to see what it indicates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Left side - Image display */}
        <div className="flex justify-center items-center">
          <motion.div 
            className="w-64 h-64 hexagon overflow-hidden shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            key={selectedColor}
          >
            <img 
              src={colorImages[selectedColor]} 
              alt={`Ember Sentinel in ${selectedColor} state`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right side - Color information */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedColor}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h4 className={`text-xl font-semibold mb-4 ${colorClasses[selectedColor].text}`}>
                {colorData[selectedColor].title}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-1">Description:</h5>
                  <p className="text-gray-700">{colorData[selectedColor].description}</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Technical Explanation:</h5>
                  <p className="text-gray-700">{colorData[selectedColor].technicalExplanation}</p>
                  {colorData[selectedColor].source && (
                    <p className="text-sm text-gray-500 mt-1">Source: {colorData[selectedColor].source}</p>
                  )}
                </div>
                
                <div>
                  <h5 className="font-medium mb-1">Real-World Example:</h5>
                  <p className="text-gray-700">{colorData[selectedColor].realWorldExample}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Color selection buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.keys(colorData).map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-12 h-12 hexagon ${colorClasses[color].bg} 
                  transition-transform duration-200 ${selectedColor === color ? 'scale-110 ring-2 ring-gray-800' : 'hover:scale-105'}`}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorFunctionalityDisplay;