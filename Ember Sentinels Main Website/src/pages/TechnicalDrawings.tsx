import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TechnicalDrawings: React.FC = () => {
  useEffect(() => {
    document.title = 'Technical Drawings | Ember Sentinels';
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
              Technical Drawings
            </h1>
            <p className="text-xl text-gray-300">
              Visual schematics and design specifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Design Drawings Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 text-center">
              This section includes sticker exploded diagrams, layer-by-layer renders, network architecture diagrams, ID encoding systems, and VOC/thermal trigger thresholds.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.imgur.com/IKfcnAU.png"
                alt="Technical Design Drawing - Page 1"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.imgur.com/kPYMmMQ.png"
                alt="Technical Design Drawing - Page 2"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.imgur.com/gbjqi2G.png"
                alt="Technical Design Drawing - Page 3"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.imgur.com/qIozFf4.png"
                alt="Technical Design Drawing - Page 4"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalDrawings;
