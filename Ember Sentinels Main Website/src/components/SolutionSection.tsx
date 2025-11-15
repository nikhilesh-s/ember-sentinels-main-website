import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            A SMARTER WAY TO DETECT WILDFIRES
          </h2>
          <p className="text-xl text-gray-700">
            Ember Sentinels use advanced color-changing technology to detect wildfire 
            indicators before flames even appear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://i.imgur.com/Bn9raMZ.jpg" 
              alt="Ember Sentinel in green state" 
              className="rounded-xl shadow-lg w-full h-auto hexagon overflow-hidden"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Our smart hexagonal stickers use two detection methods:
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <AlertCircle className="text-amber-600" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Chemochromic Detection</h4>
                  <p className="text-gray-600">
                    Detects volatile organic compounds (VOCs) like isoprene and α-pinene released
                    by stressed vegetation before a fire begins.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Source: Maleknia, Bell, & Adams, 2009
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-scarlet-100 p-3 rounded-full">
                    <Zap className="text-scarlet-600" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Thermochromic Detection</h4>
                  <p className="text-gray-600">
                    Senses temperature changes, indicating potential fire before flames are visible.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Source: Reversible Thermochromic POSS-Metal Films, 2021
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Shield className="text-forest-600" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Real-Time Alerts</h4>
                  <p className="text-gray-600">
                    Color changes are visible to both humans and automated monitoring systems,
                    enabling rapid response before fires spread.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-4">
            <Link to="/solution" className="btn btn-primary">
              Explore Our Solution
            </Link>
            <Link to="/ai-dashboard" className="btn btn-secondary">
              AI Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;