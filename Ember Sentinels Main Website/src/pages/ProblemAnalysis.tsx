import React, { useEffect } from 'react';

const ProblemAnalysis: React.FC = () => {
  useEffect(() => {
    document.title = 'Problem Analysis | Ember Sentinels';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <article className="research-article">
        <h1>Section I: Problem Analysis</h1>
        
        <section>
          <h2>1. Defining the Problem</h2>
          
          <h3>1.1 Problem Statement</h3>
          <p>
            In our current society, the detection of wildfires mostly relies upon visual reports from people 
            in the area or usage of satellite images. This means that fires aren't reported until they're 
            already starting to grow out of control and it may be too late. That delay between the fire 
            starting and reports makes it harder to respond quickly and effectively. As wildfires are becoming 
            more intense and common due to climate change, the lack of real-time updates and advanced warning 
            systems puts all communities and ecosystems in potential harm's way. A solution that is desperately 
            needed is a faster and smarter way to detect wildfires, something that is able to detect and provide 
            early warning signs before a fire even starts and provide more detailed alerts than just visual 
            confirmation from people's reports of sightings. This proactive approach could help get resources 
            allocated to places where they are needed sooner, keep people and environments safer, and protect 
            us from the imminent threat of growing wildfires.
          </p>

          <h3>1.2 User Groups and Stakeholders</h3>
          
          <h4>1.2.1 California Residents</h4>
          <h5>1.2.1.1 Impacts on Residents in High-Risk Wildfire Zones</h5>
          <p>
            People who live in areas prone to wildfires experience recurring harm in the form of their homes 
            and property being destroyed that continues to accumulate over time. The process of repeatedly 
            having to evacuate as orders to ensure safety, but witnessing the loss of valuables or homes 
            leave feelings of anxiety and uncertain, as documented in a series of community impact report 
            during the aftermath of major wildfires (Dodd et al., 2020).
            <span className="research-sidenote">
              Community impact reports reveal significant psychological trauma from repeated evacuations.
            </span>
          </p>

          <blockquote>
            "The hardest part wasn't losing the house—it was not knowing when or if we'd lose it. That 
            uncertainty ate away at us every day" (Brown et al., 2019).
          </blockquote>

          <p>
            Observatory studies confirm the theory of serious psychological impacts stemming from wildfires, 
            in fact survivors exhibit much higher levels of PTSD, depression, and anxiety in the months after 
            the occurence of a fire, (often as high as 60% for PTSD at three months). This is especially when 
            they have witnessed homes burn or feared for their lives (Brown et al., 2019).
            <span className="research-sidenote">
              Up to 60% of survivors experience PTSD three months after wildfire events.
            </span>
          </p>

          <p>
            These mental effects also strain the overarching effects of the wildfire smoke. Research shows 
            that drastic increases in smoke (PM₂.₅) correspond to spikes in hospital visits and admissions—up 
            to a 10% increase in respiratory admissions per 10 μg/m³ increase in PM₂.₅ from fires (Koman et al., 2021). 
            Even being exposed to smoke for short periods of time is linked to an increase in anxiety and 
            depressive symptoms (Reid et al., 2016).
          </p>

          <p>
            What further presses on communities is the loss of homes and properties in fires. For example, 
            an analysis of California's recent fire seasons found that over 50,000 structures were destroyed 
            and more than $50 billion in insured losses from 2015 to 2020, with roughly $19 billion in damages 
            in 2020 alone (Insurance Information Institute, 2021).
          </p>

          <h5>1.2.1.2 Need for Timely Warnings, Personal Safety, and Community Support</h5>
          <p>
            Pre-planned procedures and warning measures can counteract the harms caused by fires. Increasingly 
            sophisticated detection technology such as sensors and satellite imagery are capable of detecting 
            wildfires in their earliest stages, and it is noted by officials that early detecting could save 
            lives and property by offering communities "advanced notice" to act (NASA, 2020).
          </p>

          <p>
            Safety networks like Fire Safe Councils and Firewise USA communities bring together residents and 
            agencies to help share resources, stabilize homes, and practice emergency strategies (National Fire 
            Protection Association [NFPA], 2023). These steps have been shown to help significantly reduce 
            injuries and losses during wildfire events (University of California Agriculture and Natural Resources, 2022).
          </p>

          <h4>1.2.2 Wildfire Management/Protection Agencies (e.g., CAL FIRE, US Forest Service)</h4>
          <h5>1.2.2.1 Delayed Detection</h5>
          <p>
            The wildfire management agencies such as CAL FIRE and the U.S. Forest Service has continued to rely 
            on human observations and satellite photos to detect wildfires. However, these methods are restricted 
            by a wide range of limiting factors. Lots of wildfires are initially reported by civilians and although 
            satellite technologies provide a larger range of coverage for watching and reporting, they are held 
            back in efficiency by low resolution levels.
            <span className="research-sidenote">
              Current detection methods face significant limitations in accuracy and timeliness.
            </span>
          </p>

          <p>
            The U.S. Government Accountability Office (2025) reported that the standard satellite revisit rate 
            is too slow to consistently detect new fires starting on time, especially under cloudy weather or 
            during the night. These gaps in detection are significant in hindering the early identification and 
            decrease of fire prevention efforts, which puts both human lives and natural ecosystems at risk 
            (Björck & McNamee, 2025). In some cases, fires are only detected after they have spread significantly, 
            resulting in irreversible damage.
          </p>

          <h5>1.2.2.2 Incomplete Information and Response Inefficiency</h5>
          <p>
            Once a wildfire has been detected, the prevention agencies typically struggle with maintaining 
            awareness of the situation in real time due to disorganized data relay and limited computer program 
            interaction. In scenarios of quickly moving fire, commanders are often lacking up-to-date information 
            on the extent of the fire, the crew's location, and available resources, which slows down 
            decision-making and limits efficient deployment (President's Council of Advisors on Science and 
            Technology, 2023).
            <span className="research-sidenote">
              Real-time information gaps significantly impact response effectiveness.
            </span>
          </p>

          <p>
            The lack of a unified & organized plan forces fire managers to make decisions surrounding the 
            allocation of resources based on incomplete or old data, often resulting in misuse or underutilization 
            of supportive assets.
          </p>

          <h4>1.2.3 Firefighting Personnel</h4>
          <h5>1.2.3.1 Facing Dangerous Conditions and the Need for Reliable Tools</h5>
          <p>
            Wildland firefighters are forced to work in hazardous environments, contending with unpredictable 
            fire, extreme heat, very dense smoke, and constantly changing weather conditions. To tackle these 
            challenges effectively, firefighters need dependable tools that work at maximum efficiency and help 
            them remain aware of the situation. New innovations like thermal imaging cameras and drones have 
            become extremely valuable, allowing firefighters to detect major heat points, assess how the fire 
            may continue to spread, and identify safe paths through smokey terrains (Firehouse, 2025).
          </p>

          <h5>1.2.3.2 The Imperative for Real-Time Data and Effective Communication</h5>
          <p>
            Within the constantly changing field of wildlife prevention, it is crucial to have access to accurate 
            real-time data & efficient communication services with firefighters. Firefighters have to make instant 
            decisions based on the current information they have about fire behavior, weather conditions, and 
            locations of other fighters. Technologies like wearable sensors and public safety networks (e.g., FirstNet) 
            have significantly helped enhance communication efforts, allowing for faster and more accurate 
            decision-making (WFCA, 2025).
          </p>

          <h4>1.2.4 Communities in Wildfire-Prone Areas</h4>
          <h5>1.2.4.1 Experiencing Economic Disruption and Infrastructure Damage</h5>
          <p>
            Communities located within regions prone to wildfires face severe economic & system damage. The 2025 
            Los Angeles wildfires resulted in property and capital losses between $95 billion and $164 billion, 
            with insured losses exceeding $20 billion (PreventionWeb, 2025). Infrastructure impacts included the 
            destruction of over 12,000 structures and widespread power outages (Wikipedia, 2025).
          </p>

          <h5>1.2.4.2 The Need for Preparedness and Earlier Evacuation Notices</h5>
          <p>
            Preparedness and quick evacuation notices are both crucial aspects of keeping humans out of harm's way. 
            During the 2019 Kincade Fire, around 190,000 residents were evacuated, and a prompt response to the 
            fire prevented fatalities (Wikipedia, 2025). In contrast, the 2018 Camp Fire saw 85 fatalities, 
            primarily due to delayed evacuation notices (Wikipedia, 2025).
          </p>

          <h4>1.2.5 Insurance Providers</h4>
          <h5>1.2.5.1 Facing Financial Risks Due to Wildfire Damage Claims</h5>
          <p>
            Insurance providers are especially vulnerable to major financial loss due to the destruction of 
            wildfires. Large insurers like State Farm have stopped accepting new applications for property 
            insurance in high-risk areas (State Farm, 2023). Increasing claim costs and the upcoming of 
            "insurance deserts", which are areas where coverage is not accessible or affordable, display the 
            need for risk management (World Economic Forum, 2023).
          </p>

          <h5>1.2.5.2 Need for Risk Assessment Tools and Mitigation Strategies</h5>
          <p>
            Insurers are starting to use advanced risk assessment tools, like CoreLogic's Wildfire Risk Score, 
            which helps them evaluate hazard levels of wildfires they are analyzing (CoreLogic, n.d.). They are 
            also providing premium discounts as incentive for policyholders to utilize fire-resistant measures, 
            such as creating defensible spaces (OECD, 2025).
          </p>

          <h3>1.3 When, Where, and Why Wildfires Are a Problem</h3>
        
          <h4>1.3.1 Wildfire Seasons</h4>
          <p>
            Wildfires mostly occur during dry seasons in regions with hot climates. In California, 
            the peak fire activity typically occurs between late summer and fall, specifically from 
            August through November (Cal OES, 2024). This period usually experiences high temperatures, 
            low humidity, and dry environment, creating optimal conditions for wildfires to develop 
            and spread rapidly. The state's climate with wet winters and dry summers, helps accumulate 
            dry fuels, raising the risk even higher during these months (Cal OES, 2024).
            <span className="research-sidenote">
              Peak fire season in California occurs between August and November.
            </span>
          </p>

          <h4>1.3.2 Geographic Factors</h4>
          <p>
            The Wildland-Urban Interface (WUI), areas where human development meets or intermingles 
            with wildland vegetation, is especially vulnerable to potential wildfires (Nature, 2018). 
            The growth of residential homes into these zones increases the potential for wildfires 
            starting through human causes and makes firefighting efforts much more difficult.
            <span className="research-sidenote">
              WUI zones present unique challenges for wildfire management.
            </span>
          </p>
        
          <p>
            Geography and vegetation can significantly influence the behavior of the fire. Areas with 
            steep slopes can accelerate the rate of fire spreading, while dense and dry vegetation 
            serves as abundant fuel for it to keep on going. The layout of homes and landscaping in 
            WUI areas can either eliminate to greatly raise fire risks, depending on factors such as 
            building materials and defensible space available (Nature, 2018).
          </p>

          <h4>1.3.3 Climate Change</h4>
          <p>
            Climate change increases wildfire risks by altering erratic weather patterns, leading to 
            increased temperatures, longer drought periods, and reduced snow. These changes result in 
            more dry soil and vegetation, extending the potential time range for fire and increasing 
            its frequency as well as how bad it gets (C2ES, 2023).
            <span className="research-sidenote">
              Climate change is extending fire seasons and increasing fire intensity.
            </span>
          </p>
        
          <p>
            In fact, studies show that climate change has already led to longer fire seasons and 
            larger burned areas in the western United States. Projections based on current data 
            suggest that this trend will continue, with increased implications for ecosystems, air 
            quality, and public health (C2ES, 2023).
          </p>

          <h4>1.3.4 Why Current Solutions Are Insufficient</h4>
          <p>
            Existing wildfire detection and response methods are limited by their speed, accuracy, 
            and coverage range. Typical systems often rely on civilian observation & report, as well 
            as satellite imagery, which can delay detection and slow down timely responses. Satellite 
            systems may have few revisit time periods and can be blocked by cloudy weather or smoke, 
            making them far less effective in early fire detection (exci.ai, 2024).
            <span className="research-sidenote">
              Current detection methods face significant limitations in effectiveness.
            </span>
          </p>
        
          <p>
            Additionally, these systems do not possess the detailed detention ability needed for local 
            monitoring, leaving certain spots vulnerable to being missed. Consequently, there is a 
            pressing need for more localized, proactive solutions that can detect fires at their 
            starting and help facilitate the fastest relief possible (exci.ai, 2024).
          </p>

          <h3>1.4 How Ember Sentinels Addresses the Problems</h3>
        
          <h4>1.4.1 Early Detection</h4>
          <p>
            Ember Sentinels uses innovative sensor technology that is capable of detecting chemical 
            changes in the environment before a fire. These sensors can identify unstable organic 
            matter and other indicators of combustion before the flames are visible, ensuring 
            incredibly faster response times.
            <span className="research-sidenote">
              Early detection capabilities can prevent small fires from becoming catastrophic.
            </span>
          </p>
        
          <p>
            By detecting fires in their very early stages, Ember Sentinels allow for quick intervention, 
            potentially preventing small initial ignitions from developing into large fires.
          </p>

          <h4>1.4.2 Real-Time Information</h4>
          <p>
            The system's tower network continues to actively monitor and transmit data, providing 
            real-time information on the condition of the environment and potential fire activity. 
            This constant stream of information helps enhance awareness of the situation for 
            firefighting agencies and emergency responders, allowing for them to make decisions and 
            efficient resource allocation during wildfire events while being more informed.
          </p>

          <h4>1.4.3 Improved Communication</h4>
          <p>
            Ember Sentinels sends fast alerts to relevant groups, which includes emergency services 
            and residents in potentially burning areas. The system's integration with communication 
            networks ensures that warnings are sent out promptly, enabling evacuations and preparations 
            as fast as possible.
            <span className="research-sidenote">
              Rapid communication is crucial for effective emergency response.
            </span>
          </p>

          <h4>1.4.4 Targeted Response</h4>
          <p>
            The system's acute detection ability allows for it to send targeted responses, such as 
            the usage of fire slowing gels to specific locations. By focusing reduction efforts on 
            known hotspots, Ember Sentinels increases the efficiency of firefighting operations by 
            helping conserve resources and reducing the spread of fires.
          </p>

          <h4>1.4.5 Scalability</h4>
          <p>
            Ember Sentinels' sensor technology is designed for widespread deployment, offering broad 
            coverage across any sort of environment. The scalability of the system ensures that it 
            can be used in various regions and areas, allowing it to adapt to different environmental 
            conditions that serve different risks according to specific factors.
            <span className="research-sidenote">
              Scalable deployment enables comprehensive coverage across diverse environments.
            </span>
          </p>

          <h2>References</h2>
          <ul className="bibliography">
            <li>1. Björck, J., & McNamee, M. (2025). Evaluation of wildland fire detection methods.</li>
            
            <li>2. Brown, M. R. G., McDermott, M. R., Paton, D., & Lowe, S. R. (2019). After the Fort McMurray wildfire: The effect of perceived threat on post-traumatic stress disorder. <i>International Journal of Environmental Research and Public Health, 16</i>(2), 213. <a href="https://doi.org/10.3390/ijerph16020213" target="_blank" rel="noopener noreferrer">https://doi.org/10.3390/ijerph16020213</a></li>
            
            <li>3. CAL FIRE. (2021). Dixie Fire incident update. <a href="https://www.fire.ca.gov/incidents/2021/7/13/dixie-fire/" target="_blank" rel="noopener noreferrer">https://www.fire.ca.gov/incidents/2021/7/13/dixie-fire/</a></li>
            
            <li>4. Center for Climate and Energy Solutions (C2ES). (2023). Wildfires and climate change. <a href="https://www.c2es.org/content/wildfires-and-climate-change/" target="_blank" rel="noopener noreferrer">https://www.c2es.org/content/wildfires-and-climate-change/</a></li>
            
            <li>5. CoreLogic. (n.d.). Wildfire risk score: A new standard for wildfire risk assessment. <a href="https://www.corelogic.com/insights/wildfire-risk-score/" target="_blank" rel="noopener noreferrer">https://www.corelogic.com/insights/wildfire-risk-score/</a></li>
            
            <li>6. Dodd, W., Scott, P., Howard, C., Scott, C., & Rose, C. (2020). Lived experience of a climate-related disaster: Evacuation and disruption from the 2016 Fort McMurray wildfires. <i>Canadian Journal of Public Health, 111</i>(6), 878–886. <a href="https://doi.org/10.17269/s41997-020-00362-7" target="_blank" rel="noopener noreferrer">https://doi.org/10.17269/s41997-020-00362-7</a></li>
            
            <li>7. exci.ai. (2024). How to overcome satellite limitations in early wildfire detection. <a href="https://www.exci.ai/real-time-satellites-limitations/" target="_blank" rel="noopener noreferrer">https://www.exci.ai/real-time-satellites-limitations/</a></li>
            
            <li>8. Firehouse. (2025). Firefighter safety: New challenges from climate-intensified wildfires. <a href="https://www.firehouse.com/safety/article/53092779/firefighter-safety-and-climate-wildfires" target="_blank" rel="noopener noreferrer">https://www.firehouse.com/safety/article/53092779/firefighter-safety-and-climate-wildfires</a></li>
            
            <li>9. Insurance Information Institute. (2021). Wildfire facts and statistics. <a href="https://www.iii.org/fact-statistic/facts-statistics-wildfires" target="_blank" rel="noopener noreferrer">https://www.iii.org/fact-statistic/facts-statistics-wildfires</a></li>
            
            <li>10. Koman, P. D., Mancuso, P., Hsia, C., & Gohlke, J. M. (2021). The health impacts of climate change and wildfire smoke exposure. <i>Environmental Health Perspectives, 129</i>(5), 055001. <a href="https://doi.org/10.1289/EHP8900" target="_blank" rel="noopener noreferrer">https://doi.org/10.1289/EHP8900</a></li>
            
            <li>11. NASA. (2020). NASA's Earth-observing satellites detect wildfires from space. <a href="https://earthobservatory.nasa.gov/features/Wildfires" target="_blank" rel="noopener noreferrer">https://earthobservatory.nasa.gov/features/Wildfires</a></li>
            
            <li>12. National Fire Protection Association (NFPA). (2023). Firewise USA program. <a href="https://www.nfpa.org/education-and-research/wildfire/firewise-usa" target="_blank" rel="noopener noreferrer">https://www.nfpa.org/education-and-research/wildfire/firewise-usa</a></li>
            
            <li>13. Nature. (2018). Unraveling the complexity of Wildland Urban Interface fires. <i>Scientific Reports, 8</i>, Article 13590. <a href="https://www.nature.com/articles/s41598-018-27215-5" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/s41598-018-27215-5</a></li>
            
            <li>14. OECD. (2025). Insurance in wildfire risk management: Enhancing resilience. <a href="https://www.oecd.org/environment/insurance-wildfire-risk-management.htm" target="_blank" rel="noopener noreferrer">https://www.oecd.org/environment/insurance-wildfire-risk-management.htm</a></li>
            
            <li>15. President's Council of Advisors on Science and Technology. (2023). Report on wildfire detection and response innovation.</li>
            
            <li>16. PreventionWeb. (2025). Economic impact of 2025 Los Angeles wildfires. <a href="https://www.preventionweb.net" target="_blank" rel="noopener noreferrer">https://www.preventionweb.net</a></li>
            
            <li>17. Reid, C. E., Brauer, M., Johnston, F. H., Jerrett, M., Balmes, J. R., & Elliott, C. T. (2016). Critical review of health impacts of wildfire smoke exposure. <i>Environmental Health Perspectives, 124</i>(9), 1334–1343. <a href="https://doi.org/10.1289/ehp.1409277" target="_blank" rel="noopener noreferrer">https://doi.org/10.1289/ehp.1409277</a></li>
            
            <li>18. State Farm. (2023). Wildfire insurance updates. <a href="https://www.statefarm.com" target="_blank" rel="noopener noreferrer">https://www.statefarm.com</a></li>
            
            <li>19. University of California Agriculture and Natural Resources. (2022). Wildfire preparedness resources. <a href="https://ucanr.edu/sites/fire/" target="_blank" rel="noopener noreferrer">https://ucanr.edu/sites/fire/</a></li>
            
            <li>20. U.S. Government Accountability Office. (2025). Science & tech spotlight: Wildfire detection technologies (GAO-25-108161). <a href="https://www.gao.gov/products/gao-25-108161" target="_blank" rel="noopener noreferrer">https://www.gao.gov/products/gao-25-108161</a></li>
            
            <li>21. Western Fire Chiefs Association (WFCA). (2025). New firefighting technology: Tools for the modern wildfire. <a href="https://www.wfca.com/new-firefighting-technology/" target="_blank" rel="noopener noreferrer">https://www.wfca.com/new-firefighting-technology/</a></li>
            
            <li>22. Wikipedia. (2025). Camp Fire (2018). <a href="https://en.wikipedia.org/wiki/Camp_Fire_(2018)" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Camp_Fire_(2018)</a></li>
            
            <li>23. Wikipedia. (2025). Kincade Fire. <a href="https://en.wikipedia.org/wiki/Kincade_Fire" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Kincade_Fire</a></li>
            
            <li>24. Wikipedia. (2025). 2025 Los Angeles Wildfires. <a href="https://en.wikipedia.org/wiki/2025_Los_Angeles_Wildfires" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/2025_Los_Angeles_Wildfires</a></li>
            
            <li>25. World Economic Forum. (2023). How wildfire risk is changing the insurance industry. <a href="https://www.weforum.org/agenda/2023/08/how-wildfire-risk-is-changing-insurance-industry/" target="_blank" rel="noopener noreferrer">https://www.weforum.org/agenda/2023/08/how-wildfire-risk-is-changing-insurance-industry/</a></li>
            
            <li>26. Cal OES. (2024). Summer leaves, fall approaches: Wildfire threats remain. <a href="https://news.caloes.ca.gov/summer-leaves-fall-approaches-wildfire-threats-remain-2/" target="_blank" rel="noopener noreferrer">https://news.caloes.ca.gov/summer-leaves-fall-approaches-wildfire-threats-remain-2/</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default ProblemAnalysis;