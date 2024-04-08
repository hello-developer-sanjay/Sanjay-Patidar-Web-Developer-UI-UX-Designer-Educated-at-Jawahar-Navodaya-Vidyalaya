import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/CourseList.css';
import courseImage1 from '../assets/html.png';
import courseImage2 from '../assets/css.png';
import courseImage3 from '../assets/responsive1.png';
import courseImage4 from '../assets/preprocessors.png';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchCourses() {
      try {
        let response;
        if (!category || category === 'all') {
          response = await axios.get('https://eduxcel-api3-j9a2.onrender.com/api/courses/category/all');
        } else {
          response = await axios.get(`https://eduxcel-api3-j9a2.onrender.com/api/courses/category/${category}`);
        }
        if (!response) {
          response = await axios.get('https://eduxcel-api3-j9a2.onrender.com/api/courses/category');
        }
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
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
                  <h3>{category}</h3>
                  <p>{course.description}</p>
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
