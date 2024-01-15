/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import {  useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
  import { Helmet } from 'react-helmet';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import CreaTeaImage from '../assets/tea.gif';

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
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
  transform-origin: center;
  animation: heartbeat 1.5s infinite, rotateAndGlow 8s infinite, bounce 2s alternate infinite;

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes rotateAndGlow {
    0%, 100% {
      transform: rotate(0deg) scale(1);
      box-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
    }
    25% {
      transform: rotate(90deg) scale(1.2);
      box-shadow: 0 0 15px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 165, 0, 0.7);
    }
    50% {
      transform: rotate(180deg) scale(1);
      box-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
    }
    75% {
      transform: rotate(270deg) scale(1.2);
      box-shadow: 0 0 15px rgba(255, 165, 0, 0.9), 0 0 30px rgba(255, 165, 0, 0.7);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
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
  margin-top: 2rem;
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
const H1 = styled.h1`
  font-size: 3xl;
  font-weight: 900;
  color: #2ecc71;
  margin-right: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px; /* Increase letter spacing for a stylish look */
  transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const H1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCreaTeaImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(46, 204, 113, 0.5);
`;


const StyledSpan = styled.span`
  color: #ffffff;
  font-size: 1.5rem; /* Increase font size for emphasis */
  font-weight: bold;
  letter-spacing: 3px; /* Add more letter spacing */
  text-transform: uppercase;
  text-decoration: underline; /* Add an underline for a decorative touch */
  /* Add any additional styles here */
`;const TypedText = styled.span`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 3rem;
  background: linear-gradient(45deg, #00bcd4, #2196f3); /* Gradient from turquoise to blue */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  /* Animation for a subtle glow effect */
  animation: glowAnimation 2s ease-in-out infinite, shakeAnimation 3s ease-in-out infinite;

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

  /* Keyframes for a subtle shake animation */
  @keyframes shakeAnimation {
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-5px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;



const ActionsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  gap: 1rem;
  margin-top: 2rem;
   @media (max-width: 768px) {
  
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  }
`;

const ActionLink = styled(Link)`
  position: relative;
  overflow: hidden;
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(to bottom right, #8a2be2, #4a90e2);
    color: #fff;
    transform: translateY(-7px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.5);
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #ff6f00, #ffcc80);
    border-radius: 30px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:after {
    content: 'Explore'; /* Display better text here */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover:after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
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
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ff6f00;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: linear-gradient(45deg, #ff6f00, #ffcc80);
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: bottom center;
      transition: transform 0.3s;
    }
  }
`;

  


const Home = () => {
 useEffect(() => {
    // Display an info toast message
    toast.info("Sit tight! Enjoy smooth transitions as you explore my portfolio. Each page is carefully crafted for a seamless experience.", {
      position: "bottom-right", // Set toast position
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
    });
  }, []);
  const controlsArray = Array.from({ length: 7 }, () => useAnimation());

  const animateInView = async (index) => {
    await controlsArray[index].start({
      y: 0,
      opacity: 1,
      rotate: [0, (index % 2 === 0 ? 360 : -360)],
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
      },
    });
  };
 useEffect(() => {
  const saveUserLocation = async () => {
    try {
      // Get user's current position
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
        });
      });

      const { latitude, longitude } = position.coords;
      console.log('User coordinates:', latitude, longitude);

      // Save user visit to the server
      const saveLocationResponse = await fetch('https://portfolio-back-aruc.onrender.com/api/uservisited', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
        }),
      });

      const saveLocationData = await saveLocationResponse.json();
      console.log('User location saved:', saveLocationData);
    } catch (error) {
      console.error('Error saving user location:', error);
    }
  };

  saveUserLocation();
}, []);

  // Helper function to calculate distance between two coordinates
  function distance(coord1, coord2) {
    const [lat1, lon1] = coord1.coordinates;
    const [lat2, lon2] = coord2;
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach(async (_, index) => {
        await animateInView(index);
      });
    }
  }, [controlsArray, inView]);

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
            <Helmet>
    <title>Sanjay Patidar | Expert Web Developer & UI/UX Designer | Crafting Digital Experiences</title>
    <meta
      name="description"
      content="Explore the professional journey of Sanjay Patidar, a skilled Web Developer and UI/UX Designer. Dive into a showcase of his expertise in web development and UI/UX design, featuring a collection of innovative projects, valuable experiences, and much more. Navigate through a portfolio that reflects passion, creativity, and a commitment to delivering exceptional digital solutions."
    />
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'ItemList',
      })}
    </script>
  </Helmet>
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
      <ActionsContainer>
      {[
        { to: "/skills", text: "Explore My Skills", icon: <FaUserGraduate /> },
        { to: "/education", text: "My Education", icon: <FaUserGraduate /> },
        { to: "/projects", text: "Discover My Projects", icon: <FaLaptopCode /> },
        { to: "/certifications", text: "Explore Certifications", icon: <FaCertificate /> },
        { to: "/experiences", text: "View My Experiences", icon: <FaBriefcase /> },
        { to: "/resume", text: "Download Resume", icon: <FaFilePdf /> },
        { to: "/contact", text: "Contact Me", icon: <FaArrowRight /> },
      ].map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controlsArray[index]}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          ref={ref}
          onClick={() => animateInView(index)}
        >
          <ActionLink to={link.to}>
            {link.icon}
            {link.text}
          </ActionLink>
        </motion.div>
      ))}
    </ActionsContainer>
 
      <Subtitle>
        Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
      </Subtitle>
   <FlexContainer>
        <H1Container>
          <H1>Designed With
</H1>
          <h1 className="text-4xl font-semibold text-blue-600 flex items-center creativity">
            <StyledSpan className="text-white-600">Crea</StyledSpan>
            <StyledCreaTeaImage src={CreaTeaImage} alt="CreaTea" className="mx-2" />
            <StyledSpan className="text-green-600">vity</StyledSpan>
          </h1>
        </H1Container>
      </FlexContainer>
    </HomeContainer>
  );
};

export default Home;
