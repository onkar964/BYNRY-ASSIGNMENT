import React from 'react';
import { useParams } from 'react-router-dom';
import profileData from './assets/profile';
import './d.css'

const Display = () => {
    const { id } = useParams();
    const profile = profileData.find(profile => profile.id === Number(id));
    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <div className='main'>
          <h1>Profile</h1>
          <div className='profileDisplay'>
            <div className='l'>
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className='r'>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Profile:</strong> {profile.profile}</p>
              <p><strong>Company Name:</strong> {profile.company_name}</p>
              <p><strong>Address:</strong> {profile.address}</p>
            </div>
          </div>
        </div>
    );
};

export default Display;