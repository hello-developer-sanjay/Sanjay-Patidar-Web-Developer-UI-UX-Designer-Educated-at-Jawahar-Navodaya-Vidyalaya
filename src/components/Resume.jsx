import styled, { keyframes } from 'styled-components';
import  { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ResumeContainer = styled.div`
  padding: 4rem 0;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 0;
  padding: 20px;
  height: "100%";
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;



const ResumeTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  display: inline-block;
  font-family: 'Pacifico', cursive;


  &:hover::after {
    transform: scaleX(1);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResumeSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;


const colorChange = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shadowPop = keyframes`
  0% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); }
  50% { text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4); }
  100% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); }
`;

const ResumeLink = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff6b6b, #ffb347);
  color: #1a1a1a; /* High-contrast text color */
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  cursor:pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ffcc29, transparent);
    top: 0;
    left: 0;
    z-index: -1;
    animation: ${colorChange} 4s linear infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    color: #fff; /* Change text color on hover for contrast */
    animation: ${shadowPop} 1s ease-in-out infinite;
  }
`;

const ResumeHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
padding: 1rem;
  text-align: center;
  justify-content: center;
  color: #24086C;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff5e62, #ff9966);
    position: absolute;
    bottom: -8px;
    left: 0;
    border-radius: 10px;
  }

  &:before {
    content: '📑';
    font-size: 2rem;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;

  
  }
`;


const Resume = () => {
  const pdfResumeUrl = 'https://sanjaybasket.s3.ap-south-1.amazonaws.com/career_advice/Sanjay_Patidar_Developer_Comprehensive_Resume.pdf';
  const [downloadCount, setDownloadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Function to handle resume link clicks
  const handleResumeClick = async () => {
    try {
      // Set loading state to true while waiting for the response
      setLoading(true);

      // Make a POST request to the backend to increment the click count
      await fetch('https://portfolio-api-b53a.onrender.com/api/increment-resume-clicks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Fetch the current download count after the click
      const response = await fetch('https://portfolio-api-b53a.onrender.com/api/get-resume-click-count');
      const data = await response.json();

      // Update the local state with the new download count
      setDownloadCount(data.count);

      // After the request is successful, open the resume link in a new tab
      window.open(pdfResumeUrl, '_blank');
    } catch (error) {
      console.error('Error incrementing resume click count:', error);
    } finally {
      // Set loading state back to false after the request is complete
      setLoading(false);
    }
  };

  // Fetch the initial download count when the component mounts
  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch('https://portfolio-api-b53a.onrender.com/api/get-resume-click-count');
        const data = await response.json();
        setDownloadCount(data.count);
      } catch (error) {
        console.error('Error fetching resume click count:', error);
      }
    };

    fetchDownloadCount();
  }, []);
  return (<>
    <ResumeHeading>Sanjay Patidar | Seasoned Web Developer & Creative UI/UX Designer | Crafting Immersive Digital Experiences - Comprehensive Resume</ResumeHeading>

    <ResumeContainer>
            <Helmet>
            <title>Sanjay Patidar | Comprehensive Resume</title>

<meta
          name="description"
          content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume."
        />
        <meta name="keywords" content="Sanjay Patidar, resume, experience,chandigarh university, jawahar Navodaya Vidyalaya, jnv, work, skills, web developer, UI/UX designer" />
        <meta property="og:title" content="Sanjay Patidar | Seasoned Web Developer & Creative UI/UX Designer | Crafting Immersive Digital Experiences - Comprehensive Resume" />
        <meta
          property="og:description"
          content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume."
        />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/resume" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay Patidar | Seasoned Web Developer & Creative UI/UX Designer | Crafting Immersive Digital Experiences - Comprehensive Resume" />
        <meta
          name="twitter:description"
          content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume."
        />
        <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
      </Helmet>

      <ResumeTitle>Unlock My Resume</ResumeTitle>
      <ResumeSubtitle>Click the link below to access my full resume.</ResumeSubtitle>
      {/* Disable the link when loading to prevent re-clicks */}
      <ResumeLink onClick={handleResumeClick} disabled={loading}>
        {loading ? 'Opening Resume...' : 'Get Resume'}
      </ResumeLink>
      <p>Resume Download Count: {downloadCount}</p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/welcome.gif"
          alt="Admin Only GIF"
          style={{
            width: '100%',
            marginTop: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '2px solid #fff',
          }}
        />
      </div>
    </ResumeContainer>
    </>
  );
};

export default Resume;
