import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import Typed from 'react-typed';

import profileImage1 from '../assets/profile.pmg';
import profileImage2 from '../assets/market.png';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #192f3e, #0b132b);
  position: relative;
  overflow: hidden;
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const ParallaxLayer = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 150%;
  transform: translate(-50%, -50%);
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Introduction = styled(motion.p)`
  margin-top: 2rem;
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const TypedText = styled.span`
  display: block;
  margin-top: 1.5rem;
  color: #ff6f00;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ActionLink = styled(Link)`
  background-color: #1e3a5f;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 25px;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff6f00;
    transform: translateY(-5px);
  }
`;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2);
      controls.start({ x: -currentImageIndex * 50 });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, controls]);

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <ParallaxBackground>
        <ParallaxLayer
          initial={{ y: '-50%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img src={profileImage1} alt="Background 1" style={{ width: '100%', height: '100%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          initial={{ y: '50%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img src={profileImage2} alt="Background 2" style={{ width: '100%', height: '100%' }} />
        </ParallaxLayer>
      </ParallaxBackground>
      <ProfileImage src={profileImage1} alt="Sanjay Patidar" />
      <Introduction>
        Hi there! I'm{' '}
        <TypedText>
          <Typed
            strings={['Sanjay Patidar', 'a Web Developer', 'a UI/UX Designer']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </TypedText>
        I create <span style={{ color: '#ff6f00', fontWeight: 'bold' }}>stunning web experiences</span>.
        Explore my projects, skills, and experiences, and let's build something amazing together!
      </Introduction>
      <ActionLink to="/skills">
        <FaUserGraduate />
        Explore My Skills
      </ActionLink>
      <ActionLink to="/projects">
        <FaLaptopCode />
        Discover My Projects
      </ActionLink>
      <ActionLink to="/experiences">
        <FaBriefcase />
        View My Experiences
      </ActionLink>
      <ActionLink to="/resume">
        <FaFilePdf />
        Download Resume
      </ActionLink>
    </HomeContainer>
  );
};

export default Home;
