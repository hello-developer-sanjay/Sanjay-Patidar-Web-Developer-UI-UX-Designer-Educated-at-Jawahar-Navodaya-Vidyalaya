
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolder,FaUserShield } from 'react-icons/fa';
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

  @media (max-width: 768px) {
    .logo-small {
      display: block;
      font-size:1.4rem;
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



const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff6b6b, #ffb347);
    clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);
    z-index: -1;
    transition: transform 0.3s ease-in-out;
  }

  &:before {
    top: 0;
    left: 0;
    transform-origin: top left;
  }

  &:after {
    bottom: 0;
    right: 0;
    transform-origin: bottom right;
  }

  &:hover:before {
    transform: rotate(180deg);
  }

  &:hover:after {
    transform: rotate(-180deg);
  }

  & span {
    position: relative;
    z-index: 1;
    background: linear-gradient(45deg, #fff, #eee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease-in-out;
  }

  &:hover span {
    background: linear-gradient(45deg, #ffcc29, #f5f500);
  }
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
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #2c3e50, #3498db);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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



const Navbar = () => {
  return (
    <>
      <style>{'body { margin: 0; }'}</style>
      <Nav>
        <NavLinkStyled to="/">
          <Logo className="logo-small">Sanju</Logo>
          <Logo className="logo-large">Sanjay Patidar : A Web Developer</Logo>
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
          <NavItem>
            <NavLinkStyled to="/protected">
            <FaUserShield /> Admin
            </NavLinkStyled>
          </NavItem>

        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
