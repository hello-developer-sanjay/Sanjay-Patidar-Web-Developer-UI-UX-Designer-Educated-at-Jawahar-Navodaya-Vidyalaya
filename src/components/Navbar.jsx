import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolder } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #1e3a5f; /* Updated background color */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Increased box shadow */
  backdrop-filter: blur(10px); /* Adds a frosted glass effect to the background */
`;

const Logo = styled.h1`
  font-size: 1.5rem; /* Larger font size for the logo */
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px; /* Increased letter spacing */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem; /* Increased gap between items */
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
  font-size: 1.2rem; /* Slightly increased font size */

  &:hover {
    text-decoration: underline;
  }
`;

const SubNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: calc(100% + 10px); /* Increased distance from the parent item */
  left: 50%;
  transform: translateX(-50%);
  background: #1a1c23;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Increased box shadow */
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
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  /* Adjust the position to cover both Home and Projects links */
  top: calc(100% + 8px);
  left: 0;
  transform: translateX(0%);
`;

const SubNavItem = styled.li``;

const SubNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  display: inline-block;
  background: linear-gradient(to bottom, transparent 0%, transparent 50%, #fff 50%, #fff 100%);
  background-size: 100% 200%;
  background-position: 0 100%;
  color: #333; /* Change this color to your desired text color */

  &:hover {
    background-position: 0 0;
    color: #fff; /* Change this color to your desired text color on hover */
  }

  &.web {
    background-image: linear-gradient(to bottom, transparent 0%, transparent 50%, #ff6f00 50%, #ff6f00 100%); /* Updated color */
  }

  &.projects {
    background-image: linear-gradient(to bottom, transparent 0%, transparent 50%, #2196F3 50%, #2196F3 100%);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Pixel Portfolio</Logo>
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
              <SubNavLinkStyled to="/projects/web" className="web">Web Projects</SubNavLinkStyled>
            </SubNavItem>
            <SubNavItem>
              <SubNavLinkStyled to="/projects/mobile">Mobile Projects</SubNavLinkStyled>
            </SubNavItem>
            <SubNavItem>
              <SubNavLinkStyled to="/projects/other">Other Projects</SubNavLinkStyled>
            </SubNavItem>
          </SubNavList>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
