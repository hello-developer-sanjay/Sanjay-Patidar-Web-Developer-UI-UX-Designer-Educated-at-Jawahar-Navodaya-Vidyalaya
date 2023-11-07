import  { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition"; // Import your PageTransition component
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
import Education from "./components/Education";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the route changes.
  }, [pathname]);

  return null; // This component doesn't render anything.
};
const AppRouter = () => {
 
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/:category" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/api/projects/details/:id" element={<PageTransition><ProjectDetails /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/experiences" element={<PageTransition><Experiences /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/certifications/:title" element={<PageTransition><CertificationDetails /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
