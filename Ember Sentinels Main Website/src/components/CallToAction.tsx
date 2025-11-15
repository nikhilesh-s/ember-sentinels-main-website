import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
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
            Experience the Power of Early Detection
          </h2>
          <p className="text-xl mb-8">
            Join the revolution in wildfire protection. Learn how Ember Sentinels can help
            safeguard your community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solution" className="btn bg-white text-scarlet-700 hover:bg-gray-100">
              Explore Our Solution
            </Link>
            <Link
              to="/ai-dashboard"
              className="btn border-2 border-white text-white hover:bg-white/10"
            >
              AI Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;