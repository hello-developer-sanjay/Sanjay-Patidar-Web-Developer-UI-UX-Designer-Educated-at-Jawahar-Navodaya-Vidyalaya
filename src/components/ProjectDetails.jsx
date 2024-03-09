import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import ModalImage from 'react-modal-image';
 
const ProjectDetailsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #050816;

`;


const ProjectsContent = styled.div`
background-color: #050816;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
overflow-y: auto; 
max-height: calc(100vh - 4rem);
margin-top: 2rem; 

/* Custom scrollbar styles */
&::-webkit-scrollbar {
  width: 10px !important; 
}
&::-webkit-scrollbar-track {
  background: linear-gradient(to right, #050816, #111); 
}
&::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #0070f3, #00ff95); 
  border-radius: 5px !important; 
  border: 3px solid #050816; 
}
&::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #ff6b6b, #ffdd59); 
  border-color: #111; 
}
`;

const ProjectWebsiteLink = styled.a`
  text-decoration: none;
  color: #ffffff; /* White text */
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem 1.5rem; 
  border-radius: 50px; 
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%); 
  background-size: 200% 200%;
  animation: pulse 2s infinite; 
  transition: transform 0.3s, color 0.3s;

 

  svg {
    margin-right: 1rem;
    fill: #ffffff; /* White color for the icon */
    transition: fill 0.3s;
  }

  &:hover svg {
    fill: #fd1d1d; /* Red color for the icon on hover */
  }

  @keyframes pulse {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
const ProjectDetailsTitle = styled.h2`
  font-size: 2rem;
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


  @media (max-width: 768px) {
    font-size: 1.3rem;

  }

`;


const ProjectDetailsDescription = styled.p`
  font-size: 1rem; /* Small font size */
  line-height: 1.6;
  margin-top: 1rem;
  position: relative;
  color: #fff; /* Default text color */

  span.highlight {
    color: #0070f3; /* Highlighted text color */
    font-weight: bold; /* Highlighted text bold */
  }


  &:before {
    content: '✨ Project Description ✨'; /* Use decorative stars as labels */
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #0070f3; /* Change the label color */
    font-size: 1.2rem; /* Adjust label font size */
    letter-spacing: 2px; /* Add letter spacing for emphasis */
    text-align: center;
    text-transform: uppercase; /* Uppercase text for emphasis */
  }

  &:after {
    content: '';
    display: block;
    margin-top: 0.5rem;
    height: 2px;
    background: linear-gradient(
      to right,
      #0070f3,
      #ff6b6b,
      #33d9b2,
      #ffad5a
    ); 
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
  margin-top: 0.2rem;
  text-align: center;
  width:100%;
 
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f38181, #fce38a); /* Reverse gradient */
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%);
    z-index: -1;
  }
`;


const ProjectDetailsLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const ProjectDetailsLinkItem = styled.li`
  display: inline-block;
`;
const ProjectDetailsLink = styled.a`
  color: #3498db; /* Dodger Blue color */
  text-decoration: none;
  font-size: 1.3rem;
  position: relative;
  font-weight: 500; /* Medium font weight for balance */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #2980b9; /* Darker Dodger Blue on hover */
    &:before {
      transform-origin: bottom center;
      transform: scaleX(1);
    }
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #3498db, #2980b9); /* Gradient underline */
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;





const AdditionalDetailsContainer = styled.div`
  width: 100%;
  max-width: 1000px; 
  margin: 0 auto;
`;

const AdditionalDetailsItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.4;
  color: #0070f3; 
  font-weight: bold; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Change font-family */
`;

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProjectDetails() {
      try {
        const response = await axios.get(`https://portfolio-back-aruc.onrender.com/api/projects/details/${id}`);
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
            <ProjectsContent>

            {project.links && (
              <ProjectDetailsLinkContainer>
                <h3>Links:</h3>
                <ProjectDetailsLinkList>
                  {project.links.map((link, index) => (
                    <ProjectDetailsLinkItem key={index}>
                      <ProjectDetailsLink href={link.url} target="_blank">
                        {link.label}
                      </ProjectDetailsLink>
                    </ProjectDetailsLinkItem>
                  ))}
                </ProjectDetailsLinkList>
                {project.websiteLink && (
                  <ProjectWebsiteLink href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="18"
                      height="18"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 19a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h2a2 2 0 012 2v8z"
                      />
                    </svg>
                    Visit Website
                  </ProjectWebsiteLink>
                )}
              </ProjectDetailsLinkContainer>
            )}
            {project.description && (
              <ProjectDetailsDescription>
                {project.description.map((desc, index) => {
                  const highlightedText = desc.split(/\^([^]+?)\^/).map((part, i) => {
                    if (i % 2 === 1) {
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
                  </ProjectsContent>

          </>
        ) : (
          <p>Loading project details...</p>
        )}
    </ProjectDetailsContainer>
  );
  
  
};

export default ProjectDetails;
