import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import profileImage from '../assets/profile.png';
import Typed from 'react-typed';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #212121, #424242);
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden; /* Hide overflow to prevent scrolling */
`;

const ProfileImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;

const Introduction = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: center;
  margin-top: 1.5rem;
  color: #aaa;

  .highlight {
    color: #ff6f00;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
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
  margin-top: 1rem;
  color: #ff6f00;
  font-weight: bold;
`;

const ActionsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem; /* Decreased the gap between buttons */
  margin-top: 3rem;
`;

// Updated styles for ActionLink and SecondaryActionLink
const ActionButton = styled(Link)`
  background-color: #ff6f00;
  color: white;
  padding: 0.8rem 1.6rem; /* Smaller padding */
  border: none;
  border-radius: 4px; /* Smaller border radius */
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem; /* Smaller font size */
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ffcc80;
    transform: translateY(-3px);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: #ccc;
  font-size: 1.5rem;
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
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  border-radius: 50%;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ffcc80;
    transform: translateY(-3px);
  }
`;

const SecondaryActionLink = styled(ActionLink)`
  background-color: #333;
  font-size: 1.2rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #ccc;
  margin-top: 2rem;
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
      <ProfileImage
        src={profileImage}
        alt="Sanjay Patidar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ filter: darkMode ? 'grayscale(100%)' : 'none' }}
      />
     
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
      <FloatingActionButton to="/contact">
        <FaArrowRight />
      </FloatingActionButton>
    </HomeContainer>
  );
};

export default Home;
