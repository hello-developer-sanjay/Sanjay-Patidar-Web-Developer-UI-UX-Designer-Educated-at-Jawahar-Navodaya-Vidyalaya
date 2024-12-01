/* eslint-disable react/jsx-no-target-blank */
import  { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence,  } from "framer-motion";
import { FaLinkedin,FaUserTie ,FaUserGraduate , FaTwitter, FaInstagram, FaGithub, FaUsers, FaHome, FaBlog, FaBriefcase, FaUserCog, FaChalkboardTeacher, FaFileDownload, FaEnvelope } from "react-icons/fa";

import { toast,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const FooterContainer = styled(motion.footer)`
   position: relative;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: #050816;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  
  /* Create a complex and artistic background pattern */
  background: 
    radial-gradient(ellipse at center, rgba(5, 8, 22, 0.15) 0%, rgba(5, 8, 22, 0) 30%, rgba(5, 8, 22, 0.4) 50%, rgba(5, 8, 22, 0) 70%, rgba(5, 8, 22, 0.15) 100%),
    linear-gradient(90deg, #010102, #010204);
  
  /* Optional: Add animation or transition properties for a dynamic effect */
  transition: background 0.3s ease-in-out;
`;


const Tooltip = styled.div`
position: absolute;
top: -40px;
border: 2px solid #ff6b6b;

left: 50%;
transform: translateX(-50%);
background-color: #333;
color: #fff;
padding: 8px 12px;
border-radius: 8px;
font-size: 14px;
font-weight: bold;
opacity: ${props => (props.visible ? 1 : 0)};
transition: opacity 0.3s ease;
z-index: 999;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SocialIconWrapper = ({ icon, label, link }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
      <SocialIcon
        color={icon.props.color}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </SocialIcon>
      <Tooltip visible={isTooltipVisible}>{label}</Tooltip>
    </div>
  );
};

const Text = styled.h1`
  margin-top: 0rem;;
  font-size: 1.1rem;
  text-align: left;
  letter-spacing: 0.2px; 
  color: #fff; 
  padding: 2px 5px; /* Padding to create space around the text */

`;

const BorderLineTop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  height: 4px;
  background: linear-gradient(to right, #ffbb00, #e85d04);
  background-size: 200% 100%;
  box-shadow: 0 0 10px rgba(232, 93, 4, 0.8);
  animation: gradientAnimation 2s linear infinite;
  @keyframes gradientAnimation {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

const BorderLineBottom = styled(BorderLineTop)`
  top: auto;
  bottom: 0;
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 30px rgba(255, 255, 255, 0.8);
  }
`;

const CatchyMessage = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: white;
  word-wrap: break-word;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  /* Add a little bounce animation */
  animation: ${bounceAnimation} 1s infinite;

  /* Add fadeIn animation */
  animation: ${fadeIn} 1s ease-in-out;

  /* Add a neon glow effect */
  animation: ${neonGlow} 1s infinite;

  /* Combine animations */
  animation: ${bounceAnimation} 1s infinite, ${fadeIn} 1s ease-in-out, ${neonGlow} 1s infinite;
`;
const SocialIconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${props => props.color || '#ff6347'};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(360deg);
    background: ${props => props.color || '#e74c3c'};
  }

  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 50%;
  }

  &:hover:before {
    transform: translateY(0);
  }

  /* Add a heartbeat animation for extra flair */
  animation: heartbeat 1.5s infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
const FooterButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
`;

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
gap : 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavHeading = styled.h2`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Footer = () => {
  const catchyMessages = [
    "Stay Curious. Connect with Us!",
    "Exploring the Future. Get Involved!",
  ];
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleCareerInsightsClick = () => {
    if (!isToastVisible) {
      toast.info("Please wait! You're now being redirected to delve into Blog insights on Sanjay Patidar's Portfolio Website...", {
        autoClose: 3000,
        onOpen: () => setIsToastVisible(true),
        onClose: () => setIsToastVisible(false),
      });

      setTimeout(() => {
        window.open("https://sanjay-patidar.vercel.app/blogs", "_blank");
      }, 3000); 
    }
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };

useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toast.info(
          "Hey there! If you have feedback or a question for the admin, feel free to submit them separately. We appreciate your input!",
          {
            position: "top-right", 
            autoClose: 10000, 
            hideProgressBar: false, 
            closeOnClick: true, 
            pauseOnHover: true, 
            draggable: true, 
            progress: undefined,
            style: {
              background: "#487503", 
              color: "#fff", 
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", 
              borderRadius: "10px", 
            },
          }
        );
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const footerElement = document.getElementById("footer");

  if (footerElement) {
    observer.observe(footerElement);
  }

  return () => {
    if (footerElement) {
      observer.unobserve(footerElement);
    }
  };
}, []); // Make sure to i
  const getRandomCatchyMessage = () =>
    catchyMessages[Math.floor(Math.random() * catchyMessages.length)];

  const socialButtons = [
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/sanjay-patidar-25b580292" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/hello-developer-sanjay" },
    { icon: <FaTwitter />, label: "Twitter", link: "#" },
    { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/sanju.init" },
  ];

 
  return (
    <FooterContainer id="footer">
 
      <BorderLineTop
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <BorderLineBottom
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <CatchyMessage>
        {getRandomCatchyMessage()}
      </CatchyMessage>
     
      <AnimatePresence>
      <SocialIconsContainer>
      {socialButtons.map((button, index) => (
        <SocialIconWrapper key={index} icon={button.icon} label={button.label} link={button.link} />
      ))}
    </SocialIconsContainer>
      </AnimatePresence>

      <NavigationContainer>
  <Column>
    <NavHeading>Main</NavHeading>
    <NavLink exact to="/">
      <FaHome /> Home 
    </NavLink>
    <NavLink exact to="/courses-by-sanjay-patidar">
      <FaBlog /> Courses
    </NavLink>
    <NavLink to="/blogs">
      <FaBlog/> Blogs
    </NavLink>
    <NavLink to="#" aria-label="Blogs" onClick={handleCareerInsightsClick}>
      <FaChalkboardTeacher /> Career Insights
    </NavLink>  
    <NavLink to="/projects">
      <FaBriefcase /> Projects
    </NavLink>
    <NavLink to="/protected">
      <FaUserCog /> Admin
    </NavLink>
    <NavLink to="/founder-eduxcel">
      <FaUserTie /> Founder Profile
    </NavLink>
   
  </Column>
  <Column>
    <NavHeading>NavLinks</NavHeading>
    <NavLink to="/skills">
      <FaBriefcase /> Explore My Skills
    </NavLink>
    <NavLink to="/education">
      <FaUserGraduate/>My  Education
    </NavLink>
    <NavLink to="/experiences">
      <FaBriefcase />View My Experiences
    </NavLink>
    <NavLink to="/resume">
      <FaFileDownload /> Download Resume
    </NavLink>
    <NavLink to="/contact">
      <FaEnvelope />Contact  Me
    </NavLink>
  </Column>
  <Column>  
    <NavHeading>Certifications</NavHeading>
    <NavLink to="/certifications">
      <FaHome /> Certifications Home
    </NavLink>
    <NavLink to="/certifications/Django%20Features%20and%20Libraries">
      <FaGithub/> Django Features and Libraries
    </NavLink>
    <NavLink to="/certifications/MERN%3A%20Advanced%20MERN%20Development">
      <FaChalkboardTeacher /> MERN: Advanced MERN Development
    </NavLink>
  </Column>
</NavigationContainer>


<Text>
</Text>
<Text>Discover the world of Sanjay Patidar: Innovator, Developer, and Founder. Ready to explore? <a style={{ color: '#FAF7F7', padding: '2px 4px', border: '2px solid #ff6b6b', borderRadius: '30px', cursor: 'pointer', textDecoration: 'none' }} href='https://sanjay-patidar.vercel.app/' target='_blank'>Sanjay Patidar</a> to dive in!</Text>
<Text>
  <span style={{ color: '#ffbb00', fontWeight: 'bold', fontSize: '1.2rem' }}>©</span> All rights reserved to&nbsp;
  <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#ffbb00' }}>EduXcel</span> founded by&nbsp;
  <span style={{ fontWeight: 'bold', color: '#ffbb00' }}>Sanjay Patidar</span><br />
  <span style={{ fontSize: '0.9rem', color: '#ccc' }}>{getCurrentDate()} | India</span>
</Text>
    </FooterContainer>
  );
};

export default Footer;
