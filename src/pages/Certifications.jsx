import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import "../styles/Certifications.css";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const response = await axios.get(
          "https://portfolio-api-14april.onrender.com/api/certifications"
        );
        setCertifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching certifications:", error);
        setLoading(false);
      }
    }

    fetchCertifications();
  }, []);
  
  const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;
  const SkillsHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);  

  text-align: center;
  justify-content: center;
  color: #24086C;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff5e62, #ff9966);
    position: absolute;
    bottom: -8px;
    left: 0;
    border-radius: 10px;
  }

  &:before {
    content: '🏅  ';
    font-size: 2rem;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;
  return (
    <>
      <Helmet>
        <title>Sanjay Patidar | Web Developer & UI/UX Designer | Certifications | Crafting Scalable Digital Solutions for Global Innovation</title>
        <meta
          name="description"
          content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design."
        />
        <meta name="keywords" content="Sanjay Patidar, certifications, AI, Python, Machine Learning, Django, Full Stack Web Development, UI Design" />
        <meta property="og:title" content="Sanjay Patidar | Web Developer & UI/UX Designer | Certifications" />
        <meta property="og:description" content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design." />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/certifications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/icon+(2).png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay Patidar | Web Developer & UI/UX Designer | Certifications" />
        <meta name="twitter:description" content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more.Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design." />
        <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/icon+(2).png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'ItemList',
            "name": "Sanjay Patidar",
            "birthDate": "1998-07-01",
            "birthPlace": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Indore"
              }
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Chandigarh University",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chandigarh",
                  "addressRegion": "Punjab",
                  "addressCountry": "India"
                }
              }
            },
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Indore",
                "addressRegion": "Madhya Pradesh",
                "postalCode": "452001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Chandigarh",
                "addressRegion": "Punjab",
                "postalCode": "160001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "226001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Bhopal",
                "addressRegion": "Madhya Pradesh",
                "postalCode": "462001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "postalCode": "440001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "530001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Kochi",
                "addressRegion": "Kerala",
                "postalCode": "682001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Guwahati",
                "addressRegion": "Assam",
                "postalCode": "781001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Dehradun",
                "addressRegion": "Uttarakhand",
                "postalCode": "248001",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Raipur",
                "addressRegion": "Chhattisgarh",
                "postalCode": "492001",
                "addressCountry": "India"
              }
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Eduxcel" 
            },
            "url": "https://sanjay-patidar.vercel.app/",
            "sameAs": [
              "https://www.linkedin.com/in/sanjay-patidar-25b580292/",
              "https://github.com/hello-developer-sanjay",
              "https://www.instagram.com/sanjay_patidar_mcmxcviii/",
              "https://eduxcel.vercel.app/",
                           "https://eduxcel.vercel.app/signup",
                           
  "https://sanjay-patidar.vercel.app/projects",
  "https://sanjay-patidar.vercel.app/careers",

  "https://sanjay-patidar.vercel.app/skills",
  "https://sanjay-patidar.vercel.app/experiences",
  "https://sanjay-patidar.vercel.app/certifications",
  "https://sanjay-patidar.vercel.app/resume",
  "https://sanjay-patidar.vercel.app/blogs",
  "https://sanjay-patidar.vercel.app/education",
  "https://sanjay-patidar.vercel.app/contact"


            ]
      

          })}
        </script>

      </Helmet>

      <SkillsHeading>Sanjay Patidar | Web Developer & UI/UX Designer | Certifications </SkillsHeading>

      <div className="certifications-container">
        {loading ? (
          <RingLoader color="#4b0082" loading={loading} css={override} size={150} />
        ) : (
          certifications.map((certification) => (
            <div key={certification.id} className="certification-card">
              <h3 className="certification-title">{certification.title}</h3>
              <div className="certification-images">
                {certification.imageUrl.map((url, index) => (
                  <img
                    key={index}
                    className="certification-image"
                    src={url}
                    alt={`Certification ${index + 1}`}
                  />
                ))}
              </div>
              <Link
                to={`/certifications/${encodeURIComponent(certification.title)}`}
                className="certification-link"
              >
                Explore More
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Certifications;
