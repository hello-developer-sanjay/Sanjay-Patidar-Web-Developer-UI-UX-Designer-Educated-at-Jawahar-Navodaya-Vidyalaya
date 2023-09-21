import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  background-color: #D0EAE7;
  min-height: 100vh;
`;

const ProjectsNavigation = styled.nav`
  margin-bottom: 2rem;
`;

const ProjectsNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectWebsiteLink = styled.a`
  text-decoration: none;
  color: #0070f3;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #f0f8ff; /* Light blue background */
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #0070f3; /* Blue background on hover */
    color: #ffffff; /* White text on hover */
  }

  svg {
    margin-right: 0.5rem;
  }
};

const ProjectTitle = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #0070f3;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #ff6b6b; /* Change color on hover */
    transform: translateY(-2px); /* Add a subtle upward hover effect */
  }

  .arrow {
    display: block; /* Display the arrow as a block element */
    text-align: center; /* Center-align the arrow horizontally */
    font-size: 1.5rem; /* Adjust the font size of the arrow */
    animation: bounce 1s infinite; /* Add the bounce animation */
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const ProjectsNavItem = styled.li`
  flex: 1;
  padding: 0.5rem;
  text-align: center;
  background-color: #f0f8ff; /* Light blue background */
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #0070f3; /* Blue background on hover */
    color: #ffffff; /* White text on hover */
  }
`;

const ProjectsNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #333;
  position: relative;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #0070f3; /* Change color on hover */
    transform: translateY(-2px); /* Add a subtle upward hover effect */
  }

  &.active {
    color: #ff6b6b;
    &:before {
      content: ''; /* Add a decorative line under the active link */
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ff6b6b;
    }
  }
`;

const ProjectsContent = styled.div`
  background-color: #C9DACD;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem; /* Small font size */
  line-height: 1.6;
  margin-top: 1rem;
  position: relative;

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

// Function to parse and style the description
const parseDescription = (description) => {
  const sections = description.split('^'); // Split the description using '^'
  return sections.map((section, index) => {
    if (index % 2 === 1) {
      // Apply different styles to even sections (between '^' tags)
      return (
        <ProjectDescription key={index} className="styled-section">
          {section}
        </ProjectDescription>
      );
    } else {
      // Apply default styles to odd sections (outside '^' tags)
      return (
        <ProjectDescription key={index} className="normal-section">
          {section}
        </ProjectDescription>
      );
    }
  });
};

const Projects = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        let response;
        if (category === 'all') {
          response = await axios.get('https://portfolio-back-dujw.onrender.com/api/projects/category/all');
        } else {
          response = await axios.get(`https://portfolio-back-dujw.onrender.com/api/projects/category/${category}`);
        }
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, [category]);

  return (
    <ProjectsContainer>
      <ProjectsNavigation>
        <ProjectsNavList>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/all">All Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/web">Web Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/mobile">Mobile Projects</ProjectsNavLink>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLink to="/projects/other">Other Projects</ProjectsNavLink>
          </ProjectsNavItem>
        </ProjectsNavList>
      </ProjectsNavigation>
      <ProjectsContent>
        {projects.length > 0 ? (
          <ProjectList>
            {projects.map((project) => (
              <ProjectItem key={project._id}>
                <NavLink to={`/api/projects/details/${project._id}`} style={{ textDecoration: 'none' }}>
                  <ProjectTitle>
                    <span className="arrow">👇</span>
                    {project.title}
                  </ProjectTitle>
                </NavLink>
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
                {project.description && parseDescription(project.description)}
              </ProjectItem>
            ))}
          </ProjectList>
        ) : (
          <p>No projects found.</p>
        )}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;
