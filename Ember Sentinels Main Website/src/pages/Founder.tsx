import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Founder: React.FC = () => {
  useEffect(() => {
    document.title = 'Founder | Ember Sentinels';
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
              Founder: Nikhilesh Suravarjjala
            </h1>
            <p className="text-xl text-gray-300">
              Student innovator, materials science researcher, and founder of Ember Sentinels
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-700 mb-8">
              Nikhilesh Suravarjjala is a student innovator, materials science researcher, and founder of Ember Sentinels,
              a project focused on ultra-early wildfire detection through advanced materials and accessible digital engineering.
            </p>

            <p className="text-gray-700 mb-6">
              Driven by a deep interest in chemistry, materials science, and environmental resilience, Nikhilesh designs
              solutions that prioritize simplicity, scalability, and real-world impact. His work centers around the belief
              that engineering should not be limited to high-cost, high-tech systems — but should instead be built so that
              entire communities can benefit from it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">A Vision Rooted in Materials Science</h2>

            <p className="text-gray-700 mb-6">
              Nikhilesh's passion for materials science began with a fascination for how chemistry can solve real
              physical-world problems. This interest led him to explore chromic materials (chemochromic & thermochromic
              pigments) as a tool for wildfire prevention, forming the foundation of the Ember Sentinels system.
            </p>

            <p className="text-gray-700 mb-6">
              By merging materials science with lightweight digital engineering, he created a system where:
            </p>

            <ul className="text-gray-700 mb-6 ml-6 space-y-2">
              <li>• Stickers detect risk</li>
              <li>• Towers observe sticker clusters</li>
              <li>• A dashboard interprets patterns</li>
              <li>• Communities receive ultra-early warnings</li>
            </ul>

            <p className="text-gray-700">
              This blend of physical science + data interpretation became the core of Ember Sentinels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Innovation With Purpose</h2>

            <p className="text-gray-700 mb-6">
              Nikhilesh specializes in developing technologies that are:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">Affordable</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">Scalable</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">Mechanically simple</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">Community-centered</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800">Scientifically rigorous</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              He believes that meaningful innovation isn't about complexity — it's about accessibility.
            </p>

            <p className="text-gray-700">
              Ember Sentinels reflects this: a low-cost, materials-science–based solution capable of being deployed
              across thousands of acres without requiring power, drones, or expensive sensors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beyond Ember Sentinels */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Beyond Ember Sentinels</h2>

            <p className="text-gray-700 mb-6">
              Nikhilesh is the founder of Materia MSE, a student-led materials science organization focused on STEM
              communication and engineering outreach. He also cofounded educational and technology initiatives including
              StudyLeaf/StudyTree, and he plays leadership roles in organizations, student government, STEM programs,
              and entrepreneurship projects.
            </p>

            <p className="text-gray-700 mb-4">His work spans:</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Materials science research</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Chemistry applications</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Fire prevention science</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Digital engineering</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Public speaking</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Youth entrepreneurship</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">STEM communication</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border border-gray-200">
                <p className="text-sm text-gray-700">Community-based innovation</p>
              </div>
            </div>

            <p className="text-gray-700 font-medium">
              Across everything, his mission remains consistent: Use science and engineering to create tools that help people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Founder's Message</h2>

            <div className="bg-scarlet-600 text-white p-8 md:p-12 rounded-xl shadow-lg">
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "Wildfire detection shouldn't depend on expensive satellites or high-end equipment.
                It should be simple. It should be accessible. And it should be early.
                Ember Sentinels is my way of showing how materials science can protect communities —
                long before a flame ever appears."
              </blockquote>
              <p className="text-right text-white/80">— Nikhilesh Suravarjjala</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Connect with Nikhilesh</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/nikhilesh-suravarjjala/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://materiamse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gray-800 text-white hover:bg-gray-900 flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Materia MSE
              </a>
              <a
                href="mailto:niksuravarjjala@gmail.com"
                className="btn bg-scarlet-600 text-white hover:bg-scarlet-700 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
