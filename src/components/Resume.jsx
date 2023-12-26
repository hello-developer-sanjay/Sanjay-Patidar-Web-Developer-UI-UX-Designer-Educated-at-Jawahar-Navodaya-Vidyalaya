import styled, { keyframes } from 'styled-components';

const ResumeContainer = styled.div`
  background: linear-gradient(to right, #1a1a2e, #132238);
  padding: 4rem 0;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #132238, #1a1a2e);
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
  }
`;



const ResumeTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  display: inline-block;
  font-family: 'Pacifico', cursive;
  padding-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to right, #ff6b6b, #ffb347);
    z-index: -1;
    transition: transform 0.3s ease-in-out;
    transform-origin: 100% 100%;
    transform: scaleX(0);
  }

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

  return (
    <ResumeContainer>
      <ResumeTitle>Unlock My Resume</ResumeTitle>
      <ResumeSubtitle>Click the link below to access my full resume.</ResumeSubtitle>
      <ResumeLink href={pdfResumeUrl} target="_blank" rel="noopener noreferrer">
        Get Resume
      </ResumeLink>
    </ResumeContainer>
  );
};

export default Resume;
