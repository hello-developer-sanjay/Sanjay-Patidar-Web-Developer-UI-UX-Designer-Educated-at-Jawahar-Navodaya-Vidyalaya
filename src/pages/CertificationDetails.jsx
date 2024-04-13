import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import ModalImage from "react-modal-image";
import "../styles/CertificationDetails.css";
import backgroundImage from "../assets/background.jpg"; // Import the background image
import certificateIcon from "../assets/icon (2).png";

const CertificationDetails = () => {
  const { title } = useParams();
  const [certification, setCertification] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    async function fetchCertification() {
      try {
        const response = await axios.get(
          `https://portfolio-api-13april.onrender.com/api/certifications/${encodeURIComponent(
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
        backgroundColor:"black",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {certification && (
        <>
          <h1 className="certification-details-title">{certification.title}</h1>
          <div className="creative-description-container">
            <div className="certificate-icon-container">
              <img
                className="certificate-icon"
                src={certificateIcon}
                alt="Certificate Icon"
              />
            </div>
            <div className="certification-details-description">
              {certification.description.map((field, index) => (
                <p key={index}>{field}</p>
              ))}
            </div>
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
