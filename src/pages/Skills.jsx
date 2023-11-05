
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
  background-color: #d0eae7;
`;
const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #ff5e62;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff5e62, #ff9966);
    position: absolute;
    bottom: -8px;
    left: 0;
    border-radius: 10px;
  }

  &:before {
    content: '🚀';
    font-size: 2rem;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;


const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
      margin-top:20px;
  background: linear-gradient(to right, #ff9966, #ff5e62);

  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SkillName = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Pacifico', cursive; /* Example font family */
  color: #ffcc00; /* Yellow color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow effect */
  transition: color 0.3s;

  &:hover {
    color: #ff9900; /* Darker yellow color on hover */
  }
`;


const SkillDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s, transform 0.3s;

  ${SkillCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Skills = () => {
  const skillsData = [
    {
      name: 'Web Development',
      icon: developerIcon,
      description: 'Building the digital backbone of the internet.',
    },
    {
      name: 'App Development',
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
