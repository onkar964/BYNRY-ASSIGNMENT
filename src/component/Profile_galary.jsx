import React from 'react';
import profileData from './assets/profile';
import { Link } from 'react-router-dom';
import './pd.css'


const ProfileGallery = () => {
  return (
    <div className='pd'>
      <h1>Profile Galary</h1>
      <hr />
      <div className='profiledisplay'>
          {profileData.map(profile => (
              <div key={profile.id}>
                <Link to={`/${profile.id}`}>
                  <img src={profile.image} alt={profile.name} />
                  <h2>{profile.name}</h2>
                  <button>Summary</button>
                </Link>
              </div>
            ))}    
      </div>
    </div>
  );
};

export default ProfileGallery;