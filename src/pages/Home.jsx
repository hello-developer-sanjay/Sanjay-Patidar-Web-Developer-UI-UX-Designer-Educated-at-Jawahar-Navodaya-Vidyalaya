/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import {  useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
  import { Helmet } from 'react-helmet';
  import UAParser from 'ua-parser-js';
import About from "../components/About"
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import DuckImage from "../assets/duck4.gif";
import unlock from "../assets/unlock.gif";
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
import profileImage2 from '../assets/sixpack.jpeg';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  /* Creative lining background */
  --line-color: rgba(255, 255, 255, 0.8);
  --line-spacing: 10px;
  --animation-duration: 6s;
  --animation-timing: linear;
  
  background: linear-gradient(
    45deg,
    var(--line-color) calc(50% - var(--line-spacing)),
    transparent 0,
    transparent calc(50% + var(--line-spacing)),
    var(--line-color) 0
  );
  background-size: var(--line-spacing) var(--line-spacing);

  /* Animation for the background */
  animation: moveBackground var(--animation-duration) var(--animation-timing) infinite linear alternate-reverse;

  @keyframes moveBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: var(--line-spacing) var(--line-spacing);
    }
  }

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

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const H1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
    margin-top: 0rem;
  
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #2ecc71;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px; /* Increase letter spacing for a stylish look */
  transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
`;

const StyledCreaTeaImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(46, 204, 113, 0.5);
`;

const StyledUnlockImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 0.5rem; 
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
`;

const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  order: 2;
  margin-top: 1rem;
  margin-right: 1rem;
  
  @media (min-width: 768px) {
    order: 2;
    text-align: left;
    margin-top: 0;

  }

  
  @media (max-width: 768px) {
    
    max-width: 90%;

  }
`;

const ProfileImageContainer = styled.div`
  flex-shrink: 0;

  @media (min-width: 768px) {
    order: 1;
    margin-right: 5rem;
    align-self: flex-start; /* Align the image to the start of the container on larger screens */
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
  width: 380px;
  height: 380px;
  margin-top: 2rem;

  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6);
  transform-origin: center;
  animation: heartbeat 1.5s infinite, rotateAndGlow 8s infinite, bounce 2s alternate infinite;

  &.loading {
    border: 2px solid transparent;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      z-index: 1;
      border-radius: 50%;
      border: 2px solid #fff; // Change the color as needed
      animation: loadingAnimation 1.5s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 100%;
      border-left: 2px dashed #fff; // Change the color as needed
      animation: loadingLineAnimation 1.5s linear infinite;
    }
  }

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadingLineAnimation {
    0% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }




  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  margin-top : 1rem;
}

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
  margin-top : 2rem;
  margin-bottom: 1rem;
  color: #ffffff; /* White on hover */

  
  .highlight {
    position: relative;
    display: inline-block;
    font-size: 4rem;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(45deg, #ff4081, #00bcd4); /* Gradient highlight */
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Shadow for depth */
    padding-bottom: 5px;
    margin-bottom: 1px;
    line-height: 4rem;
    /* Animation for the highlight class */
    animation: highlightAnimation 3s ease-in-out infinite;
    @media (max-width: 768px) {
  font-size: 1.5rem;
  line-height: 2rem;

  }
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
  margin-top:1rem;
  font-size: 1.5rem;

  }
`;


const TypedText = styled.span`
  display: block;
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-transform:uppercase;
  font-style: italic;
  font-weight: bold;
  font-size: 4rem;
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
    margin-bottom: 1rem;

  }

  /* Change the color of the typing text */
  @media (prefers-color-scheme: dark) {
    color: #51D5FF; /* Bright yellow in dark mode */
  }

  @media (prefers-color-scheme: light) {
    color: #ffffff; /* Deep orange in light mode */
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
  margin-bottom:0rem;
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




const SocialIconsContainer = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
margin-top: 1rem;
@media (max-width: 768px) {
  display: none;
  margin-top: 0rem;

}

`;
const socialButtons = [
  { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/sanjay-patidar-25b580292" },
  { icon: <FaGithub />, label: "GitHub", link: "https://github.com/hello-developer-sanjay" },
  { icon: <FaTwitter />, label: "Twitter", link: "#" },
  { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/sanjay_patidar_mcmxcviii" },
];

const SocialIcon = styled(motion.a)`
display: flex;
align-items: center;
margin-top:1rem;
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
  


const Home = () => {
  const [formData, setFormData] = useState({
    latitude: null,
    longitude: null,
  });
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setFormData({
          latitude,
          longitude,
        });

        // Send coordinates to the server
        fetch('https://portfolio-back-aruc.onrender.com/api/store-visited-location', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ latitude, longitude }),
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error storing location:', error));
      },
      (error) => {
        console.error('Error getting location:', error.message);
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
  const getDeviceOwnerDetails = () => {
    return new Promise((resolve, reject) => {
      try {
        const userAgent = navigator.userAgent;
        const parser = new UAParser();
        parser.setUA(userAgent);
        const result = parser.getResult();
  
        const deviceOwner = result.device.model || result.os.name;
        const mobileNumber = null; // You may not be able to get the mobile number for privacy reasons
  
        resolve({ deviceOwner, mobileNumber });
      } catch (error) {
        console.error('Error getting device owner details:', error);
        reject(null);
      }
    });
  };
  
getDeviceOwnerDetails()
  .then(userDetails => {
    // Handle userDetails
    console.log(userDetails);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });  
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


  

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView && animationEnabled) {
      controlsArray.forEach(async (_, index) => {
        await animateInView(index);
      });
      // Disable animation after the first trigger
      setAnimationEnabled(false);
    }
  }, [controlsArray, inView, animationEnabled]);


  
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
  
  <title>Sanjay Patidar | Web Developer & UI/UX Designer | Educated at Jawahar Navodaya Vidyalaya and Chandigarh University | Crafting Scalable Digital Solutions for Global Innovation</title>
  <meta
    name="description"
    content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
  />
  
  <link rel="canonical" href="https://sanjay-patidar.vercel.app" />

  <meta property="og:title" content="Sanjay Patidar | Web Developer & UI/UX Designer | Educated at Jawahar Navodaya Vidyalaya and Chandigarh University | Crafting Scalable Digital Solutions for Global Innovation" />
  <meta property="og:description" content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sanjay-patidar.vercel.app" />
  <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/sixpack.jpeg" />
  <meta property="og:image:alt" content="Sanjay Patidar" />
  <meta property="og:site_name" content="Sanjay Patidar | Web Developer & UI/UX Designer | Educated at Jawahar Navodaya Vidyalaya and Chandigarh University | Crafting Scalable Digital Solutions for Global Innovation" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sanjay Patidar | Web Developer & UI/UX Designer | Educated at Jawahar Navodaya Vidyalaya and Chandigarh University | Crafting Scalable Digital Solutions for Global Innovation" />
  <meta name="twitter:description" content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
  <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/sixpack.jpeg" />
  <meta name="twitter:site" content="@sanjaypatidar" />
  <meta name="twitter:creator" content="@sanjaypatidar" />

  <meta name="keywords" content="portfolio, personal-portfolio,developer_sanju,sanjay, Sanjay, SANJAY, Sanjay Patidar, SANJAY PATIDAR, SANJAY WEB DEVELOPER, SANJAY DEVELOPER, Full Stack Web Developer, Mern Stack Web Developer, sanjay patidar, sanjay-patidar, professional, web developer portfolio, coder, web development, UI/UX design, Chandigarh University, EduXcel, Indore,contact, developer, programmer, engineer, AI, Artificial Intelligence ,tech enthusiastic, creativity ,creator, work , technology, coding, projects, experiences, Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyondresume, cv" />
  <meta name="author" content="Sanjay Patidar" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Sanjay Patidar",
      "url": "https://sanjay-patidar.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/in/sanjay-patidar-25b580292/",
        "https://github.com/hello-developer-sanjay",
      
        "https://www.instagram.com/sanjay_patidar_mcmxcviii/",
        "https://eduxcel.vercel.app/",
"https://sanjay-patidar.vercel.app/projects",
        "https://sanjay-patidar.vercel.app/careers",

        "https://sanjay-patidar.vercel.app/skills",
        "https://sanjay-patidar.vercel.app/experiences",
        "https://sanjay-patidar.vercel.app/certifications",
        "https://sanjay-patidar.vercel.app/resume",
        "https://sanjay-patidar.vercel.app/blogs",
        "https://sanjay-patidar.vercel.app/education",
        "https://sanjay-patidar.vercel.app/contact"
       ],
      "jobTitle": "Web Developer & UI/UX Designer",
      "description": "Expert Web Developer & UI/UX Designer specializing in crafting digital experiences.",
      "image": "https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png",
      "birthPlace": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "Madyapradesh",
        "addressCountry": "India"
      }, 
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Chandigarh University",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chandigarh",
            "addressRegion": "Punjab",
            "addressCountry": "India"
          }
        }
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Chandigarh",
          "addressRegion": "Punjab",
          "postalCode": "160001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Bhopal",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "462001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Nagpur",
          "addressRegion": "Maharashtra",
          "postalCode": "440001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530001",
          "addressCountry": "India"
        },

        {
          "@type": "PostalAddress",
          "addressLocality": "Kochi",
          "addressRegion": "Kerala",
          "postalCode": "682001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Guwahati",
          "addressRegion": "Assam",
          "postalCode": "781001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "postalCode": "751001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "postalCode": "248001",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Raipur",
          "addressRegion": "Chhattisgarh",
          "postalCode": "492001",
          "addressCountry": "India"
        }
      ],


    })}
  </script>
         
         </Helmet>
      <BackgroundOverlay />
      <FlexContainer>

      <ProfileImageContainer>
      <ProfileImage
  src={profileImage1}
  alt="Sanjay Patidar"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className={`profile-image ${imageLoading ? 'loading' : ''}`}
  onLoad={() => setImageLoading(false)}
/>


<SocialIconsContainer>
          {socialButtons.map((button, index) => (
            <SocialIcon
              key={index}
              color={button.color}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={button.label} 
            >
              {button.icon}
            </SocialIcon>
          ))}
        </SocialIconsContainer>
        
        </ProfileImageContainer>
  
    
      <ProfileTextContainer>

       
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
        I create <br/> <span className="highlight">stunning web experiences</span><br/>that captivate users and drive engagement. Dive into my meticulously crafted projects, explore my diverse skill set, and immerse yourself in my rich professional experiences. Let's collaborate to craft something extraordinary together and leave a lasting impact in the digital landscape!
      </Introduction>

      </ProfileTextContainer>

      </FlexContainer>
      
        <H1Container>
          <H1>Discover the Key to Enhanced 
</H1>
          <h1 className="text-4xl font-semibold text-blue-600 flex items-center creativity">
            <StyledSpan className="text-white-600">Pro</StyledSpan>
            <StyledCreaTeaImage src={DuckImage} alt="CreaTea" className="mx-2" />
            <StyledSpan className="text-green-600">tivity</StyledSpan>
          </h1>
            <H1> Partner with Me to 
              
          <StyledUnlockImage src={unlock} alt="Unlock" className="mx-2" />
            
            
            Your Full Potential !
</H1>
        </H1Container>
        
     
   
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
      >
        <ActionLink to={link.to} ref={ref} onClick={() => animateInView(index)}>

            {link.icon}
            {link.text}
          </ActionLink>
        </motion.div>
      ))}
    </ActionsContainer>
 
      <Subtitle>
        Want to know more? Check out my <SubtitleLink href="/blogs">Blogs</SubtitleLink> for tech insights and tutorials.
      </Subtitle>
      
<About/>

    </HomeContainer>
  );
};

export default Home;
