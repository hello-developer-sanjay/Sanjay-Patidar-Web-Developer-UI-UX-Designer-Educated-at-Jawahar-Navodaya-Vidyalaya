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
      const response = await axios.post('https://portfolio-api-b53a.onrender.com/api/submit-contact', {
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
      <title>Get in Touch with Sanjay Patidar: Expert Web Developer and UI/UX Designer | Contact for Cutting-edge Digital Solutions and Collaborative Projects</title>
        <meta
          name="description"
          content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
        />
        <meta name="keywords" content="Sanjay Patidar, contact, collaboration, form submission, admin details, web developer , full stack web developer , cutting edge tech, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond" />
        <meta property="og:title" content="Get in Touch with Sanjay Patidar: Expert Web Developer and UI/UX Designer | Contact for Cutting-edge Digital Solutions and Collaborative Projects" />
        <meta property="og:description" content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get in Touch with Sanjay Patidar: Expert Web Developer and UI/UX Designer | Contact for Cutting-edge Digital Solutions and Collaborative Projects" />
        <meta name="twitter:description" content="Fill and submit the contact form to get in touch with Sanjay Patidar. Receive admin details upon form submission.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design. Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
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
