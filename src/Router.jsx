import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Certifications from "./pages/Certifications";
import CertificationDetails from "./pages/CertificationDetails";
import Resume from './components/Resume';
import Blogs from './components/Blogs';
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProjectDetails from './components/ProjectDetails';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:category" element={<Projects />} />
        <Route path="/api/projects/details/:id" element={<ProjectDetails />} />
 {/* New route for ProjectDetails */}

        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route
          path="/certifications/:title"
          element={<CertificationDetails />}
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
