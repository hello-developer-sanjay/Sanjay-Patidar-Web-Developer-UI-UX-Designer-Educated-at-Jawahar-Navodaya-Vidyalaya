import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
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
      { name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/docs/installation" },

      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

      { name: "React JS", link: "https://reactjs.org/docs/getting-started.html" },
            { name: "Git | Github", link: "https://git-scm.com/doc" },

      { name: "Node JS", link: "https://nodejs.org/en/docs/" },
      { name: "Express JS", link: "https://expressjs.com/" },
      { name: "RESTful APIs", link: "https://restfulapi.net/" },
      { name: "MongoDB", link: "https://docs.mongodb.com/" },
      { name: "Docker", link: "https://docs.docker.com/" },
      { name: "Kubernetes", link: "https://kubernetes.io/docs/" }, // Added comma here
      { name: "AWS/Azure/GCP", link: "https://aws.amazon.com/documentation/" },
      { name: "GraphQL", link: "https://graphql.org/learn/" },
      { name: "Agile Methodologies", link: "https://www.agilealliance.org/agile101/" },
      { name: "On-Page/Off-Page SEO", link: "https://moz.com/learn/seo" },
      { name: "Content Optimization", link: "https://moz.com/learn/seo/content-optimization" },
      { name: "Link Building", link: "https://moz.com/learn/seo/link-building" },
      { name: "Backlink Acquisition", link: "https://moz.com/learn/seo/backlinks" },
      { name: "Web Scraping", link: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
      { name: "Communication", link: "https://www.skillsyouneed.com/ips/what-is-communication.html" },
      { name: "Teamwork", link: "https://www.skillsyouneed.com/ips/teamwork.html" },
      { name: "Conflict resolution", link: "https://www.skillsyouneed.com/ips/conflict-resolution.html" },
      { name: "Collaboration", link: "https://www.skillsyouneed.com/ips/collaboration.html" },
      { name: "Empathy", link: "https://www.skillsyouneed.com/ips/empathy.html" },
      { name: "Mind-mapping", link: "https://www.mindtools.com/pages/article/newISS_01.htm" }
    ];
    setSkills(skillsData);
  }, []);

  return (
    <TableContainer>
      <Table>
        <thead>
          
          <TableRow>
            <TableHeader>Frontend</TableHeader>
            <TableHeader>Backend | CI/CD</TableHeader>
            <TableHeader>SEO</TableHeader>
            <TableHeader>Soft Skills</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>
              {skills.slice(0,5).map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer">
                    {skill.name}
                  </a>
                  {index !== 4 && ", "}
                </React.Fragment>
              ))}
            </TableCell>
            <TableCell>
              {skills.slice(5, 13).map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer">
                    {skill.name}
                  </a>
                  {index !== 7 && ", "}
                </React.Fragment>
              ))}
            </TableCell>
            <TableCell>
              {skills.slice(13, 19).map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer">
                    {skill.name}
                  </a>
                  {index !== 5 && ", "}
                </React.Fragment>
              ))}
            </TableCell>
            <TableCell>
              {skills.slice(19).map((skill, index) => (
                <React.Fragment key={skill.name}>
                  <a href={skill.link} target="_blank" rel="noopener noreferrer">
                    {skill.name}
                  </a>
                  {index !== 5 && ", "}
                </React.Fragment>
              ))}
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
