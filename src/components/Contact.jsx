import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css'; // Import your CSS file for styling

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
      setSubmitMessage('Error submitting the contact form');
    }
  };

  return (
    <div className="contact-container">
      <h2>Connect with Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Your Full Name:</label>
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
            <span>Interested in Collaboration?</span>
            <input
              type="checkbox"
              checked={wantToCollaborate}
              onChange={() => setWantToCollaborate(!wantToCollaborate)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
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
          <h3>Contact Admin:</h3>
          <p>Name: {adminInfo.admin}</p>
          <p>Contact Number: {adminInfo.contactNumber}</p>
          <p>Address: {adminInfo.address}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
