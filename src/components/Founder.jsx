/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import {  useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
  import { Helmet } from 'react-helmet';
import DuckImage from "../assets/duck4.gif";
import unlock from "../assets/unlock.gif";
import Message from './Message';
import 'react-toastify/dist/ReactToastify.css';
import About from './About';

 const HomeContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    background-color: #050816; 
    `;

const H1Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: none;
    margin-top: 0rem;
  
  }
`;
const contentBlocks = [
  {
    overview: 'Discover Sanjay Patidar: Developer, Creator, and Tech Enthusiast',

  },
  {
    title: 'Who is Sanjay Patidar?',
    description: "Sanjay Patidar, born on May 24, 1997, hails from the vibrant city of Indore, India. With a passion for digital innovation and a knack for crafting user-centric experiences, Sanjay thrives on pushing the boundaries of technology. His journey began in Indore, where he developed a deep appreciation for technology and design, shaping his path towards creating impactful digital solutions.",
  },
  {
    title: 'Where did Sanjay Patidar grow up?',
    description: "Sanjay Patidar spent his formative years in Indore, a bustling city known for its rich culture and vibrant spirit. It's here that he developed his passion for technology and design, laying the foundation for his future endeavors.",
  }
 
];


const Next = styled.h1`
font-size: 1.1rem;
color: #f3f3f3;
margin-top: 1rem;

line-height: 1.4;
text-align: justify;
border-left: 4px solid #5d00ff;
border-right: 4px solid #5d00ff;

padding-left: 10px;
padding-right:10px;
border-radius: 8px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const HeadingText = styled.h1`
font-size: 3rem;
margin-bottom: 0rem;
text-align: center;
font-weight: 900;
color: #7744B0;
font-family: 'Playfair Display', serif;
margin-top: 0rem;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */

@media (max-width: 768px) {
  margin-top: 0rem;
  font-size: 2rem;
}
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #2ecc71;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  font-family: 'Playfair Display', serif;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px; /* Increase letter spacing for a stylish look */
  transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
`;
const H2 = styled.h1`
  font-size: 2rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 900;
  color: #2ecc71;
  font-family: 'Playfair Display', serif;
  margin-top: 0rem;
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: skew(-5deg); /* Apply a slight skew for a dynamic effect */
  
  @media (max-width: 768px) {
    margin-top: 0rem;
    font-size: 2rem;

  }
`;
const StyledCreaTeaImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(46, 204, 113, 0.5);
`;

const StyledUnlockImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem; 
  box-shadow: 0px 0px 10px rgba(46, 204, 113, 0.5);
`;

const StyledSpan = styled.span`
  color: #ffffff;
  font-size: 1.5rem; /* Increase font size for emphasis */
  font-weight: bold;
  font-family: 'Playfair Display', serif;

  letter-spacing: 3px; /* Add more letter spacing */
  text-transform: uppercase;
  text-decoration: underline; /* Add an underline for a decorative touch */
  /* Add any additional styles here */
`;


const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(25, 47, 62, 0.8), rgba(11, 19, 43, 0.8));
  z-index: -1;
`;




let currentImageIndex = 0;


const Founder = () => {
 
  const [animationEnabled, setAnimationEnabled] = useState(true);

  


  const controlsArray = Array.from({ length: 7 }, () => useAnimation());

  const animateInView = async (index) => {
    await controlsArray[index].start({
      y: 0,
      opacity: 1,
      rotate: [0, (index % 2 === 0 ? 360 : -360)],
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 100,
      },
    });
  };


  

  const [ inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (inView && animationEnabled) {
      controlsArray.forEach(async (_, index) => {
        await animateInView(index);
      });
      // Disable animation after the first trigger
      setAnimationEnabled(false);
    }
  }, [controlsArray, inView, animationEnabled]);


  
  useEffect(() => {
    // Create a slideshow effect
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      // Update the profile image
      document.querySelector('.profile-image').src = images[currentImageIndex];
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
 <Helmet>
  
  <title>Sanjay Patidar: Leading the Charge at EduXcel as Founder & Developer, Empowering Tech Careers with Web Development & UI/UX Design Expertise, Aligned with Chandigarh University</title>
<meta
name="description"
content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design.Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond."
/>

<link rel="canonical" href="https://sanjay-patidar.vercel.app/founder-eduxcel" />

<meta property="og:title" content="Sanjay Patidar: Leading the Charge at EduXcel as Founder & Developer, Empowering Tech Careers with Web Development & UI/UX Design Expertise, Aligned with Chandigarh University" />
<meta property="og:description" content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design.Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://sanjay-patidar.vercel.app/founder-eduxcel" />
<meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/sanjay_patidar_profile.png" />
<meta property="og:image:alt" content="Sanjay Patidar" />
<meta property="og:site_name" content="Sanjay Patidar: Leading the Charge at EduXcel as Founder & Developer, Empowering Tech Careers with Web Development & UI/UX Design Expertise, Aligned with Chandigarh University" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sanjay Patidar: Leading the Charge at EduXcel as Founder & Developer, Empowering Tech Careers with Web Development & UI/UX Design Expertise, Aligned with Chandigarh University" />
<meta name="twitter:description" content="Discover the remarkable journey of Sanjay Patidar, a dedicated and passionate individual excelling in the realms of web development and UI/UX design. As a Computer Science and Engineering student, Sanjay embodies a profound commitment to mastering the intricacies of programming, with a specialized focus on crafting immersive digital experiences. Currently pursuing a Bachelor of Engineering degree at Chandigarh University, Sanjay brings forth a proactive approach and an unwavering dedication to excellence in all endeavors. His educational odyssey began at Jawahar Navodaya Vidyalaya School, where he laid the foundation for his academic and extracurricular prowess from 2009 to 2016. This esteemed residential institution, administered under the Ministry of Education, fostered holistic development and instilled a fervent pursuit of excellence. Throughout his tenure, Sanjay actively engaged in a plethora of inter-school competitions, showcasing his versatility and achieving distinction in both academic and non-academic domains. Building upon this robust foundation, Sanjay embarked on his tertiary education journey at Chandigarh University, where he embarked on a quest for knowledge and innovation. Embracing the cutting-edge infrastructure and progressive pedagogical approaches of the university, he delved deep into the intricacies of Computer Science Engineering. His academic trajectory is marked by a stellar GPA of 7.5, a testament to his unwavering dedication and intellectual acumen. Beyond the confines of academia, Sanjay's passion for technology extends to the realms of practical application. Actively participating in coding competitions, hackathons, and collaborative projects, he honed his problem-solving prowess and cultivated invaluable teamwork skills. His journey is characterized by a relentless pursuit of excellence, driven by a profound sense of creativity, innovation, and a commitment to delivering exceptional digital solutions. Explore the professional portfolio of Sanjay Patidar, where innovation meets expertise, and witness firsthand the culmination of passion, creativity, and a relentless pursuit of excellence in web development and UI/UX design.Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond." />
<meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/sanjay_patidar_profile.png" />
<meta name="twitter:site" content="@sanjaypatidar" />
<meta name="twitter:creator" content="@sanjaypatidar" />

<meta name="keywords" content="portfolio, personal-portfolio,developer_sanju,sanjay, Sanjay, SANJAY, Sanjay Patidar, SANJAY PATIDAR, SANJAY WEB DEVELOPER, SANJAY DEVELOPER, Full Stack Web Developer, Mern Stack Web Developer, sanjay patidar, sanjay-patidar, professional, web developer portfolio, coder, web development, UI/UX design, Chandigarh University, EduXcel, Indore,contact, developer, programmer, engineer, AI, Artificial Intelligence ,tech enthusiastic,Based in Indore, Madhya Pradesh, Sanjay serves clients across India, including	Chandigarh, Punjab, Mumbai,Maharashtra, Bangalore,Karnataka, Delhi, Kolkata, West Bengal, Chennai, Tamil Nadu, Hyderabad, Telangana, Pune, Ahmedabad, Gujarat, Jaipur, Rajasthan, Lucknow, Uttar Pradesh, Bhopal, Nagpur, Visakhapatnam, Andhra Pradesh, Kochi, Kerala, Guwahati, Assam, Bhubaneswar, Odisha, Dehradun, Uttarakhand, Raipur, Chhattisgarh,  and beyond. creativity ,creator, work , technology, coding, projects, experiences, resume, cv" />
<meta name="author" content="Sanjay Patidar" />

<script type="application/ld+json">
{JSON.stringify({
"@context": "http://schema.org",
"@type": "Person",
"name": "Sanjay Patidar",
"url": "https://sanjay-patidar.vercel.app",
"sameAs": [
 "https://www.linkedin.com/in/sanjay-patidar-25b580292/",
 "https://github.com/hello-developer-sanjay",
"https://sanjay-patidar.vercel.app/founder-eduxcel",
 "https://www.instagram.com/sanjay_patidar_mcmxcviii/",
 "https://eduxcel.vercel.app/",
"https://sanjay-patidar.vercel.app/projects",
 "https://sanjay-patidar.vercel.app/careers",

 "https://sanjay-patidar.vercel.app/skills",
 "https://sanjay-patidar.vercel.app/experiences",
 "https://sanjay-patidar.vercel.app/certifications",
 "https://sanjay-patidar.vercel.app/resume",
 "https://sanjay-patidar.vercel.app/blogs",
 "https://sanjay-patidar.vercel.app/education",
 "https://sanjay-patidar.vercel.app/contact"
],
"jobTitle": "Sanjay Patidar | Founder & Developer of EduXcel | Empowering Careers in Tech | Web Development & UI/UX Design Expert | Chandigarh University | Crafting Scalable Digital Solutions for Global Innovation",
"description": "Expert Web Developer & UI/UX Designer specializing in crafting digital experiences.",
"image": "https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png",
"birthPlace": {
 "@type": "PostalAddress",
 "addressLocality": "Indore",
 "addressRegion": "Madyapradesh",
 "addressCountry": "India"
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


})}
</script>
</Helmet>
      <BackgroundOverlay />
     
  
      <div className="w-full max-w-7xl why-content">

{contentBlocks.map((block, index) => {
                const [refContent, inViewContent] = useInView({ triggerOnce: true });
                const controlsContent = useAnimation();

                useEffect(() => {
                  if (inViewContent) {
                    controlsContent.start({
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 2,
                        delay: index * 0.2,
                        type: 'spring',
                        stiffness: 100,
                      },
                    });
                  }
                }, [inViewContent, controlsContent, index]);

                return (
                  <motion.div
                    key={index}
                    ref={refContent}
                    className="mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={controlsContent}
                  >
<H2>                      {block.title}


</H2>                    <HeadingText>     
                   {block.overview}

                   </HeadingText> 
                    <Next>     
                   {block.description}

                   </Next> 

                    
                  </motion.div>
                  
                );
              })}

           </div>
      <H1Container>
          <H1>Discover the Key to Enhanced 
</H1>
          <h1 className="text-4xl font-semibold text-blue-600 flex items-center creativity">
            <StyledSpan className="text-white-600">Pro</StyledSpan>
            <StyledCreaTeaImage src={DuckImage} alt="CreaTea" className="mx-2" />
            <StyledSpan className="text-green-600">tivity</StyledSpan>
          </h1>
          
            <H1> Partner with Me to 
            </H1>
            <h1 className="text-4xl font-semibold text-blue-600 flex items-center creativity">

          <StyledUnlockImage src={unlock} alt="Unlock" className="mx-2" />
          </h1>

          <H1>
            Your Full Potential !</H1>
        </H1Container>
       <About/>
<Message/>

    </HomeContainer>
  );
};

export default Founder;
