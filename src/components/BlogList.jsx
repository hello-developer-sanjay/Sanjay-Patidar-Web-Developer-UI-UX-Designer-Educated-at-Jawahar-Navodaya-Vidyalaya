import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/BlogList.css';
import courseImage1 from '../assets/vs_code_articles.jpg';
import courseImage2 from '../assets/gitarticles.jpg';
function BlogList() {
  const [journals, setJournals] = useState([]);
  const { vision } = useParams();

  useEffect(() => {
    async function fetchJournals() {
      try {
        let response;
        if (!vision || vision === 'all') {
          response = await axios.get('https://portfolio-forblogs-zdl0.onrender.com/api/vision/all');
        } else {
          response = await axios.get(`https://portfolio-forblogs-zdl0.onrender.com/api/vision/${vision}`);
        }
        if (!response) {
          response = await axios.get('https://portfolio-forblogs-zdl0.onrender.com/api/vision');
        }
        setJournals(response.data);
      } catch (error) {
        console.error('Error fetching journals:', error);
      }
    }

    fetchJournals();
  }, [vision]);

  const uniqueCategories = Array.from(new Set(journals.map(journal => journal.vision)));

 


 
  return (
    <div className="course-list">
      <div className="course-cards">
        {uniqueCategories.map((vision, index) => {
          const journal = journals.find(journal => journal.vision === vision);
          const image = getImageForVision(vision);
          return (
            <div
              className="course-card"
              key={index} // Use index as key since vision itself is not unique
            
            >
              <Link to={`/${vision}`}>
                <div
                  className="course-image"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
                <div className="course-info">
                  <h3>{vision}</h3>
                  <p>{journal.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
  
    </div>
  );
}

// Function to get the image URL for each category
function getImageForVision(vision) {
  switch (vision) {
    case 'vs_code_articles':
      return courseImage1;
    case 'git_articles':
      return courseImage2;
 
    default:
      return ''; 
  }
}

export default BlogList;
