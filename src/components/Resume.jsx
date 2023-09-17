import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  background-color: #f7f7f7;
  padding: 4rem 0;
  text-align: center;
`;

const ResumeTitle = styled.h2`
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ResumeSubtitle = styled.h3`
  font-size: 1.8rem;
  color: #555;
  margin-bottom: 2rem;
`;

const ResumeLink = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 1px;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeTitle>Unlock My Resume</ResumeTitle>
      <ResumeSubtitle>Click the link below to access my full resume.</ResumeSubtitle>
      <ResumeLink href="https://sanjaybasket.s3.ap-south-1.amazonaws.com/dev+pro/android_page-0001.jpg" target="_blank" rel="noopener noreferrer">
        Get Resume
      </ResumeLink>
    </ResumeContainer>
  );
};

export default Resume;
