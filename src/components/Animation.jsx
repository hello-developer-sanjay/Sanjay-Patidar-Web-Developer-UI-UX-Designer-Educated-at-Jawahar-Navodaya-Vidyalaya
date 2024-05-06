import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';


const Next = styled.h1`
font-size: 1.1rem;
color: #f3f3f3;
margin-bottom: 0.8rem;
line-height: 1.4;
text-align: justify;
border-left: 4px solid #5d00ff;
border-right: 4px solid #5d00ff;

padding-left: 2px;
padding-right:2px;
border-radius: 8px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Animation  = () => {
  const [ inViewImage] = useInView({ triggerOnce: true });
  const [, inViewContent] = useInView({ triggerOnce: true });
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
                        scale: 1,
                        transition: {
                          duration: 2,
                          delay: index * 0.2,
                          type: 'spring',
                          stiffness: 100,
        },
      }));
    }
  }, [inViewContent, controlsContent]);

  const contentBlocks = [

    {
      title: '🙋 Who is Sanjay Patidar, the Tech Innovator?',
      description: "Sanjay Patidar, born on May 24, 1997, is a tech innovator from Indore, India. With a passion for digital innovation, he thrives on pushing technology boundaries. Renowned for directing 6 projects, Sanjay showcases diverse technical expertise and a relentless pursuit of excellence.",
    },
    {
      title: '🙋 What Technologies Does Sanjay Patidar Master?',
      description: "Explore the vast technology stack mastered by Sanjay Patidar, including React JS, Node JS, Express JS, MongoDB, Git, Docker, Kubernetes, AWS/Azure/GCP, GraphQL, and more. With expertise spanning both frontend and backend development, Sanjay crafts robust, scalable solutions tailored to meet diverse client needs.",
    },
    {
      title: '🙋 How Did Sanjay Patidar Optimize SEO Strategies?',
      description: "Sanjay Patidar achieved a flawless SEO score of 100, capturing over 28,000 impressions across 116+ countries. His mastery of on-page/off-page SEO techniques propelled websites to the top of search engine rankings, boosting visibility and engagement.",
    },
   
    
  ];  

  return (
  
      <section className={`relative w-full min-h-screen mx-auto`}>

        <div>
         
            <div className="flex-container">
      

              <div className="lg:w-1/2 lg:pl-12 why-content">
                {contentBlocks.map((block, index) => {
                  const [refContent, inViewContent] = useInView({ triggerOnce: true });
                  const controlsContent = useAnimation();

                  useEffect(() => {
                    if (inViewContent) {
                      controlsContent.start({
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 2,
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
<Next>                       {block.title}</Next> 
                  <Next> {block.description}</Next>     
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
      </section>

  );
};

export default Animation;
