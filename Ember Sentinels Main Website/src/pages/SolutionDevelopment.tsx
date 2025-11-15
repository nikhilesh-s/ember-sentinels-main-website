import React, { useEffect } from 'react';

const SolutionDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = 'Solution Development | Ember Sentinels';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <article className="research-article">
        <h1>Section II: Solution Development</h1>
        
        <section>
          <h2>2.1 How the Solution Works and Development</h2>
          
          <h3>2.1.1 Color-Changing Mechanism</h3>
          <h4>Chemochromic Detection</h4>
          <p>
            Ember Sentinels deploy specialized color-reactive materials in the top layer to detect 
            specific volatile organic compounds (VOCs) emitted by vegetation when damaged. These VOCs, 
            including terpenes like isoprene and α-pinene, are released by plants in large amounts 
            during the early stages of distress due to severe heat or dryness caused by drought 
            conditions (Maleknia, Bell, & Adams, 2009).
            <span className="research-sidenote">
              Chemical detection enables early warning before visible flames appear.
            </span>
          </p>

          <p>
            The interaction between these VOCs and the color-reactive compounds creates a reversible 
            chemical reaction, changing the material's light absorption and reflection abilities, 
            resulting in a color change. This allows for the detection of potential fire risks before 
            ignition occurs by the change of color by the Ember Sentinel patch.
          </p>

          <h4>Thermochromic Detection</h4>
          <p>
            Included alongside the color-changing components are thermochromic pigments that respond 
            to specific levels of temperature. These materials change color as a response to variations 
            in temperature, providing another layer for fire detection, as rising temperatures will 
            follow wildfires starting (Reversible Thermochromic POSS-Metal Films, 2021; Thermochromic 
            Polymer Nanocomposites, 2024).
            <span className="research-sidenote">
              Dual detection methods increase reliability and accuracy.
            </span>
          </p>

          <p>
            The combination of both these kinds of responses enhances how reliable the system is by 
            combining chemical signals with thermal cues.
          </p>

          <h4>Standardized Color-Coded Alert System</h4>
          <p>
            The visual color output of the sticker provides a risk assessment through a defined color spectrum:
          </p>

          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Green (Default):</strong> Normal environmental conditions with VOC and temperature levels below risk thresholds.</li>
            <li><strong>Yellow (Warning):</strong> Slightly high VOC concentrations and/or minor temperature increases, suggesting potential fire risk.</li>
            <li><strong>Orange (Elevated Alert):</strong> Increased VOC levels and/or significant temperature rise, indicating higher chance of fire ignition occurring soon.</li>
            <li><strong>Red (Critical):</strong> High levels of target VOCs and/or critical temperature thresholds exceeded, signaling imminent fire risk approaching.</li>
            <li><strong>Blue (High Humidity):</strong> Potential future addition to indicate high humidity levels, which can affect fire behavior.</li>
          </ul>

          <h3>2.1.2 Sticker Design</h3>
          <p>
            The hexagonal shaped sticker is designed to be durable and easy to deploy in outdoor 
            environments. The structure comprises:
            <span className="research-sidenote">
              Hexagonal design maximizes visibility and durability.
            </span>
          </p>

          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Top Layer:</strong> Displays color changes corresponding to environmental conditions.</li>
            <li><strong>Middle Layer (Black):</strong> Increases contrast and visibility of color changes.</li>
            <li><strong>Bottom Layer (White):</strong> Serves as a reflective base to improve color differentiation.</li>
          </ul>

          <p>
            Each sticker features an engraved eight-digit alphanumeric code that serves as an ID tag 
            next to the fire symbol on the top layer, allowing for tracking and data collection by agencies.
          </p>

          <h2>2.2 Solution Presentation</h2>
          <h3>2.2.1 Slideshow Content</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Problem Definition:</strong> Challenges associated with current wildfire detection methods (Security Alarm, 2023).</li>
            <li><strong>Ember Sentinels Overview:</strong> Introduction to the system and its components.</li>
            <li><strong>Mechanism Explanation:</strong> Detailed functioning of chemochromic and thermochromic materials (TipTemp, 2023; ResearchGate, 2024; Alibaba, 2024).</li>
            <li><strong>Prototype Showcase:</strong> Presentation of the 3D printed prototype and its features (Data Bridge Market Research, 2024).</li>
            <li><strong>Viability Analysis:</strong> Discussion on practicality and potential impact (AP News, 2024; ResearchGate, 2024).</li>
            <li><strong>Future Development:</strong> Exploration of further enhancements and deployment strategies.</li>
            <li><strong>Visuals:</strong> Inclusion of diagrams, prototype photos, and simulations.</li>
          </ul>

          <h2>2.3 Marketing and Viability</h2>
          
          <h3>2.3.1 Target Market</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Early Adopters:</strong> Homeowners and community groups in wildfire-prone areas.</li>
            <li><strong>Later Adopters:</strong> Government agencies and larger organizations responsible for wildfire management.</li>
          </ul>

          <h3>2.3.2 Value Proposition</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Early Detection:</strong> Provides timely alerts before fires escalate.</li>
            <li><strong>Localized Data:</strong> Offers specific information pertinent to particular areas.</li>
            <li><strong>Targeted Response:</strong> Enables focused intervention strategies.</li>
          </ul>

          <h3>2.3.3 Marketing Channels</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Online Platforms:</strong> Utilizes digital media to reach potential users.</li>
            <li><strong>Community Outreach:</strong> Engages local communities through events and education about wildfires and the science behind it.</li>
            <li><strong>Partnerships:</strong> Collaborates with organizations to expand reach and impact.</li>
          </ul>

          <h3>2.3.4 Viability</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Effectiveness:</strong> Demonstrates the system's capability to detect fires early.</li>
            <li><strong>Cost-Benefit:</strong> Analyzes the economic advantages of early detection and prevention.</li>
            <li><strong>Scalability:</strong> Assesses the potential for widespread implementation.</li>
          </ul>

          <h3>2.3.5 Costs</h3>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Materials:</strong> Expenses related to chromic substances and sticker production (Plugger, 2024).</li>
            <li><strong>Manufacturing:</strong> Costs associated with producing the stickers and system components.</li>
            <li><strong>Development:</strong> Investment in research, design, and testing.</li>
            <li><strong>Deployment:</strong> Expenditures for installing and maintaining the system in various locations.</li>
          </ul>

          <h2>2.4 Scalability and Opportunities for Future Iterations</h2>
          
          <h3>Deployment Strategy</h3>
          <p>
            Ember Sentinels are designed for flexible deployment across various terrains and environments. 
            In high-risk areas, such as the wildland-urban interface (WUI), stickers can be affixed to 
            trees, utility poles, or structures at intervals of approximately 50 meters to ensure 
            comprehensive coverage. This density aligns with recommendations for sensor deployment in 
            areas with significant human activity (Dryad Silvanet Documentation, 2025).
            <span className="research-sidenote">
              Strategic deployment ensures optimal coverage in high-risk areas.
            </span>
          </p>

          <h3>Sensor Density and Coverage</h3>
          <p>
            Research indicates that deploying sensors at a density of four units per acre (approximately 
            one per 1,000 square meters) provides effective early detection capabilities (Air Sciences Inc., 2020). 
            For larger forested areas, a randomized deployment strategy based on Poisson point processes can 
            be employed to optimize coverage while minimizing redundancy (Pandey & Gupta, 2018).
          </p>

          <h3>Cost Analysis</h3>
          <p>
            The cost of chemochromic and thermochromic materials varies depending on the specific compounds 
            and manufacturing processes. However, bulk production and advancements in material science are 
            expected to reduce costs over time (Market Research Future, 2025). Deployment costs, including 
            installation and maintenance, are estimated to be less than $3 per acre, with systems operational 
            within 120 days (SpaceNews, 2012).
            <span className="research-sidenote">
              Cost-effective deployment enables widespread adoption.
            </span>
          </p>

          <h3>Future Enhancements</h3>
          <p>Potential advancements for Ember Sentinels include:</p>
          <ul className="list-disc pl-8 space-y-2 max-w-[65%]">
            <li><strong>Integration with Wireless Networks:</strong> Incorporating wireless communication modules to transmit real-time data to centralized monitoring systems.</li>
            <li><strong>Automated Gel Deployment:</strong> Developing drone-based or ground-based systems to apply fire-retardant gel in response to alerts from the sticker network (Plugger, 2024).</li>
            <li><strong>Enhanced Sensor Capabilities:</strong> Expanding detection capabilities to include additional environmental indicators, such as humidity and wind speed, to improve predictive accuracy.</li>
            <li><strong>Community Engagement:</strong> Implementing educational programs to inform residents about the system's functionality and encourage participation in wildfire prevention efforts.</li>
          </ul>

          <h2>References</h2>
          <ul className="bibliography">
            <li>1. Air Sciences Inc. (2020). Smart sensors for wildfire detection. <a href="https://airsci.com/smart-sensors-for-wildfire-detection/" target="_blank" rel="noopener noreferrer">https://airsci.com/smart-sensors-for-wildfire-detection/</a></li>
            
            <li>2. Alibaba. (2024). Thermochromic pigments and sensor products. <a href="https://www.alibaba.com" target="_blank" rel="noopener noreferrer">https://www.alibaba.com</a></li>
            
            <li>3. AP News. (2024). Wildfire detection market outlook. <a href="https://apnews.com/article/b6ba6b7729f383fe4ffad4dee609f3f1" target="_blank" rel="noopener noreferrer">https://apnews.com/article/b6ba6b7729f383fe4ffad4dee609f3f1</a></li>
            
            <li>4. Data Bridge Market Research. (2024). Global fire detection system market. <a href="https://www.databridgemarketresearch.com" target="_blank" rel="noopener noreferrer">https://www.databridgemarketresearch.com</a></li>
            
            <li>5. Dryad Silvanet Documentation. (2025). Sensor density guidelines. <a href="https://docs.dryad.app" target="_blank" rel="noopener noreferrer">https://docs.dryad.app</a></li>
            
            <li>6. Maleknia, S. D., Bell, T. L., & Adams, M. A. (2009). Eucalypt smoke and wildfires: Volatile organic compounds and their potential health effects. <i>Environmental Chemistry, 6</i>(5), 386–394.</li>
            
            <li>7. Market Research Future. (2025). Chemochromic material market size, share & trends report 2034. <a href="https://www.marketresearchfuture.com/reports/chemochromic-material-market-27550" target="_blank" rel="noopener noreferrer">https://www.marketresearchfuture.com/reports/chemochromic-material-market-27550</a></li>
            
            <li>8. Pandey, K., & Gupta, A. (2018). Modeling and analysis of wildfire detection using wireless sensor network with Poisson deployment. <i>arXiv preprint</i>, arXiv:1810.07511. <a href="https://arxiv.org/abs/1810.07511" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/1810.07511</a></li>
            
            <li>9. Plugger. (2024). Forest fire detection with computer vision. <a href="https://www.plugger.ai/blog/forest-fire-detection-and-segmentation-using-yolov7" target="_blank" rel="noopener noreferrer">https://www.plugger.ai/blog/forest-fire-detection-and-segmentation-using-yolov7</a></li>
            
            <li>10. Reversible Thermochromic POSS-Metal Films. (2021). <i>Materials & Design, 204</i>, 109659.</li>
            
            <li>11. ResearchGate. (2024). Types and applications of chemochromic sensors. <a href="https://www.researchgate.net/publication/378182755" target="_blank" rel="noopener noreferrer">https://www.researchgate.net/publication/378182755</a></li>
            
            <li>12. Security Alarm. (2023). Commercial fire alarm cost guide. <a href="https://www.securityalarm.com/blog/how-much-does-a-commercial-fire-alarm-system-cost/" target="_blank" rel="noopener noreferrer">https://www.securityalarm.com/blog/how-much-does-a-commercial-fire-alarm-system-cost/</a></li>
            
            <li>13. SpaceNews. (2012). Wildfire early warning possible with DLR-developed space sensors. <a href="https://spacenews.com/wildfire-early-warning-possible-dlr-developed-space-sensors" target="_blank" rel="noopener noreferrer">https://spacenews.com/wildfire-early-warning-possible-dlr-developed-space-sensors</a></li>
            
            <li>14. Thermochromic Polymer Nanocomposites for Heat Detection. (2024). <i>Nanomaterials, 14</i>(6), 1123.</li>
            
            <li>15. TipTemp. (2023). Temperature-sensitive materials for fire response. <a href="https://www.tiptemp.com" target="_blank" rel="noopener noreferrer">https://www.tiptemp.com</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default SolutionDevelopment;