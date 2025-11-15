import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayerInfo {
  title: string;
  material: string;
  function: string;
  technicalExplanation: string;
  imageSrc: string;
}

const LayerExplorer: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('top');

  const layerData: Record<string, LayerInfo> = {
    top: {
      title: 'Top Layer — Active Detection Film',
      material: 'Chemochromic + thermochromic pigments',
      function: 'Reacts to environmental changes',
      technicalExplanation: 'UV-resistant formulation ensures long-term stability',
      imageSrc: 'https://i.imgur.com/Bn9raMZ.jpg'
    },
    middle: {
      title: 'Middle Layer — Contrast Layer',
      material: 'Deep black backing to enhance visibility',
      function: 'Provides visual contrast for color changes',
      technicalExplanation: 'The contrast layer ensures maximum visibility of color changes across all lighting conditions and viewing angles.',
      imageSrc: 'https://i.imgur.com/zvQBkWA.jpg'
    },
    bottom: {
      title: 'Bottom Layer — Reflective Substrate',
      material: 'White reflective layer for maximum color contrast outdoors',
      function: 'Enhances visibility and provides weatherproof adhesive',
      technicalExplanation: 'Weatherproof, high-durability outdoor adhesive ensures long-term attachment. Laser-etched alphanumeric ID for dashboard tracking.',
      imageSrc: 'https://i.imgur.com/jHkPNFv.jpg'
    }
  };

  const buttonVariants = {
    selected: { scale: 1.05, backgroundColor: '#C53030', color: '#FFFFFF' },
    unselected: { scale: 1, backgroundColor: '#FFFFFF', color: '#C53030' }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4 text-center">Explore the Sentinels Layer-by-Layer</h3>
        <p className="text-gray-600 text-center mb-6">
          Select a layer to see detailed information
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Left side - Layer buttons */}
          <div className="lg:col-span-1 flex lg:flex-col justify-center items-center gap-4">
            <motion.button
              variants={buttonVariants}
              animate={selectedLayer === 'top' ? 'selected' : 'unselected'}
              whileHover={{ scale: selectedLayer === 'top' ? 1.05 : 1.03 }}
              onClick={() => setSelectedLayer('top')}
              className="px-4 py-3 rounded-lg shadow-md border border-scarlet-600 font-medium transition-colors"
            >
              Top Layer
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              animate={selectedLayer === 'middle' ? 'selected' : 'unselected'}
              whileHover={{ scale: selectedLayer === 'middle' ? 1.05 : 1.03 }}
              onClick={() => setSelectedLayer('middle')}
              className="px-4 py-3 rounded-lg shadow-md border border-scarlet-600 font-medium transition-colors"
            >
              Middle Layer
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              animate={selectedLayer === 'bottom' ? 'selected' : 'unselected'}
              whileHover={{ scale: selectedLayer === 'bottom' ? 1.05 : 1.03 }}
              onClick={() => setSelectedLayer('bottom')}
              className="px-4 py-3 rounded-lg shadow-md border border-scarlet-600 font-medium transition-colors"
            >
              Bottom Layer
            </motion.button>
          </div>

          {/* Center - Exploded view */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Exploded view - Bottom Layer */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: selectedLayer === 'bottom' ? 1 : 0.5,
                  y: selectedLayer === 'bottom' ? 0 : 40,
                  scale: selectedLayer === 'bottom' ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full hexagon overflow-hidden">
                  <img
                    src="https://i.imgur.com/jHkPNFv.jpg"
                    alt="Adhesive Layer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Exploded view - Middle Layer */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: selectedLayer === 'middle' ? 1 : 0.5,
                  y: selectedLayer === 'middle' ? 0 : selectedLayer === 'bottom' ? 20 : -20,
                  scale: selectedLayer === 'middle' ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full hexagon overflow-hidden">
                  <img
                    src="https://i.imgur.com/zvQBkWA.jpg"
                    alt="Substrate Layer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Exploded view - Top Layer */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: selectedLayer === 'top' ? 1 : 0.5,
                  y: selectedLayer === 'top' ? 0 : -40,
                  scale: selectedLayer === 'top' ? 1.1 : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full hexagon overflow-hidden">
                  <img
                    src="https://i.imgur.com/Bn9raMZ.jpg"
                    alt="Top Layer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Full exploded view */}
              <motion.div
                className="absolute inset-0 opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
              >
                <div className="w-full h-full hexagon overflow-hidden">
                  <img
                    src="https://i.imgur.com/PR49SDm.jpg"
                    alt="Exploded View"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - Layer details */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold mb-4 text-scarlet-600">
                  {layerData[selectedLayer].title}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-1">Material:</h5>
                    <p className="text-gray-700">{layerData[selectedLayer].material}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-1">Function:</h5>
                    <p className="text-gray-700">{layerData[selectedLayer].function}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-1">Technical Details:</h5>
                    <p className="text-gray-700">{layerData[selectedLayer].technicalExplanation}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerExplorer;