import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
    margin-right: 10px;
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
            <button className="toggle-button" onClick={togglePasswordVisibility}>
              {passwordVisible ? '🙈' : '👁️'}
            </button>
          </div>
          <button onClick={handlePasswordSubmit}>Open Sesame</button>
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
