import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import ModalImage from "react-modal-image";
import "../styles/CertificationDetails.css";
import backgroundImage from "../assets/background.jpg"; // Import the background image
import certificateIcon from "../assets/icon (2).png"; // Import the certificate icon

const CertificationDetails = () => {
  const { title } = useParams();
  const [certification, setCertification] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    async function fetchCertification() {
      try {
        const response = await axios.get(
          `https://portfolio-back-dujw.onrender.com/api/certifications/${encodeURIComponent(
            title
          )}`
        );
        setCertification(response.data);
      } catch (error) {
        console.error("Error fetching certification details:", error);
      }
    }

    fetchCertification();
  }, [title]);

  const handleDownloadClick = () => {
    setShowConfetti(true);
    // No need to add any other actions here; the browser will handle the download
  };

  return (
    <div
      className="certification-details-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {certification && (
        <>
          <h2 className="certification-details-title">{certification.title}</h2>
          <div className="creative-description-container">
            <div className="certificate-icon-container">
              <img
                className="certificate-icon"
                src={certificateIcon}
                alt="Certificate Icon"
              />
            </div>
            <p className="certification-details-description">
              {certification.description.map((field, index) => (
                <span key={index}>
                  {field}
                  <br /> {/* Add a line break after each field */}
                </span>
              ))}
            </p>
          </div>
          <div className="certification-images-grid">
            {certification.imageUrls.map((imageUrl, index) => (
              <ModalImage
                key={index}
                className="certification-details-image-grid"
                small={imageUrl}
                large={imageUrl}
                alt={`${certification.title} - Image ${index + 1}`}
              />
            ))}
          </div>
          <a
            className="certification-details-download"
            href={certification.imageUrls[0]}
            download={`${certification.title}.pdf`}
            onClick={handleDownloadClick}
          >
            Download
          </a>
          {showConfetti && <Confetti />}
        </>
      )}
    </div>
  );
};

export default CertificationDetails;
