import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SkillTable from './SkillTable';
import { RingLoader } from 'react-spinners';
import '../styles/Skills.css';
const magicGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ResumeContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 20px;
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, #282a36, #3d3f51);
  animation: ${magicGradient} 15s ease infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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

const ResumeTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f5c518;
  position: relative;
  display: inline-block;
  font-family: 'Pacifico', cursive;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
`;

const ResumeSubtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
`;

const ResumeLink = styled.a`
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    color: #fff;
  }
`;

const ResumeHeading = styled.h1`
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
`;

const Frame = styled.div`
  border: 3px solid #f5c518;
  padding: 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(245, 197, 24, 0.5);
  margin-bottom: 2rem;
`;

const ResumeText = styled.p`
  font-size: 1.2rem;
  color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
  text-align: justify;
`;

const useAnimateOnScroll = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      elements.forEach(({ element, animation }) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          element.classList.add(animation);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elements]);

  const registerElement = (element, animation) => {
    setElements((prev) => [...prev, { element, animation }]);
  };

  return registerElement;
};

const Resume = () => {
  const pdfResumeUrl = 'https://sanjaybasket.s3.ap-south-1.amazonaws.com/Resume-ATS92/Sanjay-Patidar_Resume-Web-Developer.pdf';
  const [downloadCount, setDownloadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const registerElement = useAnimateOnScroll();

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

      <ResumeContainer>
        <ResumeTitle>Sanjay Patidar</ResumeTitle>
        <ResumeSubtitle>Web Developer with a Passion for Creating Magical Experiences</ResumeSubtitle>
        <ResumeHeading>Get My Resume</ResumeHeading>
        <ResumeLink href={pdfResumeUrl} onClick={handleResumeClick}>
          Download Resume
        </ResumeLink>
        <p>Resume downloads: {downloadCount}</p>
      </ResumeContainer>

      <Section ref={(el) => el && registerElement(el, 'appear')}>
        <Frame>
          <ResumeText>
            I am a seasoned Web Developer with extensive experience in the MERN stack. My journey began at Jawahar Navodaya Vidyalaya and continued through Chandigarh University, where I honed my skills and developed a passion for creating user-friendly and visually appealing web applications.
          </ResumeText>
        </Frame>
      </Section>

      <Section ref={(el) => el && registerElement(el, 'appear')}>
        <Frame>
          <ResumeText>
            My expertise includes working with technologies like JavaScript, React, Node.js, Express, and MongoDB. I excel in both front-end and back-end development, ensuring seamless integration and functionality across the stack.
          </ResumeText>
        </Frame>
      </Section>

      <Section ref={(el) => el && registerElement(el, 'appear')}>
        <Frame>
          <ResumeText>
            I have a strong background in UI/UX design, allowing me to create intuitive and engaging user interfaces. My projects often involve collaborating with cross-functional teams to deliver high-quality solutions that meet client requirements and exceed expectations.
          </ResumeText>
        </Frame>
      </Section>

      <Section ref={(el) => el && registerElement(el, 'appear')}>
        <Frame>
          <ResumeText>
            I am constantly learning and adapting to new technologies and trends in web development. My goal is to continue growing as a developer and to use my skills to create innovative and impactful web applications.
          </ResumeText>
        </Frame>
      </Section>

      <Section ref={(el) => el && registerElement(el, 'appear')}>
        <Frame>
          <SkillTable />
        </Frame>
      </Section>

      {loading && (
        <LoadingOverlay>
          <RingLoader color="#000" size={60} />
        </LoadingOverlay>
      )}
    </>
  );
};

export default Resume;
