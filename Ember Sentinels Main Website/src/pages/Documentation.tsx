import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  useEffect(() => {
    document.title = 'Documentation | Ember Sentinels';
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
              Ember Sentinels Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the full research foundation behind Ember Sentinels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Documentation Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 text-center mb-8">
              This documentation summarizes the engineering, research, and materials-science principles behind the Ember Sentinels wildfire detection system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Link to="/documentation/research">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 bg-scarlet-600 text-white">
                  <div className="flex items-center">
                    <FileText className="mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Research Paper</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">Complete research documentation and technical analysis</p>
                </div>
              </motion.div>
            </Link>

            <Link to="/documentation/technical-drawings">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-6 bg-scarlet-600 text-white">
                  <div className="flex items-center">
                    <FileText className="mr-3" size={24} />
                    <h3 className="text-xl font-semibold">Technical Drawings</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">Visual schematics and design specifications</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;