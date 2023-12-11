import React, { useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
  const [password, setPassword] = useState('');
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

  return (
    <div>
      {!authenticated ? (
        <div>
          <h1>Enter Password to Access Feedbacks and Queries</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>Feedbacks</h1>
          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback._id}>
                {feedback.name}: {feedback.feedback}
              </li>
            ))}
          </ul>
          <h1>Queries</h1>
          <ul>
            {queries.map((query) => (
              <li key={query._id}>
                {query.name}: {query.query}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProtectedPage;
