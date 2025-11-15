import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Satellite, Users, Scale } from 'lucide-react';

const Problem: React.FC = () => {
  useEffect(() => {
    document.title = 'The Problem | Ember Sentinels';
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
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
              THE PROBLEM: WILDFIRES ARE GETTING WORSE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Wildfires in the western United States are becoming more frequent, more destructive, and more difficult to control. Traditional detection systems struggle to keep pace with modern fire behavior, leaving communities vulnerable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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
              The Growing Wildfire Crisis
            </h2>
            <p className="text-xl text-gray-700">
              Key statistics that highlight the devastating impact of wildfires
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
              <h3 className="text-xl font-semibold mb-4">Devastating Financial Impact</h3>
              <p className="mb-4 text-gray-600">
                California experienced over $50 billion in wildfire-related losses between 2015–2020.
              </p>
              <p className="text-sm text-gray-500">
                Source: Insurance Information Institute (2021)
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              variants={itemVariants}
            >
              <div className="bg-scarlet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="text-scarlet-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Human Toll and Mental Health Impact</h3>
              <p className="mb-4 text-gray-600">
                Up to 60% of wildfire survivors report PTSD, anxiety, or depression following an event.
              </p>
              <p className="text-sm text-gray-500">
                Source: Brown et al. (2019)
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-md p-8"
              variants={itemVariants}
            >
              <div className="bg-scarlet-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-scarlet-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Detection Delays Worsen Outcomes</h3>
              <p className="mb-4 text-gray-600">
                Satellite detection can take hours; human detection can take even longer. Delays significantly hinder early suppression efforts.
              </p>
              <p className="text-sm text-gray-500">
                Source: U.S. Government Accountability Office (2025)
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-scarlet-600 text-white p-8 md:p-12 rounded-xl shadow-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-xl md:text-2xl italic mb-6">
              "The hardest part wasn't losing the house — it was not knowing when or if we'd lose it."
            </blockquote>
            <p className="text-right text-white/80">— Wildfire Survivor (Brown et al., 2019)</p>
          </motion.div>
        </div>
      </section>

      {/* Current Solutions Limitations */}
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
              Why Current Detection Methods Fail
            </h2>
            <p className="text-xl text-gray-700">
              Traditional systems are too slow, weather-dependent, and lack early indicators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-medium mb-2">1. Too Slow</h4>
                  <p className="text-gray-600">
                    Most fires are identified only after visible flames — often far too late.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium mb-2">2. Weather-Dependent</h4>
                  <p className="text-gray-600">
                    Satellite imagery is blocked by smoke, fog, and cloud cover.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium mb-2">3. Incomplete Coverage</h4>
                  <p className="text-gray-600">
                    Many high-risk zones lack sensors or consistent monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium mb-2">4. No Early Indicators</h4>
                  <p className="text-gray-600">
                    Traditional systems cannot detect VOC signals or heat anomalies before ignition.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 bg-gray-800 text-white">
                <h3 className="text-xl font-semibold mb-2">The Detection Gap</h3>
                <p className="text-gray-300">
                  The critical period between fire ignition and detection
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">0–15 minutes: Fire begins forming</span>
                      <span className="text-sm text-forest-600 font-medium">Sentinels detect</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-forest-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Sentinels detecting VOCs + temperature rise. Traditional systems detect nothing.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">1–3 hours: Human reports</span>
                      <span className="text-sm text-amber-600 font-medium">Traditional</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Worsening smoke visibility</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">3–6 hours: Satellite confirmation</span>
                      <span className="text-sm text-scarlet-600 font-medium">Too late</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-scarlet-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">Fire has already spread exponentially</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Wildfires double in size every few minutes.</strong><br />
                    Even a 10–15 minute advantage dramatically changes outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Need Ultra-Early Detection */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We Need Ultra-Early Detection
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Communities need a system that:
            </p>

            <div className="bg-gray-50 rounded-xl p-8 text-left">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-forest-600 font-bold mr-3">✓</span>
                  <span>Detects chemical and thermal signals BEFORE flames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 font-bold mr-3">✓</span>
                  <span>Is low-cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 font-bold mr-3">✓</span>
                  <span>Scales to thousands of acres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 font-bold mr-3">✓</span>
                  <span>Requires no power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 font-bold mr-3">✓</span>
                  <span>Works in all weather</span>
                </li>
              </ul>

              <p className="text-gray-700 mt-8 font-medium">
                Ember Sentinels meet these needs using simple but powerful materials-science–based sensing.
              </p>
            </div>
          </motion.div>
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
              Understanding the Problem is the First Step
            </h2>
            <p className="text-xl mb-8">
              Explore how Ember Sentinels provide an entirely new layer of protection for at-risk communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/solution" className="btn bg-white text-scarlet-700 hover:bg-gray-100">
                Explore Our Solution
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

export default Problem;