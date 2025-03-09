import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDeleteProfile = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Username: {user?.username}</p>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
};

export default Profile;
