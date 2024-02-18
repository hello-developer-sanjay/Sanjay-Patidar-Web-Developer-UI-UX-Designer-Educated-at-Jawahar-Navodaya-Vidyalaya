import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import CreaTeaImage from '../assets/tea.gif';

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  border: 2px solid #ff6b6b; 
  border-radius: 20px;
  padding: 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 24px;
  color: #fff; /* Text color */
  background-color: #333; /* Background color for the "metal plate" */
  padding: 10px 20px; /* Padding to create space around the text */
  border-radius: 20px; /* Rounded corners for the "metal plate" */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* Shadow to make it pop */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for depth */
  border: 2px solid #ff6b6b; /* Border color */
  overflow: hidden; /* Hide any overflowing text */
  z-index: 1; /* Ensure the title appears above other elements */
  
  /* Engraved effect */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, transparent 50%, rgba(0, 0, 0, 0.5) 100%);
    pointer-events: none; /* Allow interaction with elements behind the pseudo-element */
  }
`;



const CardContainer = styled.div`
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin: 20px 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  animation: ${slideIn} 0.5s ease forwards; /* Apply slide-in animation */

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    margin: 20px 0;

  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const TitleSection = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const BlogTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff6b6b;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  ${CardContainer}:hover & {
    color: #ff6b6b;
  }

  ${CardContainer}:hover &:before {
    transform: scaleX(1);
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
const About = () => {
  const [randomBlogTitles, setRandomBlogTitles] = useState([]);
  const [setAnimationTrigger] = useState(false);

  useEffect(() => {
    const fetchRandomBlogTitles = async () => {
      try {
        const response = await axios.get('https://edu-back-j3mz.onrender.com/api/random-blog-titles');
        setRandomBlogTitles(response.data);
        setAnimationTrigger(true); // Trigger animation after data fetch
      } catch (error) {
        console.error('Error fetching random blog titles:', error);
      }
    };

    fetchRandomBlogTitles();
  }, []);

  return (

    <>
    <CardWrapper> 
      <Title>Curated Blog Recommendations</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {randomBlogTitles.map((title, index) => (
          <Link key={index} to={`https://eduxcel.vercel.app/blogs/tools/${encodeURIComponent(title)}`}>
            <CardContainer style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image Section */}
              <ImageContainer>
                <CardImage src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/e.webp" alt="Blog Thumbnail" />
              </ImageContainer>

              {/* Title Section */}
              <TitleSection>
                <BlogTitle>{title}</BlogTitle>
              </TitleSection>
            </CardContainer>
          </Link>
        ))}
      </div>

  
    </CardWrapper>
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
    </>
  );
};

export default About;