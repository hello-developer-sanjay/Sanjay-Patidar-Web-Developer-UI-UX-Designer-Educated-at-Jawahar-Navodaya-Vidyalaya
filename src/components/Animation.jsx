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
      title: '🙋 Who is Sanjay Patidar, the Visionary Engineer?',
      description: "Sanjay Patidar, born on May 24, 1998, in Neemuch, India, is a forward-thinking engineer specializing in web development and scalable digital solutions. With a passion for innovation, he has led diverse projects, blending creativity with technical precision to deliver impactful results.",
    },
    
    {
      title: '🙋 What Defines Sanjay Patidar’s Approach to Digital Excellence?',
      description: "Sanjay’s meticulous attention to detail and strategic mindset have earned his projects widespread recognition, including achieving top search rankings globally. Through his expertise in system design, real-time applications, and collaborative teamwork, Sanjay consistently redefines digital possibilities.",
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
