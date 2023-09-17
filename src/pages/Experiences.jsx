// src/pages/Experiences.jsx
import React from 'react';
import styled from 'styled-components';

const ExperiencesContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #f0f3f4; /* Soft blue background */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceCard = styled.div`
  background-color: #ffffff; /* White card background */
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem; /* Increased spacing between cards */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1); /* Slightly enhanced shadow */
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px); /* Lift the card on hover */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem; /* Larger title font size */
  margin-bottom: 0.5rem;
  color: #333; /* Darker title color */
`;

const ExperienceDate = styled.p`
  color: #777;
  font-size: 1.2rem; /* Adjusted date font size */
  margin-bottom: 1rem; /* Increased spacing below date */
`;

const ExperienceDescription = styled.p`
  line-height: 1.6;
  font-size: 1.4rem; /* Adjusted description font size */
  color: #555; /* Slightly darker description text color */
`;

const Experiences = () => {
  return (
    <ExperiencesContainer>
      <ExperienceCard>
        <ExperienceTitle>Software Developer at XYZ Company</ExperienceTitle>
        <ExperienceDate>Jan 2020 - Present</ExperienceDate>
        <ExperienceDescription>
          Responsible for developing and maintaining web applications using React and Node.js.
        </ExperienceDescription>
      </ExperienceCard>
      {/* Add more experience cards */}
    </ExperiencesContainer>
  );
};

export default Experiences;
