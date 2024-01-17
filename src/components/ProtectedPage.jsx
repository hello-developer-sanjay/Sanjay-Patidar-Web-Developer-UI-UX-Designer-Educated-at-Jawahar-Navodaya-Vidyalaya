import { useState , useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import  { keyframes } from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 50vh;
  text-align: center;
  border-radius: 10px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    text-align: center;
    padding-bottom: 10px;
  }
  
  h1::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background: linear-gradient(to right, #3498db, #1abc9c);
  }
  
 
  
  h1 span {
    display: block;
    font-size: 0.8em;
    color: #777;
    margin-top: 5px;
  }
  

  input {
    padding: 12px;
    font-size: 14px;
    margin-right: 5px;
    width: 60%;
    max-width: 300px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .password-container {
    display: flex;
    align-items: center;
    justify-content:center;       
    margin-bottom: 20px;

    input {
      flex: 1;
    }

    .toggle-button {
      padding: 12px;
      cursor: pointer;
      border: none;
      background: none;
      font-size: 16px;
      color: #555;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }
  li.resolved {
    background-color: #d3ffd3; /* You can customize the background color for resolved queries */
  }

  span.resolve-button {
    cursor: pointer;
    color: #3498db;
    margin-left: 10px;
  }

  li {
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #2f2f2f, #464646);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #2f2f2f, #464646);
    opacity: 0.5;
    z-index: -1;
    animation: ${gradientAnimation} 4s ease infinite;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(47, 47, 47, 0.3);
  }
`;


const UnlockButton = styled.button`
  margin-left: 10px;
  padding: 12px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
  color: #555;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7e5f;
  }
`;
const ResolvedSpan = styled.span`
  cursor: pointer;
  color: #3498db;
  margin-left: 10px;

  &:hover {
    color: #1abc9c;
  }
`;
const ProtectedPage = () => {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [userProfiles, setUserProfiles] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [queries, setQueries] = useState([]);
    const [userDetails, setUserDetails] = useState([]); // New state to store user details

    useEffect(() => {
      // Fetch user details after successful authentication
      const fetchUserDetails = async () => {
        try {
          const userDetailsResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/userdetails');
          setUserDetails(userDetailsResponse.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
  
      if (authenticated) {
        fetchUserDetails();
      }
    }, [authenticated]);
    const [userVisitedLocations, setUserVisitedLocations] = useState([]);

  useEffect(() => {
    // Fetch user visited locations after successful authentication
    const fetchUserVisitedLocations = async () => {
      try {
        const userVisitedLocationsResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/uservisited');
        setUserVisitedLocations(userVisitedLocationsResponse.data);
      } catch (error) {
        console.error('Error fetching user visited locations:', error);
      }
    };

    if (authenticated) {
      fetchUserVisitedLocations();
    }
  }, [authenticated]);


    useEffect(() => {
      // Display a warning toast message
      toast.warning("Caution: This page is restricted to admin only, involving the management of sensitive information. Unauthorized access is strictly forbidden.", {


              position: "top-left", 
        autoClose: 10000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true, 
        draggable: true, 
        progress: undefined, 
        style: {
          background: "#EB4B13", 
          color: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", 
          borderRadius: "10px", 
        },
      });
    }, []); 
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch queries after successful authentication
          const queriesResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/queries');
          setQueries(queriesResponse.data.map(query => ({ ...query, resolved: false })));
  
          // Fetch user profiles after successful authentication
          const userProfilesResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/userprofiles');
          if (Array.isArray(userProfilesResponse.data)) {
            setUserProfiles(userProfilesResponse.data);
          } else {
            console.error('Invalid data structure received for user profiles');
          }
        } catch (error) {
          console.error('Error during data fetching:', error);
        }
      };
  
      if (authenticated) {
        fetchData();
      }
    }, [authenticated]);
  
    const handlePasswordSubmit = async () => {
      try {
        const response = await axios.post('https://portfolio-back-aruc.onrender.com/api/authenticate', { password });
        if (response.data.authenticated) {
          setAuthenticated(true);
  
          // Fetch feedbacks after successful authentication
          const feedbacksResponse = await axios.get('https://portfolio-back-aruc.onrender.com/api/feedbacks');
          setFeedbacks(feedbacksResponse.data);
        } else {
          console.log('Authentication failed');
        }
      } catch (error) {
        console.error('Error during authentication:', error);
      }
    };
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const markAsResolved = (queryId) => {
      setQueries((prevQueries) =>
        prevQueries.map((query) =>
          query._id === queryId ? { ...query, resolved: true } : query
        )
      );
    };
  
    return (
      <StyledWrapper>
        {!authenticated ? (
          <>
            <h1>Unlock the Secrets!</h1>
            <div className="password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter the secret password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <UnlockButton className="toggle-button" onClick={togglePasswordVisibility}>
                {passwordVisible ? '🙈' : '👁️'}
              </UnlockButton>
            </div>
            <StyledButton onClick={handlePasswordSubmit}>Access Dashboard
 </StyledButton>
 <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  <img
    src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/admin.gif" 
    alt="Admin Only GIF"
    style={{
      width: '100%', 
      marginTop: '20px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  
      border: '2px solid #fff'
    }}
  />
</div>

          </>
        ) : (
          <>
            {/* Display user details along with feedbacks and queries */}
            <h1>Dashboard</h1>
            <p>User wantToCollaborate:</p>
          <ul>

            {userDetails.map((user) => (
              <li key={user._id.$oid}>
                <strong>Full Name: {user.fullName}</strong>
                <p>Want to Collaborate: {user.wantToCollaborate ? 'Yes' : 'No'}</p>
                <p>Contact Number: {user.contactNumber}</p>
              </li>
            ))}
          </ul>
            <p>User Details:</p>

          <ul>
            {userProfiles.map((profile) => (
              <li key={profile._id.$oid}>
                <strong>Email: {profile.email}</strong>
                <p>Username: {profile.username}</p>
                <p>Last Sign In: {profile.lastSignInAt}</p>
                {/* Display map with location coordinates */}
                <MapContainer
                  center={[profile.location.coordinates[1], profile.location.coordinates[0]]}
                  zoom={13}
                  style={{ height: '200px', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[profile.location.coordinates[1], profile.location.coordinates[0]]}
                  >
                    <Popup>
                      User Location<br />
                      Latitude: {profile.location.coordinates[1]}<br />
                      Longitude: {profile.location.coordinates[0]}
                    </Popup>
                  </Marker>
                </MapContainer>
              </li>
            ))}
          </ul>
            <h1>Feedbacks</h1>
          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback._id}>
                <strong>UserName: {feedback.name} || Email id :{' '}
                  <a href={`mailto:${feedback.email}`}>{feedback.email}</a>
                </strong>{' '}
                {feedback.feedback}
              </li>
            ))}
          </ul>

          <h1>Queries</h1>
          <ul>
            {queries.map((query) => (
              <li key={query._id} className={query.resolved ? 'resolved' : ''}>
                <strong>UserName: {query.name} || Email id :{' '}
                  <a href={`mailto:${query.email}`}>{query.email}</a>
                </strong>{' '}
                {query.query}
                {!query.resolved && (
                  <ResolvedSpan onClick={() => markAsResolved(query._id)}>
                    &#10003; Resolve
                  </ResolvedSpan>
                )}
              </li>
            ))}
          </ul>
          <h1>User Visited Locations</h1>
          <ul>
            {userVisitedLocations.map((location) => (
              <li key={location._id}>
                <strong>User ID: {location.userId}</strong>
                           <p>IP Address: {location.ip}</p>
            <p>Fingerprint: {location.fingerprint}</p>
 
                <MapContainer
                  center={[location.location.coordinates[1], location.location.coordinates[0]]}
                  zoom={13}
                  style={{ height: '200px', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[location.location.coordinates[1], location.location.coordinates[0]]}
                  >
                    <Popup>
                      User Visited Location<br />
                      Latitude: {location.location.coordinates[1]}<br />
                      Longitude: {location.location.coordinates[0]}
                    </Popup>
                  </Marker>
                </MapContainer>
              </li>
            ))}
          </ul>

        </>
      )}
    </StyledWrapper>
  );
};

export default ProtectedPage;
