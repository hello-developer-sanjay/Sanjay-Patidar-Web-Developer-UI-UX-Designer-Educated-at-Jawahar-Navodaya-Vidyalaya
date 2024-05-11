import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

const TableHeader = styled.th`
  background-color: #24086C;
  color: #fff;
  padding: 12px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

const SkillTable = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Define your skills data
    const skillsData = [
      "React JS", "Node JS", "Express JS", "RESTful APIs", "HTML5/CSS3", "JavaScript",
      "MongoDB", "Git | Github", "Docker", "Kubernetes", "AWS/Azure/GCP", "GraphQL",
      "Agile Methodologies", "On-Page/Off-Page SEO", "Content Optimization",
      "Link Building", "Backlink Acquisition", "Web Scraping", "Communication",
      "Teamwork", "Conflict resolution", "Collaboration", "Empathy", "Mind-mapping"
    ];
    setSkills(skillsData);
  }, []);

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Frontend</TableHeader>
            <TableHeader>Backend</TableHeader>
            <TableHeader>DevOps</TableHeader>
            <TableHeader>Soft Skills</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>{skills.slice(0, 5).join(', ')}</TableCell>
            <TableCell>{skills.slice(5, 11).join(', ')}</TableCell>
            <TableCell>{skills.slice(11, 15).join(', ')}</TableCell>
            <TableCell>{skills.slice(15).join(', ')}</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
