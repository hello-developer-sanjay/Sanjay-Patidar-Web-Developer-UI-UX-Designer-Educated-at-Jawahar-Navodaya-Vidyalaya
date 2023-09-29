import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaUserGraduate, FaLaptopCode, FaBriefcase, FaFilePdf } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import Typed from 'react-typed';
import profileImage from '../assets/profile.png';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1a1f24, #0b132b);
  padding: 3rem;
  box-sizing: border-box;
  position: relative;
  color: #fff;
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

const ParallaxContainer = styled.div`
  perspective: 1px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(${props => props.depth}px) scale(1.1);
  z-index: ${props => props.index};
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.opacity || 1};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
  padding: 2rem;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const Introduction = styled(motion.p)`
  font-size: 1.8rem;
  line-height: 2.2;
  max-width: 800px;
  text-align: center;
  margin-top: 2rem;
`;

const TypedText = styled.span`
  display: block;
  margin-top: 1.5rem;
  color: #ff6f00;
  font-weight: bold;
  font-size: 1.2rem;
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

const Subtitle = styled.p`
  font-size: 1.8rem;
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

  return (
    <ParallaxContainer>
      <ParallaxLayer background="../assets/coding.png" depth={-200} />
      <ParallaxLayer background="../assets/market.png" depth={-400} />
      <ParallaxLayer background="../assets/profile.png" depth={-600} />

      <HomeContainer>
        <BackgroundOverlay />
        <ContentWrapper>
          <ProfileImage src={profileImage} alt="Sanjay Patidar" />

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
            I create <span className="highlight">stunning web experiences</span>. Explore my projects, skills, and experiences, and let's build something amazing together!
          </Introduction>

          <ActionsContainer>
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
            <ActionLink to="/contact">
              <FaArrowRight />
              Contact Me
            </ActionLink>
            <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
              <DarkModeIcon>
                {darkMode ? <IoMdSunny /> : <IoMdMoon />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </DarkModeIcon>
            </ThemeToggle>
          </ActionsContainer>

          <Subtitle>
            Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
          </Subtitle>
        </ContentWrapper>
      </HomeContainer>
    </ParallaxContainer>
  );
};

export default Home;
