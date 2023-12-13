
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    iconBg: "linear-gradient(135deg, #4E50A0, #2B3252)",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tech Innovations",
    iconBg: "linear-gradient(135deg, #4E50A0, #2B3252)",
    date: "May 2021 - Present",
    points: [
      "Building end-to-end web solutions with a focus on both front-end and back-end development.",
      "Leading the integration of new technologies and frameworks to enhance overall project efficiency.",
      "Collaborating with clients to understand project requirements and deliver tailored solutions.",
      "Conducting training sessions for junior developers on best practices and new technologies.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Creative Designs Agency",
    iconBg: "linear-gradient(135deg, #4E50A0, #2B3252)",
    date: "January 2019 - February 2020",
    points: [
      "Designing user interfaces that prioritize usability, accessibility, and a seamless user experience.",
      "Collaborating with development teams to implement responsive and visually appealing designs.",
      "Conducting user research and usability testing to gather valuable feedback for design iterations.",
      "Creating design prototypes and mockups for client presentations and project planning.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Innovate Mobile Solutions",
    iconBg: "linear-gradient(135deg, #4E50A0, #2B3252)",
    date: "June 2018 - December 2018",
    points: [
      "Developing native mobile applications for iOS and Android platforms using React Native.",
      "Optimizing app performance and ensuring seamless integration with various mobile devices.",
      "Collaborating with product managers to define app features and functionalities.",
      "Conducting debugging and troubleshooting to ensure the stability of mobile applications.",
    ],
  },
  // Add more experience entries as needed
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};


const entryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      style={{ background: "#f5f5f5", padding: "50px 0" }} // Add background color and padding
    >
      <div className="central-ring"></div>
      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element ${index % 2 === 0 ? 'right' : 'left'}`}
            contentStyle={{
              background: experience.iconBg,
              color: "#fff",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              padding: "20px",
              border: "2px solid #fff",
              backgroundClip: "padding-box", // To prevent the gradient from overlapping the border
            }}
            contentArrowStyle={{ borderRight: `10px solid ${experience.iconBg}`, borderLeft: `10px solid ${experience.iconBg}` }}
            date={experience.date}
            iconStyle={{ background: "#fff", color: experience.iconBg, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            icon={<FaReact />}
          >
            <motion.h3
              className="vertical-timeline-element-title"
              variants={entryVariants}
            >
              {experience.title}
            </motion.h3>
            <motion.h4
              className="vertical-timeline-element-subtitle"
              variants={entryVariants}
            >
              {experience.company_name}
            </motion.h4>
            <ul>
              {experience.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  variants={entryVariants}
                  style={{ listStyleType: "none" }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience;
