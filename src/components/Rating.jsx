import { useState, useEffect } from 'react';
import axios from 'axios';

const Starstar = () => {
  const [star, setstar] = useState(() => {
    const storedstar = localStorage.getItem('star');
    return storedstar ? parseFloat(storedstar) : 0;
  });
  const [hoverstar, setHoverstar] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [averagestar, setAveragestar] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://portfolio-api-14april.onrender.com/stars');
        const { data } = response;
        setUsersCount(data.length);
        setAveragestar(
          data.reduce((sum, star) => sum + star.star, 0) / data.length
        );
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchData();
  }, []);

  const handleStarClick = async (starIndex) => {
    const newstar = starIndex === star ? 0 : starIndex;
    setstar(newstar);
    localStorage.setItem('star', newstar);
  
    try {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        const randomUserId = Math.random().toString(36).substring(7);
        localStorage.setItem('currentUser', randomUserId);
      }
  
      await axios.post('https://portfolio-api-14april.onrender.com/stars', {
        userId: localStorage.getItem('currentUser'),
        star: newstar,
      });
  
      const response = await axios.get('https://portfolio-api-14april.onrender.com/stars ');
      const { data } = response;
      setUsersCount(data.length);
      setAveragestar(
        data.reduce((sum, star) => sum + star.star, 0) / data.length
      );
  
      // Update current star display
      setstar(newstar); // Update the current star to the new star
    } catch (error) {
      console.error('Error updating stars:', error);
    }
  };
  const renderStars = (starValue) => {
    const starCount = Math.round(starValue); // Round the star value to the nearest whole number
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<span key={i} style={{ color: '#ffd700' }}>★</span>);
      } else {
        stars.push(<span key={i} style={{ color: '#808080' }}>☆</span>);
      }
    }

    return stars;
  };
  const handleStarHover = (starIndex) => {
    setHoverstar(starIndex);
  };

  const handleStarLeave = () => {
    setHoverstar(0);
  };

  return (
    <div
      onMouseLeave={handleStarLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
          key={index}
          style={{
            cursor: 'pointer',
            fontSize: '24px', // Adjust size as needed
            color: starValue <= (hoverstar || star) ? '#ffd700' : '#808080', // Use gold color for filled stars and gray color for empty stars
          }}
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => handleStarHover(starValue)}
        >
          {starValue <= (hoverstar || star) ? '★' : '☆'}
        </span>
        
        );
      })}
      {/* Stars for average star */}
     
      {/* Your existing code for displaying user's star, total users, and overall star */}
      <p>My star: {hoverstar || star}/5</p>
      <div style={{ marginTop: '10px' }}>
        {renderStars(averagestar)}
        <span style={{ marginLeft: '10px' }}>{isNaN(averagestar) ? '0.0' : averagestar.toFixed(1)}/5</span>
      </div>

      <p>Overall star: {isNaN(averagestar) ? '0' : averagestar.toFixed(1)}/5</p>
    </div>
  );
};

export default Starstar;
  
