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
      title: "🙋 Who is Sanjay Patidar and what's his story?",

},

{

  description: '➥ Sanjay Patidar is the creative force behind EduXcel, a trailblazer on a mission to transform the tech landscape! With a background as a MERN stack developer, Sanjay brings a unique blend of technical expertise and visionary leadership to the table.',
},






{
title: "🙋 What sets Sanjay apart from other entrepreneurs?",
 
},

{
    description: "➥ Sanjay isn't your average entrepreneur. He's a web development virtuoso, specializing in the MERN stack - MongoDB, Express.js, React, and Node.js. Whether it's crafting sleek user interfaces or architecting robust backend systems, Sanjay's skills are unmatched.",
   
  },
{
  title: "🙋 Seriously, his talent knows no bounds! What's the secret to Sanjay's success?",
   
  },
  {
      description: "➥ It's all about pushing boundaries and aiming for the stars. Sanjay is like a digital magician, weaving spellbinding experiences that captivate and inspire. His dedication to mastering the intricacies of web development and his commitment to excellence set him apart in the industry.",
     
    },
   
  ];  

  return (
  
      <section className={`relative w-full min-h-screen mx-auto`}>

        <div>
         
            <div className="flex-container">
      

              <div className="lg:w-1/2 lg:pl-12 why-us-content">
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
