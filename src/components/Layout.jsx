/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar'; 
import Footer from './Footer';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum viewport height */
`;

const Content = styled.div`
  flex: 1;
  padding-top: 64px; /* Adjust the value to account for Navbar height */
  margin-left: 100px; /* Adjust the value to account for Sidebar width */
  overflow-y: auto; /* Add vertical scrollbar if content overflows */
`;

const Footer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Sidebar/>
      <Footer/>
      
      <Content>{children}</Content>
      <Footer>&copy; 2023 Sanjay Patidar</Footer>
    </LayoutContainer>
  );
};

export default Layout;
