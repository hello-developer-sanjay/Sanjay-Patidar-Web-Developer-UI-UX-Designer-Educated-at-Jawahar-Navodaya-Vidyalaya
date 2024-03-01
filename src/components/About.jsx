import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaChalkboardTeacher, FaUserGraduate, FaClock } from 'react-icons/fa';
import WhyUsImage from '../assets/whyus.png';
import Skill from '../pages/Skill.jsx'
import '../styles/home.css'; 

const ClientContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 2rem;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  background-color: #050816; 
`;


const About = () => {
  const [refImage, inViewImage] = useInView({ triggerOnce: true });
  const [refContent, inViewContent] = useInView({ triggerOnce: true });
  const controlsImage = useAnimation();
  const controlsContent = useAnimation();

  useEffect(() => {
    if (inViewImage) {
      controlsImage.start({
        scale: [0.8, 1.2, 1],
        rotateY: [0, 360],
        opacity: [0, 1],
        transition: {
          duration: 2,
          ease: 'easeInOut',
          bounce: 0.5,
        },
      });
    }
  }, [inViewImage, controlsImage]);

  useEffect(() => {
    if (inViewContent) {
      controlsContent.start((index) => ({
        y: 0,
        opacity: 1,
        rotate: [0, index % 2 === 0 ? 360 : -360],
        transition: {
          duration: 1.5,
          delay: index * 0.2,
          type: 'spring',
          stiffness: 100,
        },
      }));
    }
  }, [inViewContent, controlsContent]);

  const contentBlocks = [
    {
      title: 'Remarkable Journey of Sanjay Patidar',
      description: 'Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors.'
    },
    {
      title: 'Educational Odyssey at Jawahar Navodaya Vidyalaya School',
      description: 'His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence.'
    },
    {
      title: 'Active Participation in Coding Competitions',
      description: 'Beyond the confines of academia, Sanjay\'s passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills.'
    },
    {
      title: 'Exceptional Digital Solutions',
      description: 'Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design.'
    },
    {
      title: 'Serving Clients Across India',
      description: 'Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including Chandigarh, Punjab, Mumbai, Maharashtra, Bangalore, Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh, and beyond.'
    }
  ];
  

  return (
    <ClientContainer>
      <section className={`relative w-full min-h-screen mx-auto`}>

        <div>
         
          <div className="why-us-section">
            <div className="flex-container">
              <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="shining-ring-container">
                  <div className="shining-ring"></div>
                  <div className="flex-container">
                    <motion.img
                      ref={refImage}
                      src={WhyUsImage}
                      alt="Why Choose Us"
                      className="w-full lg:w-full rounded-lg shadow-lg mb-6 lg-mb-0"
                      initial={{ scale: 0, rotateY: 0, opacity: 0 }}
                      animate={controlsImage}
                      style={{ visibility: inViewImage ? 'visible' : 'hidden' }}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12 why-us-content">
                {contentBlocks.map((block, index) => {
                  const [refContent, inViewContent] = useInView({ triggerOnce: true });
                  const controlsContent = useAnimation();

                  useEffect(() => {
                    if (inViewContent) {
                      controlsContent.start({
                        y: 0,
                        opacity: 1,
                        rotate: [0, index % 2 === 0 ? 360 : -360],
                        transition: {
                          duration: 1.5,
                          delay: index * 0.2,
                          type: 'spring',
                          stiffness: 100,
                        },
                      });
                    }
                  }, [inViewContent, controlsContent, index]);

                  return (
                    <motion.div
                      key={index}
                      ref={refContent}
                      className="mb-8"
                      initial={{ y: 20, opacity: 0 }}
                      animate={controlsContent}
                    >
                      <motion.h3 className="text-3xl font-bold mb-4 text-purple-500">
                        {block.title}
                      </motion.h3>
                      <motion.p className="text-gray-800 mb-6 text-lg">
                        {block.description}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

    

        </div>
      </section>
      <Skill/>
    </ClientContainer>
  );
};

export default About;
