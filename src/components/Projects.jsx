import  React,{ useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const ProjectsContainer = styled.div`
padding: 2rem;
background-color: #050816;
min-height: 100vh;
overflow: hidden; /* Hide overflow for container */
`;

const ProjectsNavigation = styled.nav`
position: sticky;
  top: 0;
  z-index: 1; /* Ensure it's above other content */
  margin-bottom: 2rem;
  background-color: #050816;
  padding: 0.2rem 0.2rem;
  overflow-y: auto; /* Enable vertical scrolling for navigation */
  max-height: calc(100vh - 4rem); /* Limit height to viewport height minus padding */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Roundness of the scrollbar thumb */
  }`;

const ProjectsNavList = styled.ul`
list-style: none;
display: flex;
color: #fff;
flex-wrap: wrap;
gap: 1rem;
`;




const ProjectWebsiteLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem 1rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 100%);
  background-size: 100% 100%;
  transition: transform 0.3s, background 0.5s, box-shadow 0.3s;

  svg {
    margin-right: 1rem;
    fill: #ffffff;
    transition: fill 0.3s;
  }

  &:hover {
    background-position: 100% 0;
   
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    filter: hue-rotate(45deg); /* Add a vibrant color shift on hover */
  }

  &:hover svg {
    fill: #ffffff;
    transform: rotate(45deg); /* Rotate the icon on hover */
  }
`;

const ProjectTitle = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #0070f3;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #ff6b6b; /* Change color on hover */
    transform: translateY(-2px); /* Add a subtle upward hover effect */
  }

  .arrow {
    display: block; /* Display the arrow as a block element */
    text-align: left;
    font-size: 1.5rem; /* Adjust the font size of the arrow */
    animation: bounce 1s infinite; /* Add the bounce animation */
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;


const ProjectsNavItem = styled.li`
flex: 1;
padding: 0.5rem;
text-align: center;
border-radius: 5px;
transition: transform 0.2s, background-color 0.2s;
color: #ffffff;
  
`;

const ProjectsNavLinkContainer = styled(NavLink)`
text-decoration: none;
display: block;
position: relative;
color: #fff;

&:hover {
  color: yellow;
}

&.active {
  color: red;
  /* Text color for the active link */
}
`;





const ProjectsContent = styled.div`
background-color: #050816;
padding: 1.5rem;
border-radius: 10px;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
overflow-y: auto; 
max-height: calc(100vh - 4rem);
margin-top: 0rem; 

/* Custom scrollbar styles */
&::-webkit-scrollbar {
  width: 10px !important; 
}
&::-webkit-scrollbar-track {
  background: linear-gradient(to right, #050816, #111); 
}
&::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #0070f3, #00ff95); 
  border-radius: 5px !important; 
  border: 3px solid #050816; 
}
&::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to right, #ff6b6b, #ffdd59); 
  border-color: #111; 
}
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
 font-size: 1rem; /* Small font size */
  line-height: 1.6;
  margin-top: 1rem;
  position: relative;
  color: #fff; /* Default text color */

  span.highlight {
    color: #0070f3; /* Highlighted text color */
    font-weight: bold; /* Highlighted text bold */
  }


  &:before {
    content: ' Project Description'; /* Use decorative stars as labels */
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #0070f3; /* Change the label color */
    font-size: 1.2rem; /* Adjust label font size */
    letter-spacing: 2px; /* Add letter spacing for emphasis */
    text-align: left;
    text-transform: uppercase; /* Uppercase text for emphasis */
  }

  &:after {
    content: '';
    display: block;
    margin-top: 0.5rem;
    height: 2px;
    background: linear-gradient(
      to right,
      #0070f3,
      #ff6b6b,
      #33d9b2,
      #ffad5a
    ); /* Use a gradient background */
    background-size: 300% 100%; /* Control the gradient width */
    animation: gradient-shift 5s linear infinite; /* Animation for gradient shift */
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 0%;
    }
  }
`;


const generateSlug = (title) => {
  return title.toString().toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w-]+/g, '')     // Remove all non-word characters
    .replace(/--+/g, '-')        // Replace multiple - with single -
    .replace(/^-+/, '')          // Trim - from start of text
    .replace(/-+$/, '');         // Trim - from end of text
};

const Projects = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchProjects() {
      try {
        let response;
        if (!category || category === 'all') { // Check if category is undefined or "all"
          response = await axios.get('https://portfolio-api-14april.onrender.com/api/projects/category/all');
        } else {
          response = await axios.get(`https://portfolio-api-14april.onrender.com/api/projects/category/${category}`);
        }
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, [category]);
  return (
    <ProjectsContainer>
      <Helmet>
      <title>Sanjay Patidar Projects Portfolio: Web Development, Mobile App Development, UI/UX Design</title>
  <meta name="description" content="Explore the diverse range of projects developed by Sanjay Patidar, showcasing expertise in web development, mobile app development, and various other categories. Discover innovative solutions, unique designs, and successful implementations." />
  <meta name="keywords" content="Sanjay Patidar, projects, web development, mobile app development, innovative projects, technology, programming, coding, software development" />
  <meta name="author" content="Sanjay Patidar" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Sanjay Patidar Projects Portfolio: Web Development, Mobile App Development, UI/UX Design" />
  <meta property="og:description" content="Explore the diverse range of projects developed by Sanjay Patidar, showcasing expertise in web development, mobile app development, and various other categories. Discover innovative solutions, unique designs, and successful implementations." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sanjay-patidar.vercel.app/projects" />
  <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
  <meta property="og:image:alt" content="Sanjay Patidar Projects Portfolio: Web Development, Mobile App Development, UI/UX Design" />
  <meta property="og:site_name" content="Sanjay Patidar Projects Portfolio: Web Development, Mobile App Development, UI/UX Design" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sanjay Patidar Projects Portfolio: Web Development, Mobile App Development, UI/UX Design" />
  <meta name="twitter:description" content="Explore the diverse range of projects developed by Sanjay Patidar, showcasing expertise in web development, mobile app development, and various other categories. Discover innovative solutions, unique designs, and successful implementations." />
  <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/skillsImage.png" />
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
                        "https://sanjay-patidar.vercel.app/projects",
                        "https://sanjay-patidar.vercel.app/api/projects/details/6505a550d1e96d17df4fe123",
                        "https://sanjay-patidar.vercel.app/api/projects/details/65a4bfcdc63d5aab2ed3cb71",
                        "https://sanjay-patidar.vercel.app/api/projects/details/65a4c4b0c63d5aab2ed3cb73",


         ]
   

       })}
     </script>

</Helmet>

     <ProjectsNavigation>
        <ProjectsNavList>
          <ProjectsNavItem>
            <ProjectsNavLinkContainer to="/projects/all">
              All Projects
            </ProjectsNavLinkContainer>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLinkContainer to="/projects/web">
              Web Projects
            </ProjectsNavLinkContainer>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLinkContainer to="/projects/mobile">
              Mobile Projects
            </ProjectsNavLinkContainer>
          </ProjectsNavItem>
          <ProjectsNavItem>
            <ProjectsNavLinkContainer to="/projects/other">
              Other Projects
            </ProjectsNavLinkContainer>
          </ProjectsNavItem>
        </ProjectsNavList>
      </ProjectsNavigation>



      <ProjectsContent>

      {loading ? ( // Show loading indicator when loading
          <p>Loading...</p>
        ) : projects.length > 0 ? (
               <ProjectList>
            {projects.map((project) => (
              <ProjectItem key={project._id}>
                               <NavLink to={`/project/${generateSlug(project.title)}`} style={{ textDecoration: 'none' }}>

                  <ProjectTitle>
                    <span className="arrow">Project Insights 👇</span>
                    {project.title}
                  </ProjectTitle>
                </NavLink>
                {project.websiteLink && (
                  <ProjectWebsiteLink href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="18"
                      height="18"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 19a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h5l2 2h2a2 2 0 012 2v8z"
                      />
                    </svg>
                    Visit Website
                  </ProjectWebsiteLink>
                )}
               {project.description && (
                  <ProjectDescription>
                    {project.description.map((desc, index) => {
                      // Use regular expressions to find text between ^ markers and apply styling
                      const highlightedText = desc.split(/\^([^]+?)\^/).map((part, i) => {
                        if (i % 2 === 1) {
                          // Apply styles to text between markers
                          return <span key={i} className="highlight">{part}</span>;
                        }
                        return part;
                      });

                      return (
                        <React.Fragment key={index}>
                          {highlightedText}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </ProjectDescription>
                )}
              </ProjectItem>
            ))}
          </ProjectList>
        ) : (
          <p>No projects found.</p>
        )}

      </ProjectsContent>

    </ProjectsContainer>
  );
};

export default Projects;
