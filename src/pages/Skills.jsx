import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import developerIcon from '../assets/developer.png';
import appDevIcon from '../assets/app-development.png';
import codingIcon from '../assets/coding.png';
import goalIcon from '../assets/goal.png';
import teamLeaderIcon from '../assets/team-leader.png';
import { Helmet } from 'react-helmet';

const SkillsContainer = styled.div`
  width: 100%;  
    overflow: hidden;
  padding: 2rem;

  width: calc(100% - 4rem);  

    background-color: #050816; 

`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  position: relative;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  border: 2px solid #ff6b6b;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SkillName = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-family: 'Caveat', cursive;
  color: #3d5a80;
  text-shadow: 2px 2px 4px rgba(61, 90, 128, 0.5);
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 600;
`;

const SkillDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0;
  color: #fff;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;

  ${SkillCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Skills = () => {
    const skillsData = [
    {
      name: 'Tech Architect',
      icon: developerIcon,
      description: 'Crafting the structural masterpiece of the digital landscape with expertise in Structured HTML and Algorithms.',
    },
    {
      name: 'Innovative Developer',
      icon: appDevIcon,
      description: 'Pioneering smart and efficient solutions for smartphones, blending Analytical Mindset, DSA, and JavaScript mastery.',
    },
    {
      name: 'Design Alchemist',
      icon: codingIcon,
      description: 'Transforming concepts into reality, shaping intuitive digital interfaces for user delight using CSS and Tailwind.',
    },
    {
      name: 'Strategic Navigator',
      icon: goalIcon,
      description: 'Navigating the tech terrain with precision and strategic insight, fueled by clear objectives and effective use of Node and Express.',
    },
    {
      name: 'Collaborative Leader',
      icon: teamLeaderIcon,
      description: 'Leading and inspiring tech teams to success, harmonizing collective efforts, and steering towards excellence in Git Version Control.',
    },
    {
      name: 'Intuitive UX Maestro',
      icon: codingIcon,
      description: 'Crafting user-centric experiences with React JS, blending innovation with effective communication for seamless interaction.',
    },
    {
      name: 'Backend Sorcerer',
      icon: codingIcon,
      description: 'Integrating backend magic with Node JS, transforming ideas into functional realities, and ensuring a smooth user experience.',
    },
    {
      name: 'API Maestro',
      icon: codingIcon,
      description: 'Collaborating seamlessly in the API realm with Express JS, ensuring data flow like a well-choreographed symphony.',
    },
  ];

  return (
    <SkillsContainer>
       <Helmet>
              <title>Sanjay Patidar | Web Developer | Skills and Expertise</title>

        <meta
          name="description"
          content="Discover the diverse skills of Sanjay Patidar including Tech Architecture, Innovative Development, Design Alchemy, Strategic Navigation, Collaborative Leadership, Intuitive UX Design, Backend Sorcery, and API Mastery."
        />
        <meta name="keywords" content="Sanjay Patidar, skills, Tech Architecture, Innovative Development, Design Alchemy, Strategic Navigation, Collaborative Leadership, Intuitive UX Design, Backend Sorcery, API Mastery" />
        <meta property="og:title" content="Sanjay Patidar | Web Developer | Skills and Expertise" />
        <meta property="og:description" content="Discover the diverse skills of Sanjay Patidar including Tech Architecture, Innovative Development, Design Alchemy, Strategic Navigation, Collaborative Leadership, Intuitive UX Design, Backend Sorcery, and API Mastery." />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/skills" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay Patidar | Web Developer | Skills and Expertise" />
        <meta name="twitter:description" content="Discover the diverse skills of Sanjay Patidar including Tech Architecture, Innovative Development, Design Alchemy, Strategic Navigation, Collaborative Leadership, Intuitive UX Design, Backend Sorcery, and API Mastery." />
        <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
      </Helmet>

      <SkillsGrid>
        {skillsData.map((skill, index) => {
          const [ref, inView] = useInView({ triggerOnce: true });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) {
              controls.start({
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              });
            }
          }, [controls, inView]);

          return (
            <SkillCard
              key={index}
              ref={ref}
              initial={{ scale: 0.8, opacity: 0, rotate: 90 }}
              animate={controls}
            >
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          );
        })}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
