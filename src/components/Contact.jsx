import  { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css'; // Import your CSS file for styling
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [wantToCollaborate, setWantToCollaborate] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [adminInfo, setAdminInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact number format (10 digits)
    const contactNumberRegex = /^[0-9]{10}$/;
    if (!contactNumberRegex.test(contactNumber)) {
      setSubmitMessage('Please enter a valid 10-digit contact number.');
      return;
    }

    try {
      const response = await axios.post('https://portfolio-back-aruc.onrender.com/api/submit-contact', {
        fullName,
        wantToCollaborate,
        contactNumber,
      });

      setAdminInfo(response.data.adminInfo);
      setSubmitMessage(response.data.message);
    } catch (error) {
      setSubmitMessage('Error submitting contact form');
    }
  };

  return (
    <div className="contact-container">
      <Helmet>
      <title>Contact Sanjay Patidar - Get in Touch, Collaborate</title>
        <meta
          name="description"
          content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission."
        />
        <meta name="keywords" content="Sanjay Patidar, contact, collaboration, form submission, admin details" />
        <meta property="og:title" content="Contact Sanjay Patidar - Get in Touch, Collaborate" />
        <meta property="og:description" content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission." />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Sanjay Patidar - Get in Touch, Collaborate" />
        <meta name="twitter:description" content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission." />
        <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
      </Helmet>

      <h2>Fill and Submit Form to Get Admin Details</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Enter Your Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <span>Want to collaborate?</span>
            <input
              type="checkbox"
              checked={wantToCollaborate}
              onChange={() => setWantToCollaborate(!wantToCollaborate)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Your Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
          <small>Enter a 10-digit contact number.</small>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
      
      {adminInfo && (
        <div className="admin-info">
          <h3>Admin Information:</h3>
          <p>Admin: {adminInfo.admin}</p>
          <p>Contact Number: {adminInfo.contactNumber}</p>
          <p>Address: {adminInfo.address}</p>
        </div>
      )}
       <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <img
    src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/welcome.gif" 
    alt="Admin Only GIF"
    style={{
      width: '100%', 
      marginTop: '20px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  
      border: '2px solid #fff'
    }}
  />
</div>

    </div>
  );
};

export default Contact;
