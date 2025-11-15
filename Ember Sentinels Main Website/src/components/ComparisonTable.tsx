import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonTable: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Traditional vs. Proactive Detection
        </h3>
        <p className="text-gray-600 text-center mb-2">
          See how Ember Sentinels outperform conventional wildfire detection methods
        </p>
      </div>

      <div className="p-6 md:p-8">
        <motion.div 
          className="overflow-x-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Traditional Detection
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-scarlet-600 uppercase tracking-wider">
                  Ember Sentinels
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Early Detection
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Flames only
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Chemical + thermal indicators before flames
                  </div>
                </td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Speed
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Hours to days
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Minutes
                  </div>
                </td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Weather Limitations
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Easily obstructed
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Functions in all weather
                  </div>
                </td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Real-Time Alerts
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Delayed
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Immediate visual + digital alerts
                  </div>
                </td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Cost
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Very high
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Extremely low
                  </div>
                </td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Accessibility
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-scarlet-500 mr-2" />
                    Requires equipment
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2" />
                    Visible to anyone
                  </div>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonTable;