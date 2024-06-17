import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SkillTable from './SkillTable';
import { RingLoader } from 'react-spinners';
import { motion } from 'framer-motion';

const magicGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const slideIn = {
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 60 } },
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

const spellEffect = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); }
  100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7); }
`;

const ResumeContainer = styled(motion.div)`
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
  animation: ${magicGradient} 15s ease infinite;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url('/path/to/your/harry-potter-background.jpg') center center/cover no-repeat;
    opacity: 0.3;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const ResumeTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #f5c518;
  font-family: 'MagicFont', cursive;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: ${spellEffect} 1.5s infinite alternate;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ResumeSubtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ResumeLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #6a0dad, #ffb347);
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ffcc29, transparent);
    top: 0;
    left: 0;
    z-index: -1;
    animation: ${magicGradient} 4s linear infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    animation: ${spellEffect} 1s ease-in-out infinite;
  }
`;

const ResumeHeading = styled(motion.h3)`
  font-size: 2rem;
  margin-top: 3rem;
  color: #f5c518;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Harry P', serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff5e62, #ff9966);
    position: absolute;
    bottom: -10px;
    left: 0;
    border-radius: 10px;
  }

  &:before {
    content: '📑';
    font-size: 2rem;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${bounce} 2s infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MagicDivider = styled(motion.div)`
  width: 60%;
  height: 4px;
  margin: 2rem auto;
  background: linear-gradient(to right, #ff5e62, #ff9966);
  border-radius: 10px;
`;

const DownloadCount = styled(motion.p)`
  font-size: 1.2rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin-top: 1rem;
`;

const Resume = () => {
  const pdfResumeUrl = 'https://sanjaybasket.s3.ap-south-1.amazonaws.com/Resume-ATS92/Sanjay-Patidar_Resume-Web-Developer.pdf';
  const [downloadCount, setDownloadCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleResumeClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch('https://portfolio-api-15jun-nbz1.onrender.com/api/increment-resume-clicks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await fetch('https://portfolio-api-15jun-nbz1.onrender.com/api/get-resume-click-count');
      const data = await response.json();
      setDownloadCount(data.count);
      window.open(pdfResumeUrl, '_blank');
    } catch (error) {
      console.error('Error incrementing resume click count:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch('https://portfolio-api-15jun-nbz1.onrender.com/api/get-resume-click-count');
        const data = await response.json();
        setDownloadCount(data.count);
      } catch (error) {
        console.error('Error fetching resume click count:', error);
      }
    };
    fetchDownloadCount();
  }, []);

  return (
    <>
      <Helmet>
        <title>Sanjay Patidar | Web Developer Resume | ATS Score 95</title>
        <meta
          name="description"
          content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume."
        />
        <meta name="keywords" content="Sanjay Patidar, resume, experience, chandigarh university, jawahar Navodaya Vidyalaya, jnv, work, skills, web developer, UI/UX designer" />
        <meta property="og:title" content="Sanjay Patidar | Web Developer Resume | ATS Score 95" />
        <meta
          property="og:description"
          content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume."
        />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sanjay Patidar",
            "url": "https://sanjay-patidar.vercel.app/",
            "image": "https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png",
            "sameAs": "https://www.cuchd.in/",
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Chandigarh University",
              "sameAs": "https://www.cuchd.in/"
            },
            "homeLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Indore"
              }
            },
            "sameAs": [
              "https://www.linkedin.com/in/sanjaypatidar10/",
              "https://www.behance.net/sanjaypatidar10"
            ],
            "url": "https://sanjay-patidar.vercel.app/",
            "jobTitle": "Web Developer",
            "image": "https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png",
            "description": "Web Developer with skills in JavaScript, React, and Node.js",
            "gender": "Male",
            "knowsAbout": "Web Development",
            "nationality": "Indian"
          })}
        </script>
      </Helmet>

      <ResumeContainer initial="hidden" animate="visible" variants={fadeIn}>
        <ResumeTitle initial="hidden" animate="visible" variants={fadeIn}>
          Resume
        </ResumeTitle>
        <ResumeSubtitle initial="hidden" animate="visible" variants={slideIn}>
          My Professional Experience and Skills
        </ResumeSubtitle>
        <MagicDivider initial="hidden" animate="visible" variants={slideIn} />
        <ResumeHeading initial="hidden" animate="visible" variants={slideIn}>
          Get My Resume
        </ResumeHeading>
        <ResumeLink href={pdfResumeUrl} onClick={handleResumeClick} initial="hidden" animate="visible" variants={fadeIn}>
          Get Resume
        </ResumeLink>
        <DownloadCount initial="hidden" animate="visible" variants={fadeIn}>
          Resume downloads: {downloadCount}
        </DownloadCount>
      </ResumeContainer>
      <SkillTable />
      {loading && (
        <LoadingOverlay>
          <RingLoader color="#000" size={60} />
        </LoadingOverlay>
      )}
    </>
  );
};

export default Resume;
