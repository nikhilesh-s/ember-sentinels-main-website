import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AIDashboard: React.FC = () => {
  const dashboardUrl = 'https://ember-sentinel-ai-da-dsvc.bolt.host/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Dashboard
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Monitor and analyze wildfire detection data in real-time with our advanced AI-powered dashboard.
          </p>

          <a
            href={dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn btn-primary"
          >
            <ExternalLink size={20} />
            Open in New Tab
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}
        >
          <iframe
            src={dashboardUrl}
            title="Ember Sentinels AI Dashboard"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AIDashboard;
