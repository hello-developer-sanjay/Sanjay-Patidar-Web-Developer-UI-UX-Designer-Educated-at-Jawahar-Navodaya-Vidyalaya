import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import profileImage1 from '../assets/market.png';
import profileImage2 from '../assets/coding.png'; // Add additional profile images
import Typed from 'react-typed';

const HomeContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1e1e1e, #121212);
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(30, 30, 30, 0.8), rgba(18, 18, 18, 0.8));
  z-index: -1;
`;

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;

const ParallaxLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective-origin: center;
  backface-visibility: hidden;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  transform: translateZ(50px);
`;

const Introduction = styled(motion.p)`
  font-size: 2rem;
  line-height: 2.5;
  max-width: 800px;
  text-align: center;
  margin-top: 2rem;
  color: #fff;

  .highlight {
    color: #ff6f00;
    font-weight: bold;
    font-size: 2.5rem;
  }

  .highlight {
    animation: highlightAnimation 2s ease-in-out infinite;
  }

  @keyframes highlightAnimation {
    0% {
      color: #ff6f00;
      transform: scale(1);
    }
    50% {
      color: #ffcc80;
      transform: scale(1.05);
    }
    100% {
      color: #ff6f00;
      transform: scale(1);
    }
  }
`;

const TypedText = styled.span`
  display: block;
  margin-top: 1.5rem;
  color: #ff6f00;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ActionsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3.5rem;
`;

const ActionLink = styled(Link)`
  background-color: #1e3a5f;
  color: #fff;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff6f00;
    color: #fff;
    transform: translateY(-3px);
  }
`;


const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DarkModeIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FloatingActionButton = styled(ActionLink)`
  background-color: #ff6f00;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffcc80;
    transform: translateY(-5px);
  }
`;

const SecondaryActionLink = styled(ActionLink)`
  background-color: #333;
  font-size: 1.4rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #ccc;
  margin-top: 3rem;
`;

const SubtitleLink = styled.a`
  color: #ffcc80;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff6f00;
  }
`;


const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Automatically slide profile images with a parallax effect
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2); // Change to the number of profile images you have
      controls.start({ x: -currentImageIndex * 100 }); // Adjust 100 to the width of a single image
    }, 5000); // Adjust the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, [currentImageIndex, controls]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <BackgroundOverlay />
      <ParallaxContainer>
        <ParallaxLayer
          initial={{ y: '50%', scale: 1.2 }}
          animate={{ y: '0%', scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 80 }}
        >
          <ProfileImage
            src={profileImage1}
            alt="Sanjay Patidar"
            style={{ filter: darkMode ? 'grayscale(100%)' : 'none' }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          initial={{ y: '50%', scale: 1.2 }}
          animate={{ y: '0%', scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 80 }}
        >
          <ProfileImage
            src={profileImage2}
            alt="Sanjay Patidar"
            style={{ filter: darkMode ? 'grayscale(100%)' : 'none' }}
          />
        </ParallaxLayer>
      </ParallaxContainer>
      <Introduction
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        Hi there! I'm{' '}
        <TypedText>
          <Typed
            strings={['Sanjay Patidar', 'a Web Developer', 'a UI/UX Designer']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </TypedText>
        I create <span className="highlight">stunning web experiences</span>. Explore my projects, skills, and experiences, and let's build something amazing together!
      </Introduction>
      <ActionsContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7 }}
      >
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
        <SecondaryActionLink to="/contact">
          <FaArrowRight />
          Contact Me
        </SecondaryActionLink>
        <ThemeToggle onClick={toggleDarkMode}>
          <DarkModeIcon>
            {darkMode ? <IoMdSunny /> : <IoMdMoon />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </DarkModeIcon>
        </ThemeToggle>
      </ActionsContainer>
      <Subtitle>
        Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
