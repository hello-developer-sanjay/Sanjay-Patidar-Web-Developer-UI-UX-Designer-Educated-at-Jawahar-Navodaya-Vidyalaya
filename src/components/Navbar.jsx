
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolder } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
 background: linear-gradient(to right, #3498db, #2c3e50); 
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
   
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  border-bottom: 2px solid #2980b9; 


  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    background: linear-gradient(to right, #2c3e50, #3498db); /* Gradient background on hover */
    
  

  
`;


const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #ff6b6b, #ffb347); /* Gradient background */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Hide the text color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Text shadow for depth */
`;


const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
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
    color: #ffcc29; /* Change text color on hover */
    transform: scale(1.1); /* Scale up the text on hover */
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
  left: 50%;
  transform: translateX(-50%);
  background: #1a1c23;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  max-width: 200px;
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.5rem;
  border-radius: 8px;
`;

const SubNavItem = styled.li``;

const SubNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #333;
  }
`;

const Navbar = () => {
  return (
    <>
      <style>{'body { margin: 0; }'}</style>
      <Nav>
       <NavLinkStyled to ="/">
        <Logo>Hey Sanju</Logo>
      </NavLinkStyled>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">
              <FaHome /> Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/projects">
              <FaFolder /> Projects
            </NavLinkStyled>
            <SubNavList className="SubNavList">
              <SubNavItem>
                <SubNavLinkStyled to="/projects/web">
                  Web Projects
                </SubNavLinkStyled>
              </SubNavItem>
              <SubNavItem>
                <SubNavLinkStyled to="/projects/mobile">
                  Mobile Projects
                </SubNavLinkStyled>
              </SubNavItem>
              <SubNavItem>
                <SubNavLinkStyled to="/projects/other">
                  Other Projects
                </SubNavLinkStyled>
              </SubNavItem>
            </SubNavList>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
