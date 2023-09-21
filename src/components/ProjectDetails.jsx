import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import ModalImage from 'react-modal-image';
import ResearchPaper from './ResearchPaper'; 
const ProjectDetailsContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #CBD1C3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectDetailsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  color: #ff6b6b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Pacifico', cursive;
  background-image: linear-gradient(45deg, #ff6b6b, #ffc6c6); /* Gradient background */
  background-clip: text; /* Clip text to background */
  -webkit-background-clip: text; /* For Safari */
  color: transparent; /* Hide the original text color */
  animation: rainbow 3s linear infinite; /* Rainbow animation */

  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


const ProjectDetailsDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
  font-style: italic;
  position: relative;
 span.highlight {
    color: #0070f3; /* Highlighted text color */
    font-weight: bold; /* Highlighted text bold */
  }
  &:before {
    content: '❖ Project Description ❖'; /* Use a decorative label */
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #0070f3; /* Change the label color */
    font-size: 1.2rem; /* Adjust label font size */
    letter-spacing: 4px; /* Add letter spacing for a stylish look */
    text-transform: uppercase; /* Uppercase text for emphasis */
    transform: scale(1.2); /* Slightly increase label size */
  }

  &:after {
    content: '';
    display: block;
    margin-top: 1rem;
    height: 2px;
    font-weight: bold;
    background: linear-gradient(
      to right,
      #0070f3,
      #ff6b6b,
      #33d9b2,
      #ffad5a
    ); /* Use a gradient background */
    background-size: 300% 100%; /* Control the gradient width */
    animation: gradient-shift 5s linear infinite; /* Animation for gradient shift */
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;



const ProjectDetailsImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  justify-content: center;
`;

const ProjectDetailsImage = styled(ModalImage)`
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectDetailsVideoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProjectDetailsLinkContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const ProjectDetailsLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.2rem;
  position: relative;

  &:hover {
    text-decoration: none;
    &:before {
      content: ''; /* Add a decorative arrow */
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #0070f3; /* Arrow color */
      clip-path: polygon(100% 50%, 0 0, 0 100%); /* Create a triangular shape */
      transform: translateX(-50%);
      top: 50%;
      left: 50%;
    }
  }

  &:before {
    content: ''; /* Add a decorative bullet point */
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #0070f3; /* Bullet point color */
    border-radius: 50%; /* Create a circular shape */
    margin-right: 6px; /* Space between the bullet point and link text */
    position: relative;
    top: 2px; /* Adjust vertical alignment */
  }
`;


const AdditionalDetailsContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Adjust the max width as needed */
  margin: 0 auto;
`;

const AdditionalDetailsItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.4;
  color: #0070f3; /* Change text color to a creative blue */
  font-weight: bold; /* Add bold font weight */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Change font-family */
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProjectDetails() {
      try {
        const response = await axios.get(`https://portfolio-back-dujw.onrender.com/api/projects/details/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    }

    fetchProjectDetails();
  }, [id]);

  const isURL = (str) => {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(str);
  };

  return (
    <ProjectDetailsContainer>
      {project ? (
        <>
          <ProjectDetailsTitle>{project.title}</ProjectDetailsTitle>
         {project.description && (
                  <ProjectDetailsDescription>
                    {project.description.map((desc, index) => {
                      // Use regular expressions to find text between ^ markers and apply styling
                      const highlightedText = desc.split(/\^([^]+?)\^/).map((part, i) => {
                        if (i % 2 === 1) {
                          // Apply styles to text between markers
                          return <span key={i} className="highlight">{part}</span>;
                        }
                        return part;
                      });

                      return (
                        <React.Fragment key={index}>
                          {highlightedText}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </ProjectDetailsDescription>
          )}
          {project.additionalDetails && (
            <AdditionalDetailsContainer>
              <h3>Additional Details:</h3>
              {project.additionalDetails.map((detail, index) => (
                <AdditionalDetailsItem key={index}>
                  {isURL(detail) ? (
                    detail.endsWith('.mp4') ? (
                      <ProjectDetailsVideoContainer>
                        <ReactPlayer
                          url={detail}
                          width="100%"
                          height="100%"
                          controls
                        />
                      </ProjectDetailsVideoContainer>
                    ) : (
                      <ProjectDetailsImageGrid>
                        <ProjectDetailsImage
                          small={detail}
                          large={detail}
                          alt={`Additional Image ${index}`}
                        />
                      </ProjectDetailsImageGrid>
                    )
                  ) : (
                    detail
                  )}
                </AdditionalDetailsItem>
              ))}
            </AdditionalDetailsContainer>
          )}

          {project.codeSnippets && (
            <div>
              <h3>Code Snippets:</h3>
              {project.codeSnippets.map((snippet, index) => (
                <pre key={index}>
                  <code>{snippet}</code>
                </pre>
              ))}
            </div>
          )}

          {project.links && (
            <ProjectDetailsLinkContainer>
              <h3>Links:</h3>
              {project.links.map((link, index) => (
                <ProjectDetailsLink key={index} href={link.url} target="_blank">
                  {link.label}
                </ProjectDetailsLink>
              ))}
            </ProjectDetailsLinkContainer>
          )}
          {/* Display the Research Paper */}
                    <ResearchPaper />

        </>
      ) : (
        <p>Loading project details...</p>
      )}
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails;
