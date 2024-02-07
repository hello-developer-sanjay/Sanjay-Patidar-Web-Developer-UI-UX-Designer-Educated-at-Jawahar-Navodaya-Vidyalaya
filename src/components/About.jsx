import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for the card container
const CardContainer = styled.div`
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

// Styled component for the image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.3s ease-in-out;

  ${CardContainer}:hover & {
    transform: translateY(-5px) scale(1.05);
  }
`;

// Styled component for the title section
const TitleSection = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  ${CardContainer}:hover & {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const BlogTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #333;
  transition: color 0.3s ease-in-out;

  ${CardContainer}:hover & {
    color: #000;
  }
`;

const About = () => {
  const [randomBlogTitles, setRandomBlogTitles] = useState([]);

  useEffect(() => {
    const fetchRandomBlogTitles = async () => {
      try {
        const response = await axios.get('https://edu-back-j3mz.onrender.com/api/random-blog-titles');
        setRandomBlogTitles(response.data);
      } catch (error) {
        console.error('Error fetching random blog titles:', error);
      }
    };

    fetchRandomBlogTitles();
  }, []);

  return (
    <div>
      <h1>Curated Blog Recommendations</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {randomBlogTitles.map((title, index) => (
          <Link key={index} to={`https://eduxcel.vercel.app/blogs/tools/${encodeURIComponent(title)}`}>
            <CardContainer>
              {/* Image Section */}
              <CardImage src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/e.webp" alt="Blog Thumbnail" />

              {/* Title Section */}
              <TitleSection>
                <BlogTitle>{title}</BlogTitle>
              </TitleSection>
            </CardContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
