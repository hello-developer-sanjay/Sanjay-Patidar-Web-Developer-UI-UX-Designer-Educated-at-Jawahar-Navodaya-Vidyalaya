
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { useState,  } from 'react';
import { FaHome,FaProjectDiagram ,FaUserShield, FaBriefcase ,FaUserTie } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Nav = styled.nav`
background-color: #050816; 
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  


  
  @media (max-width: 768px) {
    .logo-small {
      display: block;
      font-size: 1.3rem;
      font-weight: normal;


    }

    .logo-large {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .logo-small {
      display: none;
    }

    .logo-large {
      display: block;
    }
  }
`;

const Logo = styled.span`
 font-size: 2rem;
  color: #51D5FF;
  font-family: 'Playfair Display', serif;

  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FF9585;
    transform: translateY(-3px);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, #3498db, #2ecc71);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    top: 0;
    left: 0;
    transform-origin: top left;
  }

  &::after {
    bottom: 0;
    right: 0;
    transform-origin: bottom right;
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(0);
  }

  & span {
    position: relative;
    z-index: 1;
    background: linear-gradient(45deg, #fff, #eee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease-in-out;
  }

  &:hover span {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
  }
`;

const NavListContainer = styled.div`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const NavItem = styled.li`
  position: relative;
  &:hover {
    .SubNavList {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #FFA233; /* Change text color on hover */
     /* Scale up the text on hover */
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffcc29; /* Highlight color */
    transform: scaleX(0); /* Initially hidden */
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1); /* Reveal the highlight on hover */
    transform-origin: left;
  }
`;
const SubNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: calc(100% + 14px);
  left: 10%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  max-width: 100px;
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 12px;
  color: #fff;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #2c3e50, #3498db);
  }

  &:before {
    top: -8px;
    left: calc(50% - 8px);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  &:after {
    bottom: -8px;
    left: calc(50% - 8px);
    clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
  }

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  & li {
    position: relative;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateX(8px);
    }
  }
`;



const SubNavItem = styled.li``;

const SubNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  flex-direction: column;

  font-size: 1rem;
  padding: 1rem 2rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #3498db, #2c3e50);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition: transform 0.3s ease;

  & svg {
    margin-right: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #3498db, #2c3e50);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    background: linear-gradient(135deg, #2c3e50, #3498db);
    color: #ffcc29;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
`;





const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  transition: transform 0.3s ease-in-out;



  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 6px;
    background-color: #fff;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &::before {
    transform: translateY(-12px);
  }

  &::after {
    transform: translateY(12px);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    width: 40px;

    &::before,
    &::after {
      width: 40px;
      height: 6px;
      background-color: #fff;
      border-radius: 8px;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      margin: 6px 0;
    }

    &.open::before {
      transform: translateY(6px) rotate(-45deg);
    }

    &.open::after {
      transform: translateY(-6px) rotate(45deg);
    }
  }
`;




const HamburgerMenu = styled.div`
  @media (max-width: 768px) {
    display: none;

    ${({ isOpen }) =>
      isOpen &&
      `
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 0;
        width: 90%;
        background: #050816;
        padding: 20px;
        transform-origin: top;
        animation: slideIn 0.5s ease-in-out;
        opacity: 1;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      `}
  }

  @keyframes slideIn {
    0% {
      transform: scaleY(0.1) translateY(-20px);
      opacity: 0;
    }
    50% {
      transform: scaleY(0.5) translateY(-10);
      opacity: 0.5;
    }
    100% {
      transform: scaleY(1) translateY(0);
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);   
  const [isToastVisibles, setIsToastVisibles] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const handleCareerInsightsClick = () => {
    if (!isToastVisibles) {
      toast.info("You're being redirected to explore career insights at Eduxcel...", {
        autoClose: 2000,
        onOpen: () => setIsToastVisibles(true),
        onClose: () => setIsToastVisibles(false),
      });

      setTimeout(() => {
        window.open("https://eduxcel.vercel.app/careers", "_blank");
      }, 1000); 
    }
  };

  return (
    <>
      <style>{'body { margin: 0; }'}</style>
      <Nav>
        <Sidebar />
        <NavLinkStyled to="/">
          <Logo className="logo-small">Sanjay Patidar</Logo>
          <Logo className="logo-large">Sanjay Patidar </Logo>
        </NavLinkStyled>

        <HamburgerIcon className={isOpen ? 'open' : ''} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>
        <HamburgerMenu isOpen={isOpen}>
          <NavListContainer isOpen={isOpen}>
            <NavList>
              <NavItem>
                <NavLinkStyled to="/" aria-label="Home" onClick={toggleMenu}>
                  <FaHome style={{ marginRight: '5px' }}/>
                  Home
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/courses-by-sanjay-patidar" aria-label="Home" onClick={toggleMenu}>
                  <FaHome style={{ marginRight: '5px' }}/>
                  Courses
                </NavLinkStyled>
              </NavItem>
              <NavItem>
              <NavLinkStyled to="/blogs" aria-label="Blogs" onClick={toggleMenu}>
          Blogs
          <FaBriefcase style={{ marginLeft: '5px' }} />
        </NavLinkStyled>
      </NavItem>

                  <NavItem>
        <NavLinkStyled to="#" aria-label="Career" onClick={handleCareerInsightsClick}>
          Career Insights
          <FaBriefcase style={{ marginLeft: '5px' }} />
        </NavLinkStyled>
      </NavItem>

              <NavItem>
                <NavLinkStyled to="/projects" aria-label="Projects" onClick={toggleMenu}>
                  Projects
                  <FaProjectDiagram style={{ marginLeft: '5px' }}/>
                </NavLinkStyled>
                <SubNavList className="SubNavList">
        <SubNavItem>
          <SubNavLinkStyled to="/projects/web" onClick={toggleMenu}>
            Web Projects
          </SubNavLinkStyled>
        </SubNavItem>
        <SubNavItem>
          <SubNavLinkStyled to="/projects/mobile" onClick={toggleMenu}>
            Mobile Projects
          </SubNavLinkStyled>
        </SubNavItem>
        <SubNavItem>
          <SubNavLinkStyled to="/projects/other" onClick={toggleMenu}>
            Other Projects
          </SubNavLinkStyled>
        </SubNavItem>
      </SubNavList>

              </NavItem>
              <NavItem>
              <NavLinkStyled to="/founder-eduxcel" aria-label="founder-admin" onClick={toggleMenu}>
 Founder Profile                  <FaUserTie style={{ marginLeft: '5px' }}/>
                </NavLinkStyled>
              <SubNavList className="SubNavList">

                <SubNavLinkStyled to="/protected" aria-label="Admin" onClick={toggleMenu}>
                  Admin Only
                  <FaUserShield style={{ marginLeft: '5px' }}/>
                </SubNavLinkStyled>
                <SubNavItem>
                <SubNavLinkStyled to="/founder-eduxcel" aria-label="FounderEduxcel" onClick={toggleMenu}>
                  Founder Profile
                  <FaUserTie  style={{ marginLeft: '5px' }}/>
                </SubNavLinkStyled>
              </SubNavItem>
              </SubNavList>

              </NavItem>

              
         


            </NavList>
          </NavListContainer>
        </HamburgerMenu>
      </Nav>
    </>
  );
};



export default Navbar;
