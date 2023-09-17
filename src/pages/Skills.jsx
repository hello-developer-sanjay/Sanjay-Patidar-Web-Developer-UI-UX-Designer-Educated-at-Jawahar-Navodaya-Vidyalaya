// src/pages/Skills.jsx
import React from 'react';
import styled from 'styled-components';
import '../styles/Skills.css';
import developerIcon from '../assets/developer.png';
import appDevIcon from '../assets/app-development.png';
import codingIcon from '../assets/coding.png';
import goalIcon from '../assets/goal.png';
import teamLeaderIcon from '../assets/team-leader.png';

const SkillsContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #D0EAE7;

`;

const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  text-align: center;
`;

const Skills = () => {
  const skillsData = [
    {
      name: 'Web Development',
      icon: developerIcon,
      description: 'Building the digital backbone of the internet.',
    },
    {
      name: 'App Developer',
      icon: appDevIcon,
      description: 'Creating smart solutions for smartphones.',
    },
    {
      name: 'UI/UX Design',
      icon: codingIcon,
      description: 'Shaping digital interfaces for user delight.',
    },
    {
      name: 'Goal Oriented',
      icon: goalIcon,
      description: 'Navigating tech terrain with clear objectives.',
    },
    {
      name: 'Team Leader',
      icon: teamLeaderIcon,
      description: 'Steering the tech ship to success.',
    },
    // Add more skills
  ];

  return (
    <SkillsContainer>
      <SkillsHeading>Skills</SkillsHeading>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon src={skill.icon} alt={skill.name} />
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
