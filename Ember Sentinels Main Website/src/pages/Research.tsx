import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Research: React.FC = () => {
  useEffect(() => {
    document.title = 'Research Paper | Ember Sentinels';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.article
          className="tufte-article bg-white shadow-sm px-12 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <header className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Ember Sentinels: A Chromic-Material and AI-Driven Proactive Framework for Ultra-Early Preventive Wildfire Detection
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Author:</strong> Nikhilesh Suravarjjala
            </p>
            <p className="text-sm text-gray-500 italic">
              Competition: National Artificial Intelligence & Digital Engineering Challenge — Long Island University
            </p>
          </header>

          {/* Abstract */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wildfires in the United States are becoming more frequent, destructive, and unpredictable, with existing detection systems often failing to identify fires until after they have ignited. These delays allow minor ignition points to escalate into catastrophic events that devastate communities, ecosystems, and infrastructure. Ember Sentinels introduces a preventive, materials-science-based solution built on chemochromic and thermochromic reactions that detect early environmental fire indicators, specifically volatile organic compounds (VOCs) released by stressed vegetation and micro-temperature changes associated with pre-ignition conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While the core system is fully passive and functional without external power, future expansions include optical tower readers, cloud-based dashboards, and lightweight AI models for analyzing spatial color patterns and predicting ignition likelihood. By merging chemical engineering, materials science, and optional AI augmentation, Ember Sentinels provides a scalable, low-cost, community-centered framework for ultra-early wildfire detection and proactive risk mitigation.
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wildfires represent a rapidly intensifying threat in the United States, with California experiencing over 50,000 destroyed structures and more than $50 billion in insured losses between 2015 and 2020 <span className="text-sm text-gray-500">(Insurance Information Institute, 2021)</span>. Fire seasons have become longer and more unpredictable due to climate change, drought, and the expansion of the Wildland–Urban Interface (WUI). Further, wildfire survivors often suffer severe psychological impacts; studies show that up to 60% face PTSD, anxiety, or depression months after an event <span className="text-sm text-gray-500">(Brown et al., 2019)</span>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Current detection systems fail to identify the earliest conditions that precede ignition. Satellite data often arrives too late due to long revisit times and cloud or smoke interference <span className="text-sm text-gray-500">(U.S. GAO, 2025)</span>, while human reports occur only after flames are visible. This detection gap enables small ignition sources to grow into uncontrollable wildfires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ember Sentinels seeks to close this gap using an accessible, materials-science-based approach. The system utilizes chemochromic and thermochromic pigments to detect environmental fire precursors, VOCs from distressed vegetation, and localized temperature changes prior to ignition.
            </p>
          </section>

          {/* Section I: Problem Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-b-2 border-scarlet-600 pb-2">
              Section I: Problem Analysis
            </h2>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.1 Problem Statement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wildfire detection in the United States relies heavily on visual confirmation and satellite imagery. Satellite systems suffer from low revisit frequency, low resolution, and atmospheric interference. Many fires are first reported by civilians, meaning they are already visible and spreading rapidly when detected <span className="text-sm text-gray-500">(U.S. Government Accountability Office, 2025)</span>. Because wildfires escalate exponentially during their first hour, early detection, ideally before ignition, is essential.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.2 User Groups & Stakeholders</h3>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">1.2.1 California Residents</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Residents in wildfire-prone zones experience recurring evacuations, property damage, and emotional trauma. Studies show that 60% of survivors experience PTSD, anxiety, and depressive symptoms <span className="text-sm text-gray-500">(Brown et al., 2019)</span>. Smoke exposure leads to hospitalizations; a 10 μg/m³ increase in PM₂.₅ corresponds to a 10% increase in respiratory hospital visits <span className="text-sm text-gray-500">(Koman et al., 2021)</span>.
            </p>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">1.2.2 Wildfire Agencies</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Agencies rely on civilian reports and satellite imagery with limited resolution and frequent obstruction <span className="text-sm text-gray-500">(exci.ai, 2024)</span>. Standard satellite revisit rates are too slow for real-time detection <span className="text-sm text-gray-500">(U.S. GAO, 2025)</span>.
            </p>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">1.2.3 Firefighting Personnel</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Firefighters operate in extreme heat, dense smoke, and rapidly shifting fire fronts. Effective situational awareness tools significantly improve safety <span className="text-sm text-gray-500">(Firehouse, 2025)</span>.
            </p>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">1.2.4 Communities in Wildfire-Prone Areas</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 2025 Los Angeles fires resulted in losses between $95–$164 billion <span className="text-sm text-gray-500">(PreventionWeb, 2025)</span>.
            </p>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">1.2.5 Insurance Providers</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Major insurers like State Farm have stopped accepting new applications in high-risk regions <span className="text-sm text-gray-500">(State Farm, 2023)</span>.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.3 When, Where, and Why Wildfires Are a Problem</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              California's peak fire activity occurs from late summer to fall due to low humidity, high temperatures, and dry vegetation <span className="text-sm text-gray-500">(Cal OES, 2024)</span>. The Wildland–Urban Interface is particularly vulnerable. Climate change has increased frequency and intensity <span className="text-sm text-gray-500">(C2ES, 2023)</span>.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.4 Why Current Fire Detection is Insufficient</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Existing systems detect only after smoke or flames are visible, providing no pre-ignition data.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.5 The Societal Cost of Delayed Detection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Delayed detection leads to increased structure losses, billions in damages, high PTSD rates, overwhelmed hospitals, and evacuation failures.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">1.6 Need for a Preventive Pre-Ignition Detection System</h3>
            <p className="text-gray-700 leading-relaxed">
              A system detecting VOC emissions and temperature changes before flames would provide critical time for evacuation and resource allocation.
            </p>
          </section>

          {/* Section II: Solution Development */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-b-2 border-scarlet-600 pb-2">
              Section II: Solution Development
            </h2>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.1 Overview of Ember Sentinels</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ember Sentinels is a passive, low-cost wildfire early detection sticker that changes color in response to VOC levels and temperature shifts. It requires no power source and provides pre-ignition warnings instantly readable by residents, firefighters, and agencies.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.2 Chromic Materials & Detection Chemistry</h3>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">Chemochromic Mechanism</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stressed vegetation releases VOCs such as isoprene and α-pinene. Chemochromic pigments react with these compounds, altering light absorption and reflection <span className="text-sm text-gray-500">(Maleknia, Bell, & Adams, 2009)</span>.
            </p>

            <h4 className="text-lg font-serif font-medium text-gray-800 mb-2 mt-4">Thermochromic Mechanism</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thermochromic pigments contain leuco dye microcapsules that reorganize when exposed to temperature increases <span className="text-sm text-gray-500">(Reversible Thermochromic POSS-Metal Films, 2021)</span>.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.3 Sticker Architecture</h3>
            <ul className="list-none text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Top Layer:</strong> Chemochromic + thermochromic coating, UV-resistant</li>
              <li><strong>Middle Layer:</strong> Black contrast layer for enhanced visibility</li>
              <li><strong>Bottom Layer:</strong> White reflective surface for color clarity</li>
              <li><strong>Adhesive + Substrate:</strong> Outdoor-durable in heat, moisture, sunlight</li>
            </ul>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.4 Color Functionality and Risk Interpretation</h3>
            <ul className="list-none text-gray-700 space-y-2 mb-4 ml-4">
              <li><span className="inline-block w-4 h-4 bg-green-500 rounded mr-2"></span><strong>Green:</strong> Stable conditions</li>
              <li><span className="inline-block w-4 h-4 bg-yellow-500 rounded mr-2"></span><strong>Yellow:</strong> VOC elevation / mild heat</li>
              <li><span className="inline-block w-4 h-4 bg-orange-500 rounded mr-2"></span><strong>Orange:</strong> Vegetation stress and rising temperature</li>
              <li><span className="inline-block w-4 h-4 bg-red-600 rounded mr-2"></span><strong>Red:</strong> Critical ignition risk</li>
            </ul>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.5 Deployment Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stickers placed every ~50 meters. Approximately four stickers per acre offer effective coverage <span className="text-sm text-gray-500">(Air Sciences Inc., 2020)</span>. Ideal placement: WUI boundaries, utility poles, forest access points, trail networks, and residential perimeters.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">2.6 Viability & Market Analysis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uses low-cost, durable chromic materials requiring no power. High demand from homeowners, emergency agencies, rural communities, environmental groups, and insurance providers. Competitive advantages include pre-ignition detection, low cost, scalability, and weather independence.
            </p>
          </section>

          {/* Section III: Future Innovations */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 border-b-2 border-scarlet-600 pb-2">
              Section III: Future Innovations
            </h2>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">3.1 Tower-Based Optical Readers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Future versions may include optical towers with cameras or spectral sensors to read sticker colors at scale, enabling automated regional monitoring.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">3.2 Cloud Dashboard & AI Risk Scoring</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A cloud dashboard can aggregate sticker states, color change rates, weather data, humidity, and wind patterns. AI algorithms could generate ignition-likelihood scores, vegetation stress indexes, and hotspot maps.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">3.3 Human-Centered Verification</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              AI flags issues, agencies send representatives. No autonomous suppression, drones, or robotics.
            </p>

            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 mt-6">3.4 Advanced Chromic Material Development</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Future enhancements include humidity-reactive chromic layers, VOC-specific fuel identification, wind-interaction indicators, and tamper-evident materials.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wildfires are becoming more severe, frequent, and destructive. Existing detection technologies identify fires only after they have ignited. Ember Sentinels addresses this by detecting pre-ignition chemical and thermal signals through a materials-science-based approach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Optional future expansions offer scalable pathways for modernization while preserving the core system's simplicity and accessibility. Ember Sentinels merges chemical engineering, materials science, visual communication, and digital engineering to deliver a robust, preventive wildfire detection solution.
            </p>
          </section>

          {/* References */}
          <section className="mb-12 border-t-2 border-gray-300 pt-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">References</h2>
            <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
              <p>Air Sciences Inc. (2020). <em>Smart sensors for wildfire detection.</em> https://airsci.com/smart-sensors-for-wildfire-detection/</p>

              <p>Brown, M. R. G., McDermott, M. R., Paton, D., & Lowe, S. R. (2019). After the Fort McMurray wildfire: The effect of perceived threat on post-traumatic stress disorder. <em>International Journal of Environmental Research and Public Health, 16</em>(2), 213.</p>

              <p>Cal OES. (2024). <em>Summer leaves, fall approaches: Wildfire threats remain.</em> https://news.caloes.ca.gov/</p>

              <p>Center for Climate and Energy Solutions (C2ES). (2023). <em>Wildfires and climate change.</em> https://www.c2es.org/content/wildfires-and-climate-change/</p>

              <p>exci.ai. (2024). <em>How to overcome satellites limitations in early wildfire detection.</em> https://www.exci.ai/real-time-satellites-limitations/</p>

              <p>Firehouse. (2025). <em>Firefighter safety: New challenges from climate-intensified wildfires.</em> https://www.firehouse.com/</p>

              <p>Insurance Information Institute. (2021). <em>Wildfire facts and statistics.</em> https://www.iii.org/fact-statistic/facts-statistics-wildfires</p>

              <p>Koman, P. D., Mancuso, P., Hsia, C., & Gohlke, J. M. (2021). The health impacts of climate change and wildfire smoke exposure. <em>Environmental Health Perspectives, 129</em>(5), 55001.</p>

              <p>Maleknia, S. D., Bell, T. L., & Adams, M. A. (2009). Eucalypt smoke and wildfires: Volatile organic compounds and their potential health effects. <em>Environmental Chemistry, 6</em>(5), 386–394.</p>

              <p>PreventionWeb. (2025). <em>Los Angeles wildfire economic impact.</em> https://www.preventionweb.net/</p>

              <p>Reversible Thermochromic POSS-Metal Films for early warning. (2021). <em>Materials & Design, 204</em>, 109659.</p>

              <p>State Farm. (2023). <em>State Farm announces California wildfire insurance changes.</em> https://www.statefarm.com/</p>

              <p>U.S. Government Accountability Office. (2025). <em>Report on wildfire detection and response modernization.</em></p>
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
};

export default Research;
