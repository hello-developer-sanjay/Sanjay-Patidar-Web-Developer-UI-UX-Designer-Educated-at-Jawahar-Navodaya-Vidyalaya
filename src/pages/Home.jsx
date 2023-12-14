/* eslint-disable react/no-unescaped-entities */
import {  useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
  FaFilePdf,
  FaCertificate,
} from 'react-icons/fa';

import Typed from 'react-typed';

import profileImage1 from '../assets/ssss.webp';
import profileImage2 from '../assets/coding.png';
const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #0d1b2a, #330867); /* Cosmic blue to deep purple */
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  
  /* Add a subtle box shadow for depth */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  /* Add a border with a neon glow effect */
  border: 2px solid #3f51b5; /* Royal blue */
  border-radius: 10px;

  /* Neon glow effect */
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    border-radius: 12px;
    background: linear-gradient(45deg, #ff4081, #3f51b5, #009688, #ff4081);
    background-size: 400% 400%;
    animation: neonGlow 8s linear infinite;
  }

  /* Animation for the neon glow effect */
  @keyframes neonGlow {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 400% 400%;
    }
  }
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
  animation: flip 5s infinite, glow 2s alternate infinite;

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

  @keyframes glow {
    0% {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
    100% {
      box-shadow: 0px 0px 40px rgba(255, 165, 0, 0.8), 0px 0px 60px rgba(255, 165, 0, 0.6);
    }
  }
`;


const images = [profileImage1, profileImage2];
let currentImageIndex = 0;

const Introduction = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 800px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #ffffff; /* White on hover */

  
  .highlight {
    position: relative;
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient highlight */
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for depth */
    padding-bottom: 5px;
    margin-bottom: -5px;

    /* Animation for the highlight class */
    animation: highlightAnimation 3s ease-in-out infinite;
  }


  @keyframes highlightAnimation {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient border */
    margin-top: 8px;
    position: relative;
    animation: shimmerAnimation 3s ease-in-out infinite;
  }

  
  @keyframes shimmerAnimation {
    0% {
      background-position: -200% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
   @media (max-width: 768px) {
  margin-top:2rem;
  }
`;

const TypedText = styled.span`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #00bcd4, #2196f3); /* Gradient from turquoise to blue */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  /* Animation for a subtle glow effect */
  animation: glowAnimation 2s ease-in-out infinite;

  /* Keyframes for the glow animation */
  @keyframes glowAnimation {
    0% {
      box-shadow: 0 0 5px rgba(0, 188, 212, 0.5), 0 0 10px rgba(0, 188, 212, 0.5); /* Turquoise glow */
    }
    50% {
      box-shadow: 0 0 10px rgba(0, 188, 212, 0.8), 0 0 20px rgba(0, 188, 212, 0.8); /* Stronger glow */
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 188, 212, 0.5), 0 0 10px rgba(0, 188, 212, 0.5); /* Turquoise glow */
    }
  }
`;



const ActionsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionLink = styled(Link)`
  background: linear-gradient(45deg, #ff6f00, #ffcc80);
  color: #1a1a1a;
  padding: 0.8rem 1rem;
  border: 2px solid #ff6f00;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s, color 0.3s;
  cursor: pointer;
  position:relative;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
background: linear-gradient(to bottom right, #8a2be2, #4a90e2); 
color: #fff;
    transform: translateY(-7px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.5);
  }
`;
const NavLinkItem = styled(motion.div)`
  /* Styles for each NavLink item */
  opacity: 0;
  transform: translateY(20px); /* Initial position, move it down */
`;
const SecondaryActionLink = styled(ActionLink)`
  background-color: #333;
  font-size: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
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
        {/* Map through the NavLink items and apply motion animation */}
        {[
          { to: "/skills", text: "Explore My Skills", icon: <FaUserGraduate /> },
          { to: "/education", text: "My Education", icon: <FaUserGraduate /> },
          { to: "/projects", text: "Discover My Projects", icon: <FaLaptopCode /> },
          { to: "/certifications", text: "Explore Certifications", icon: <FaCertificate /> },
          { to: "/experiences", text: "View My Experiences", icon: <FaBriefcase /> },
          { to: "/resume", text: "Download Resume", icon: <FaFilePdf /> },
          { to: "/contact", text: "Contact Me", icon: <FaArrowRight /> },
        ].map((link, index) => (
          <NavLinkItem
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <ActionLink to={link.to}>
              {link.icon}
              {link.text}
            </ActionLink>
          </NavLinkItem>
        ))}
      </ActionsContainer>
      <Subtitle>
        Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
