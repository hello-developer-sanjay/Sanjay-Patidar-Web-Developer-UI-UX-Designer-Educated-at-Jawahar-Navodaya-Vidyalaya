import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaFolder } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";

const SidebarContainer = styled.nav`
  background-color: #20232a;
  padding: 20px;
  width: 150px;
  height: 100%;
  color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SidebarCertifications = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarCertificationItem = styled.li`
  margin-bottom: 5px;
`;

const SidebarToggle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  z-index: 1001;
`;

const Sidebar = () => {
  const [certifications, setCertifications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/certifications"
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
