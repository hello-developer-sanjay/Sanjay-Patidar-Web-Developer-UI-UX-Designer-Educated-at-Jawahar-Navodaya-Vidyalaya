import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // You can create a CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p>It seems like you've wandered off the path...</p>
      <img
        src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/lost.gif" // You can replace this with your own image
        alt="Lost in the wilderness"
      />
      <p>But don't worry! We can help you get back.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
