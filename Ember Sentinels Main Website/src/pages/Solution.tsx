import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorFunctionalityDisplay from '../components/ColorFunctionalityDisplay';
import LayerExplorer from '../components/LayerExplorer';
import ComparisonTable from '../components/ComparisonTable';

const Solution: React.FC = () => {
  useEffect(() => {
    document.title = 'Solution | Ember Sentinels';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Detecting Fire Before It Spreads
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ember Sentinels use ultra-sensitive chemical and thermal materials to detect wildfire risk before flames appear. Our system is rooted in materials science, enabling early-warning capabilities that traditional systems cannot match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Ember Sentinels Work
            </h2>
            <p className="text-xl text-gray-700">
              Ember Sentinels are hexagonal, color-changing stickers engineered to react to environmental signals associated with early wildfire formation. They operate passively — no power, no electronics — yet provide reliable, real-time visual alerts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://i.imgur.com/Bn9raMZ.jpg" 
                alt="Ember Sentinel sticker" 
                className="rounded-xl shadow-lg hexagon overflow-hidden w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-amber-600" />
                  </span>
                  <div>
                    <p className="font-medium text-lg">Chemochromic Detection</p>
                    <p className="text-gray-600">Detects volatile organic compounds (VOCs) such as isoprene and α-pinene released from vegetation under heat stress or pre-combustion.</p>
                    <p className="text-sm text-gray-500 mt-1">Source: Maleknia, Bell, & Adams (2009)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-scarlet-100 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-scarlet-600" />
                  </span>
                  <div>
                    <p className="font-medium text-lg">Thermochromic Detection</p>
                    <p className="text-gray-600">Sense rises in ambient temperature, indicating an elevated ignition likelihood.</p>
                    <p className="text-sm text-gray-500 mt-1">Source: Reversible Thermochromic POSS-Metal Films (2021)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-forest-100 p-2 rounded-full mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-forest-600" />
                  </span>
                  <div>
                    <p className="font-medium text-lg">Visual Confirmation</p>
                    <p className="text-gray-600">Color transition communicates risk clearly:</p>
                    <p className="text-gray-700 font-medium mt-2">Green → Yellow → Orange → Red</p>
                    <p className="text-gray-600">Safe → Elevated → High → Critical</p>
                    <p className="text-gray-500 mt-2">Anyone — residents, firefighters, towers — can instantly identify elevated risk through color alone.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sentinel Network Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Sentinel Network
            </h2>
            <p className="text-xl text-gray-700">
              Digital Engineering Component
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 mb-8 text-center">
              Ember Sentinels integrate seamlessly into a lightweight digital monitoring network:
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-3">
                    <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">Sentinel Stickers</p>
                </div>
                <div className="text-gray-400 text-2xl">→</div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-3">
                    <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">Local Tower Node</p>
                </div>
                <div className="text-gray-400 text-2xl">→</div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full inline-block mb-3">
                    <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="font-medium">AI-Assisted Dashboard</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Sticker Layer</h4>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Primary detection</li>
                    <li>• Passive, chemical-based</li>
                    <li>• Visible to people + towers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Local Tower Node</h4>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Low-cost, stationary viewing point</li>
                    <li>• Periodically captures images of surrounding Sentinels</li>
                    <li>• Detects color clusters</li>
                    <li>• Sends signals upward to dashboard</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">AI Dashboard</h4>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Interprets color patterns</li>
                    <li>• Highlights clusters of elevated/critical Sentinels</li>
                    <li>• Tracks risk progression over time</li>
                    <li>• Helps agencies and residents visualize changing conditions</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-center italic">
              This keeps the system materials-science–first, while adding a clean, modern digital engineering pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Color Functionality Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Color Functionality
            </h2>
            <p className="text-xl text-gray-700">
              Ember Sentinels use color changes to communicate wildfire risk levels,
              from safe conditions to critical alerts.
            </p>
          </motion.div>

          <ColorFunctionalityDisplay />
        </div>
      </section>

      {/* Layer-by-Layer Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore the Sentinels Layer-by-Layer
            </h2>
            <p className="text-xl text-gray-700">
              Each Ember Sentinel sticker consists of three specialized layers, 
              working together to provide reliable wildfire detection.
            </p>
          </motion.div>

          <LayerExplorer />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Traditional vs. Proactive Detection
            </h2>
            <p className="text-xl text-gray-700">
              See how Ember Sentinels compare to traditional wildfire detection methods.
            </p>
          </motion.div>

          <ComparisonTable />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-scarlet-800 via-scarlet-700 to-ember-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Power of Ultra-Early Detection
            </h2>
            <p className="text-xl mb-8">
              Learn how Ember Sentinels protect communities through simple, science-driven wildfire prevention.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/problem" className="btn bg-white text-scarlet-700 hover:bg-gray-100">
                Understand the Problem
              </Link>
              <Link to="/documentation" className="btn border-2 border-white text-white hover:bg-white/10">
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solution;