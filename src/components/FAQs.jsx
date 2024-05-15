import { useState } from 'react';
import '../styles/Faq.css';

const Faq = () => {
  const faqs = [
    {
      question: 'Who is Sanjay Patidar and where is he from?',
      answer: 'Sanjay Patidar, a dedicated individual with a passion for technology and innovation, was born on May 24, 1998, in the lively city of Indore, Madhya Pradesh, India. Growing up in this culturally rich environment has greatly influenced his outlook on life and his approach to problem-solving.',
    },
    {
      question: 'What technologies and skills does Sanjay Patidar possess?',
      answer: ' Sanjay Patidar is skilled in a wide range of technologies, such as React, Node.js, Express.js, MongoDB, Git, Docker, and Kubernetes. Beyond technical expertise, he excels in agile methodologies, SEO optimization, content and link building, as well as communication and leadership.      ',
    },
    {
      question: 'How can I contact Sanjay Patidar?',
      answer: "You can reach out to Sanjay Patidar via email at sanjay.patidar.eduxcel@gmail.com or explore his online portfolio at https://sanjay-patidar.vercel.app. His digital footprint also extends to GitHub under the username hello-developer-sanjay.      ",
    },
    {
      question: "What is Sanjay Patidar's professional experience?",
      answer: "Sanjay Patidar has led six standalone projects, showcasing his technical prowess and delivering tangible outcomes. He has significantly contributed to elevating EduXcel to the forefront of the tech industry through innovative insights and cutting-edge education initiatives. Sanjay's expertise extends to optimizing SEO strategies, resulting in global visibility with over 12,000 impressions across 116+ countries.      ",
    },
    {
      question: "What was Sanjay Patidar's educational journey?",
      answer: " Sanjay Patidar pursued his Bachelor of Engineering in Computer Science & Engineering from Chandigarh University. Prior to that, he completed his secondary education at Jawahar Navodaya Vidyalaya, laying a strong foundation for his academic and professional endeavors.",
    },

    {
question : " How has Sanjay Patidar's journey at Jawahar Navodaya Vidyalaya and Chandigarh University shaped his professional trajectory?",
answer :"At Jawahar Navodaya Vidyalaya, Sanjay Patidar cultivated a nurturing educational environment, fostering growth and development from July 2009 to April 2017. His journey continued at Chandigarh University, where he honed his technical skills and embraced opportunities for personal and professional growth, culminating in a Bachelor's degree in Computer Science & Engineering."

    },
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <div className="faq-container">
        <div className="flex justify-center items-center  mt-4">
        </div>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className={`question ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}></span>
          </div>
          {activeIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
