import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import  { keyframes } from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
  }

  input {
    padding: 12px;
    font-size: 16px;
    margin-right: 5px;
    width: 60%;
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .password-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    input {
      flex: 1;
    }

    .toggle-button {
      padding: 12px;
      cursor: pointer;
      border: none;
      background: none;
      font-size: 16px;
      color: #555;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }

  li {
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 200% 200%;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    background-size: 200% 200%;
    opacity: 0.5;
    z-index: -1;
    animation: ${gradientAnimation} 4s ease infinite;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 126, 95, 0.3);
  }
`;

const UnlockButton = styled.button`
  margin-left: 10px;
  padding: 12px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
  color: #555;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7e5f;
  }
`;

const ProtectedPage = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);
    const [queries, setQueries] = useState([]);
  

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post('https://portfolio-back-aruc.onrender.com/api/authenticate', { password });
      if (response.data.authenticated) {
        setAuthenticated(true);

        // Fetch feedbacks after successful authentication
        const feedbacksResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/feedbacks');
        setFeedbacks(feedbacksResponse.data);

        // Fetch queries after successful authentication
        const queriesResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/queries');
        setQueries(queriesResponse.data);
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledWrapper>
    {!authenticated ? (
      <>
        <h1>Unlock the Secrets!</h1>
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter the secret password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <UnlockButton className="toggle-button" onClick={togglePasswordVisibility}>
            {passwordVisible ? '🙈' : '👁️'}
          </UnlockButton>
        </div>
        <StyledButton onClick={handlePasswordSubmit}>Open Sesame </StyledButton>
      </>
    ) : (

        <>
          <h1>Feedbacks</h1>
          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback._id}>
                <strong>{feedback.name}:</strong> {feedback.feedback}
              </li>
            ))}
          </ul>
          <h1>Queries</h1>
          <ul>
            {queries.map((query) => (
              <li key={query._id}>
                <strong>{query.name}:</strong> {query.query}
              </li>
            ))}
          </ul>
        </>
      )}
    </StyledWrapper>
  );
};

export default ProtectedPage;
