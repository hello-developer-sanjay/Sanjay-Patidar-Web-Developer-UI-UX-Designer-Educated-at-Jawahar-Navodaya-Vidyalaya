import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaFolder } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
const SidebarContainer = styled.nav`
  background-color: #20232a;
  padding: 20px;
  width: 200px; /* Increased width for more content */
  height: 100vh; /* Full height of the viewport */
  color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Shadow effect */
  display: flex;
  flex-direction: column;
  align-items: center;
   overflow-y: auto; 
  max-height: 100vh; 

  /* Add creative animations and styles */
  &:hover {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-95%)")};
    transition: transform 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #61dafb;
    font-size: 1.2rem;
    margin: 10px 0;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffcc29;
    }
  }

  button {
    background-color: #ffcc29;
    color: #20232a;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #61dafb;
    }
  }
`;


const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 10px;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: #8AB008 ;
    opacity: 0.9;
  }
`;

const SidebarTitle = styled.div`
  font-family: 'Lobster', cursive; /* Creative font */
  font-weight: bold;
  font-size: 1.0rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #ffcc29; /* Vibrant color */
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  /* Add a creative underline effect */
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #ffcc29; /* Underline color */
    bottom: -8px;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1); /* Reveal the underline on hover */
    transform-origin: left;
  }
`;


const SidebarCertifications = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarCertificationItem = styled.li`
  margin-bottom: 5px;
`;

const SidebarToggle = styled.div`
  position: sticky;
  top:0rem;
  right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: #ffcc29; /* Yellow color */
  background: #20232a; /* Background color */
  padding: 8px;
  z-index: 1001;
  border-radius: 50%; /* Circular shape */
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffcc29; /* Yellow color on hover */
    color: #20232a; /* Background color on hover */
    transform: scale(1.1); /* Slightly larger size on hover */
  }
`;

const Sidebar = () => {
  const [certifications, setCertifications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const response = await axios.get(
          "https://portfolio-back-aruc.onrender.com/api/certifications"
        );
        setCertifications(response.data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
    }

    fetchCertifications();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <SidebarToggle onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </SidebarToggle>
      <SidebarContainer open={sidebarOpen}>
        <SidebarLink to="/">
          <FaHome /> Home
        </SidebarLink>
        
        <SidebarTitle>Certifications</SidebarTitle>
        <SidebarCertifications>
          {certifications.map((certification) => (
            <SidebarCertificationItem key={certification.title}>
              <SidebarLink
                to={`/certifications/${encodeURIComponent(certification.title)}`}
              >
                {certification.title}
              </SidebarLink>
            </SidebarCertificationItem>
          ))}
        </SidebarCertifications>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
