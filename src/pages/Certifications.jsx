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
          "https://portfolio-back-aruc.onrender.com/api/certifications"
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
        <title>Sanjay Patidar | Expert Web Developer & UI/UX Designer | Certifications</title>
        <meta
          name="description"
          content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more."
        />
        <meta name="keywords" content="Sanjay Patidar, certifications, AI, Python, Machine Learning, Django, Full Stack Web Development, UI Design" />
        <meta property="og:title" content="Sanjay Patidar | Certifications" />
        <meta property="og:description" content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more." />
        <meta property="og:url" content="https://sanjay-patidar.vercel.app/certifications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/icon+(2).png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay Patidar | Certifications" />
        <meta name="twitter:description" content="Explore certifications obtained by Sanjay Patidar. Discover various certifications in Artificial Intelligence, Python, Machine Learning, Django, Full Stack Web Development, UI Design, and more." />
        <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/icon+(2).png" />
      </Helmet>

      <SkillsHeading>Sanjay Patidar | Expert Web Developer & UI/UX Designer | Certifications</SkillsHeading>

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
