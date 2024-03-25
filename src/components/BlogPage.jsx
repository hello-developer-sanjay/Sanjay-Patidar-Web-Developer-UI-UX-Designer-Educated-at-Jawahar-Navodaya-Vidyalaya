import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlogList from './BlogList.jsx';
import axios from 'axios';

// Styled Components
const SectionContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: ${props => props.theme.padding};
`;

const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;

    font-size:3rem;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;


    @media screen and (max-width: 768px) {
        font-size: calc(${props => props.theme.sectionHeadTextSize} * 0.8);
        margin-bottom: 1rem;
        font-size:1.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: calc(${props => props.theme.sectionHeadTextSize} * 0.6);
        margin-bottom: 0.5rem;
        font-size:1.8rem;

    }
`;

const SectionSubtitle = styled.p`
color: #2ecc71;
   font-size: 2rem;
  margin: 2rem;
  font-weight: 900;
  font-family: 'Playfair Display', serif;
  margin-top: 0rem;
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
  
  @media (max-width: 768px) {
    margin-top: 0rem;
    font-size: 1.5rem;

  }

`;

// Component
const BlogPage = () => {
    const [careerData, setCareerData] = useState([]);

    useEffect(() => {
        async function fetchCareers() {
            try {
                const response = await axios.get('https://portfolio-forblogs.onrender.com/api/journals');
                setCareerData(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }

        fetchCareers();
    }, []); 

    return (
        <SectionContainer>
            <SectionTitle>Discover In-Depth Tech Insights: Explore Featured Tech Blogs</SectionTitle>
            <SectionSubtitle>Discover a Rich Repository of Insightful Tech Blogs Covering Topics from VS Code to Git and Beyond</SectionSubtitle>
            <BlogList careerData={careerData} />
        </SectionContainer>
    );
}

export default BlogPage;
