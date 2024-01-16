import styled, { keyframes } from 'styled-components';
import  { useState, useEffect } from 'react';

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
  margin-bottom: 4rem;
  color: #333;
  position: relative;
  display: inline-block;
  font-family: 'Pacifico', cursive;
  padding-bottom: 8px;


  &:hover::after {
    transform: scaleX(1);
  }
`;

const ResumeSubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
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
  curser:pointer;
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

const Resume = () => {
  const pdfResumeUrl = 'https://sanjaybasket.s3.ap-south-1.amazonaws.com/Sanjay+Patidar+Resume.pdf';
  const [downloadCount, setDownloadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Function to handle resume link clicks
  const handleResumeClick = async () => {
    try {
      // Set loading state to true while waiting for the response
      setLoading(true);

      // Make a POST request to the backend to increment the click count
      await fetch('https://portfolio-back-aruc.onrender.com/api/increment-resume-clicks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Fetch the current download count after the click
      const response = await fetch('https://portfolio-back-aruc.onrender.com/api/get-resume-click-count');
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
        const response = await fetch('https://portfolio-back-aruc.onrender.com/api/get-resume-click-count');
        const data = await response.json();
        setDownloadCount(data.count);
      } catch (error) {
        console.error('Error fetching resume click count:', error);
      }
    };

    fetchDownloadCount();
  }, []);

  return (
    <ResumeContainer>
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
            marginTop: '60px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '2px solid #fff',
          }}
        />
      </div>
    </ResumeContainer>
  );
};

export default Resume;
