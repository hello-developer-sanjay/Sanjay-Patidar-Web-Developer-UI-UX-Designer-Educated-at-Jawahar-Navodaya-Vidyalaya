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

const ProjectsNavItem = styled.li`
  flex: 1;
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
                <NavLink to={`/api/projects/details/${project._id}`}>{project.title}</NavLink>
                {project.description && (
                  <ProjectDescription>
                    {project.description.map((desc, index) => (
                      <React.Fragment key={index}>
                        {desc}
                        <br />
                      </React.Fragment>
                    ))}
                  </ProjectDescription>
                )}
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
