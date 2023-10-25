import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase, FaFilePdf ,FaCertificate} from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import Typed from 'react-typed';
import profileImage from '../assets/profile.png';
import profileImage1 from '../assets/ssss.webp';
import profileImage2 from '../assets/coding.png';


const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #192f3e, #0b132b);
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(25, 47, 62, 0.8), rgba(11, 19, 43, 0.8));
  z-index: -1;
`;

const ProfileImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  animation: flip 5s infinite;

  @keyframes flip {
    0%, 100% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(90deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    75% {
      transform: rotateY(270deg);
    }
  }
`;

const images = [profileImage1, profileImage2, profileImage3];
let currentImageIndex = 0;

const Introduction = styled(motion.p)`
  font-size: 1.8rem;
  line-height: 1.5;
  max-width: 800px;
  text-align: center;
  margin-top: 1rem;
    margin-bottom: 1rem;
  color: #ccc;

  .highlight {
    color: #ff6f00;
    font-weight: bold;
    font-size: 2rem;
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
   margin-bottom: 1rem;
  color: #ff6f00;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ActionsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
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
  margin-top: 2rem;
  background-color: #333;
  padding: 0.5rem 1rem;
  border: 2px solid #ccc;
  border-radius: 20px;
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

  useEffect(() => {
    // Create a slideshow effect
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      // Update the profile image
      document.querySelector('.profile-image').src = images[currentImageIndex];
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <BackgroundOverlay />
     <ProfileImage
        src={profileImage1}
        alt="Sanjay Patidar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="profile-image"
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
         <ActionLink to="/certifications">
          <FaCertificate />
          Explore Certifications
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
       
      </ActionsContainer>
      <Subtitle>
        Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
