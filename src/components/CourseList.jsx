import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RingLoader } from 'react-spinners'; // Import the RingLoader component
import courseImage1 from '../assets/html.png';
import courseImage2 from '../assets/css.png';
import courseImage3 from '../assets/responsive1.png';
import courseImage4 from '../assets/preprocessors.png';

const Title = styled.h1`
  color: #583313;
  font-size: 2rem;
  margin: 1rem;
  font-family: 'Playfair Display', serif;
  margin-top: 0rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: skew(-5deg);

  @media (max-width: 768px) {
    margin-top: 0rem;
    font-size: 1.5rem;
  }
`;
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  z-index: 9999; /* Ensure it's above other elements */
`;
const Description = styled.p`
  color: #13584F;
  font-size: 1rem;
  margin: 1rem;
  font-family: 'Playfair Display', serif;
  margin-top: 0rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: skew(-5deg);

  @media (max-width: 768px) {
    margin-top: 0rem;
    font-size: 1rem;
  }
`;

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const { category } = useParams();

  useEffect(() => {
    async function fetchCourses() {
      try {
        let response;
        if (!category || category === 'all') {
          response = await axios.get('https://eduxcel-api-15jun-dtvt.onrender.com/api/courses/category/all');
        } else {
          response = await axios.get(`https://eduxcel-api-15jun-dtvt.onrender.com/api/courses/category/${category}`);
        }
        if (!response) {
          response = await axios.get('https://eduxcel-api-15jun-dtvt.onrender.com/api/courses/category');
        }
        setCourses(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false); 
        toast.error('Failed to fetch courses. Please try again later.');
      }
    }

    fetchCourses();
  }, [category]);

  const uniqueCategories = Array.from(new Set(courses.map(course => course.category)));

  const handleCourseCardClick = () => {
    const link = "https://eduxcel.vercel.app/";
    window.open(link, '_blank');
  };

  const getImageForCategory = (category) => {
    switch (category) {
      case 'html_courses':
        return courseImage1;
      case 'css_courses':
        return courseImage2;
      case 'responsive_web_design_courses':
        return courseImage3;
      case 'css_preprocessors_courses':
        return courseImage4;
      default:
        return '';
    }
  };

  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
      {loading && ( 
        <div className="loading-overlay">
 <LoadingOverlay>
          <RingLoader color="#13584F" loading={loading} size={150} />
        </LoadingOverlay>        </div>
      )}
      <div className="course-list">
        <div className="course-cards">
          {uniqueCategories.map((category, index) => {
            const course = courses.find(course => course.category === category);
            const image = getImageForCategory(category);
            return (
              <div
                className="course-card"
                key={index}
                onClick={() => handleCourseCardClick(category)}
              >
                <div
                  className="course-image"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="course-info">
                  <Title>{category}</Title>
                  <Description>{course.description}</Description>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseList;
