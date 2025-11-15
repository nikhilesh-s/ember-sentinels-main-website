import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, TrendingUp, FlameKindling } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-gray-100">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            THE PROBLEM: WILDFIRES ARE GETTING WORSE.
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Communities are burning. Lives are at risk. Current detection methods are failing.
          </p>
          <p className="text-gray-600">
            Wildfires are a devastating force, causing billions in damage and loss of life every year.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            variants={itemVariants}
          >
            <div className="bg-scarlet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <AlertTriangle className="text-scarlet-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Devastating Impact</h3>
            <p className="mb-4 text-gray-600">
              Over $50 billion in damages in California's recent fire seasons (2015-2020).
            </p>
            <p className="text-sm text-gray-500">
              Source: Insurance Information Institute, 2021
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            variants={itemVariants}
          >
            <div className="bg-scarlet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="text-scarlet-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Human Toll</h3>
            <p className="mb-4 text-gray-600">
              Up to 60% of wildfire survivors experience PTSD, depression, and anxiety.
            </p>
            <p className="text-sm text-gray-500">
              Source: Brown et al., 2019
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            variants={itemVariants}
          >
            <div className="bg-scarlet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FlameKindling className="text-scarlet-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Reactive Methods</h3>
            <p className="mb-4 text-gray-600">
              Detection delays significantly hinder early suppression efforts.
            </p>
            <p className="text-sm text-gray-500">
              Source: U.S. Government Accountability Office, 2025
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-scarlet-600 text-white p-8 md:p-12 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className="text-xl md:text-2xl italic mb-6">
            "The hardest part wasn't losing the house—it was not knowing when or if we'd lose it."
          </blockquote>
          <p className="text-right text-white/80">— Wildfire Survivor (Brown et al., 2019)</p>
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/problem" className="btn btn-primary">
            Learn More About The Problem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;