import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import "../styles/Certifications.css";

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

  return (
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
  );
};

export default Certifications;
