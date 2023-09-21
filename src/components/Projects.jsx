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
  background-color: #f0f8ff;
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #0070f3;
    color: #ffffff;
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
    color: #ff6b6b;
    transform: translateY(-2px);
  }

  .arrow {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    animation: bounce 1s infinite;
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
  background-color: #f0f8ff;
  border-radius: 5px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #0070f3;
    color: #ffffff;
  }
`;

const ProjectsNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #333;
  position: relative;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #0070f3;
    transform: translateY(-2px);
  }

  &.active {
    color: #ff6b6b;
    &:before {
      content: '';
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

const StyledSection = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
  font-weight: bold;
  color: #0070f3;
`;

const NormalSection = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const parseDescription = (description) => {
  const sections = description.split('^');
  return sections.map((section, index) => {
    if (index % 2 === 1) {
      return (
        <StyledSection key={index}>
          {section}
        </StyledSection>
      );
    } else {
      return (
        <NormalSection key={index}>
          {section}
        </NormalSection>
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
