import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import SkillTable from './SkillTable';
import { RingLoader } from 'react-spinners';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

// Keyframes for magical animations
const magicGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const spellEffect = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.7); }
  100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7); }
`;

const spellRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px #fff; }
  50% { box-shadow: 0 0 20px #f5c518; }
  100% { box-shadow: 0 0 5px #fff; }
`;

const ResumeContainer = styled(motion.div)`
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 20px;
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(45deg, #282a36, #3d3f51);
  animation: ${magicGradient} 15s ease infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url('https://sanjaybasket.s3.ap-south-1.amazonaws.com/HogwartsEdX/homebg.webp') no-repeat center center fixed;
    opacity: 0.2;
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
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
`;

const ResumeTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f5c518;
  position: relative;
  display: inline-block;
  font-family: 'Pacifico', cursive;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: ${spellEffect} 1.5s infinite alternate;
`;

const ResumeSubtitle = styled(motion.h3)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
`;

const ResumeLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #6a0dad, #ffb347);
  color: #1a1a1a;
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
    color: #fff;
    animation: ${spellEffect} 1s ease-in-out infinite;
  }
`;

const ResumeHeading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  color: #f5c518;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  font-family: 'Harry P', serif;
  animation: ${spellRotate} 20s linear infinite;

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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.div`
  margin: 2rem 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
`;

const Frame = styled.div`
  border: 3px solid #f5c518;
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(245, 197, 24, 0.5);
  margin-bottom: 2rem;
  animation: ${glow} 3s ease-in-out infinite alternate;
`;

const ResumeText = styled.p`
  font-size: 1.2rem;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
  text-align: justify;
`;

const Resume = () => {
  const pdfResumeUrl = 'https://sanjaybasket.s3.ap-south-1.amazonaws.com/Resume-ATS92/Sanjay-Patidar_Resume-Web-Developer.pdf';
  const [downloadCount, setDownloadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const sectionsRef = useRef([]);
  const controls = useAnimation();

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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, transform: 'translateY(0)' });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [controls]);

  return (
    <>
      <Helmet>
        <title>Sanjay Patidar | Web Developer Resume | ATS Score 95</title>
        <meta name="description" content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume." />
        <meta name="keywords" content="resume, experience, chandigarh university, jawahar Navodaya Vidyalaya, jnv, work, skills, web developer, UI/UX designer" />
        <meta property="og:title" content="Sanjay Patidar | Web Developer Resume | ATS Score 95" />
        <meta property="og:description" content="Unlock Sanjay Patidar's resume to explore his professional experience and skills. Click the link to access the full resume." />
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

      <ResumeContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <ResumeTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          Sanjay Patidar
        </ResumeTitle>
        <ResumeSubtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          Web Developer with a Passion for Creating Magical Experiences
        </ResumeSubtitle>
        <ResumeHeading initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
          Get My Resume
        </ResumeHeading>
        <ResumeLink href={pdfResumeUrl} onClick={handleResumeClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
          Download Resume
        </ResumeLink>
        <p>Resume downloads: {downloadCount}</p>
      </ResumeContainer>

      <InView as="div" onChange={(inView, entry) => inView && controls.start({ opacity: 1, transform: 'translateY(0)' })}>
        <Section ref={(el) => sectionsRef.current.push(el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Frame>
            <ResumeText>
              I am a seasoned Web Developer with extensive experience in the MERN stack. My journey began at Jawahar Navodaya Vidyalaya and continued through Chandigarh University, where I honed my skills and developed a passion for creating user-friendly and visually appealing web applications.
            </ResumeText>
          </Frame>
        </Section>

        <Section ref={(el) => sectionsRef.current.push(el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Frame>
            <ResumeText>
              My expertise includes working with technologies like JavaScript, React, Node.js, Express, and MongoDB. I excel in both front-end and back-end development, ensuring seamless integration and functionality across the stack.
            </ResumeText>
          </Frame>
        </Section>

        <Section ref={(el) => sectionsRef.current.push(el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Frame>
            <ResumeText>
              I have a strong background in UI/UX design, allowing me to create intuitive and engaging user interfaces. My projects often involve collaborating with cross-functional teams to deliver high-quality solutions that meet client requirements and exceed expectations.
            </ResumeText>
          </Frame>
        </Section>

        <Section ref={(el) => sectionsRef.current.push(el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Frame>
            <ResumeText>
              I am constantly learning and adapting to new technologies and trends in web development. My goal is to continue growing as a developer and to use my skills to create innovative and impactful web applications.
            </ResumeText>
          </Frame>
        </Section>

        <Section ref={(el) => sectionsRef.current.push(el)} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <Frame>
            <SkillTable />
          </Frame>
        </Section>
      </InView>

      {loading && (
        <LoadingOverlay>
          <RingLoader color="#000" size={60} />
        </LoadingOverlay>
      )}
    </>
  );
};

export default Resume;
