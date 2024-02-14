/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Styled components for the main container
const EducationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #192f3e, #0b132b);
  padding: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Styled components for the heading
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease;
`;

// Styled components for each education section
const EducationSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Styled components for the text content of each education section
const EducationText = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: #f0f0f0;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
    text-align: left;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #ffd700;
  }

  p {
    font-size: 1.2rem;
    color: #a0a0a0;
    margin-bottom: 0.5rem;
  }

  a {
    color: #4fc3f7;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Styled components for the images in each education section
const EducationImage = styled.div`
  text-align: center;
  margin: 1rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    max-width: 1000px;
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

const Education = () => {
  return (
    <EducationContainer>
      <Helmet>
      <title>Sanjay Patidar | Education: Navigating the Path of Learning and Growth</title>
  <meta
    name="description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University."
  />
  <meta
    name="keywords"
    content="Sanjay Patidar, education, secondary education, Jawahar Navodaya Vidyalaya School, Bachelor of Technology, Computer Science Engineering, Chandigarh University"
  />
  <meta property="og:title" content="Sanjay Patidar | Education: Navigating the Path of Learning and Growth" />
  <meta
    property="og:description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University."
  />
  <meta property="og:url" content="https://sanjay-patidar.vercel.app/education" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sanjay Patidar | Education: Navigating the Path of Learning and Growth" />
  <meta
    name="twitter:description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University."
  />
  <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
</Helmet>


      {/* Main heading */}
      <Heading>Embarking on the Journey of Knowledge</Heading>

      {/* First education section */}
      <EducationSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text content for the first education section */}
        <EducationText>
          <h1>Secondary Education</h1>
          <p>
            Completed secondary education at Jawahar Navodaya Vidyalaya School
            from 2009 to 2016. A prestigious residential school under the
            Ministry of Education, fostering holistic development and providing
            a strong foundation in academics and extracurricular activities.
            Actively participated in various inter-school competitions and
            achieved excellence in both academic and non-academic pursuits.{' '}
            <a href="https://navodaya.gov.in/nvs/nvs-school/NEEMUCH/en/home/" target="_blank" rel="noopener noreferrer">
              Visit School Website
            </a>
          </p>
        </EducationText>
        {/* Image for the first education section */}
        <EducationImage>
          <motion.img
            src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/pngwing.com.png"
            alt="Secondary Education"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </EducationImage>
      </EducationSection>

      {/* Second education section */}
      <EducationSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text content for the second education section */}
        <EducationText>
          <h1>Computer Science Odyssey</h1>
          <p>
            Currently pursuing Bachelor of Technology in Computer Science
            Engineering at Chandigarh University (2019-2024). Chandigarh
            University is a leading institution known for its state-of-the-art
            infrastructure and innovative teaching methodologies. Actively
            involved in coding competitions, hackathons, and collaborative
            projects. Developed strong problem-solving and teamwork skills
            through hands-on experiences.{' '}
            <a href="https://www.cuchd.in/" target="_blank" rel="noopener noreferrer">
              Explore Chandigarh University
            </a>
          </p>
        </EducationText>
        {/* Image for the second education section */}
        <EducationImage>
          <motion.img
            src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/campus.jpeg"
            alt="Bachelor's Degree"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </EducationImage>
      </EducationSection>

      {/* Ad section */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', marginTop: '2rem' }}
        data-ad-client="ca-pub-4434555762031338"
        data-ad-slot="6547883433"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </EducationContainer>
  );
};

export default Education;
