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
const EduHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
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
    content: '🎓';
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
// Styled components for the text content of each education section
const EducationText = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: #0F0701;
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
    font-size: 2rem;
    font-weight: 900;
    color: #2ecc71;
    margin-right: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 2px; 
    transform: skew(-5deg); 
  }

  p {
    font-size: 1.2rem;
    color: #0F0701;
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
      <title>Sanjay Patidar | Education: Navigating the Path of Learning and Growth in Web Development and UI/UX Design</title>

<meta
    name="description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
  />
  <meta
    name="keywords"
    content="Sanjay Patidar, education, secondary education, Jawahar Navodaya Vidyalaya School, Bachelor of Technology, Computer Science Engineering, Chandigarh University,Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond"
  />
  <meta property="og:title" content="Sanjay Patidar | Education: Navigating the Path of Learning and Growth in Web Development and UI/UX Design" />
  <meta
    property="og:description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
  />
  <meta property="og:url" content="https://sanjay-patidar.vercel.app/education" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sanjay Patidar | Education: Navigating the Path of Learning and Growth in Web Development and UI/UX Design" />
  <meta
    name="twitter:description"
    content="Explore the educational journey of Sanjay Patidar, including secondary education at Jawahar Navodaya Vidyalaya School and Bachelor of Technology in Computer Science Engineering at Chandigarh University.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
  />
  <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
</Helmet>


      {/* Main heading */}
      <EduHeading>Sanjay Patidar | Education: Navigating the Path of Learning and Growth in Web Development and UI/UX Design</EduHeading>

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
          <h1>Computer Science Engineering</h1>
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

  
    </EducationContainer>
  );
};

export default Education;
