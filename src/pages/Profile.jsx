<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [profilePic, setProfilePic] = useState('path/to/profile-pic.jpg');
  const [editableFields, setEditableFields] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users'); // Adjust the endpoint as needed
        if (response.data.length > 0) {
          setUser(response.data[0]); // Set the first user in the list
        } else {
          setMessage('No user data available.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setMessage(`Error fetching user data: ${error.message}`);
      }
    };

    fetchUserData();
  }, []);

  const handleDeleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:3000/users/${user.id}`); // Adjust the endpoint as needed
      setUser(null);
      setMessage('Profile deleted successfully.');
    } catch (error) {
      console.error('Error deleting profile:', error);
      setMessage(`Error deleting profile: ${error.message}`);
    }
  };

  const enableEdit = (field) => {
    setEditableFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const saveChanges = () => {
    setEditableFields({});
    alert('Changes saved successfully!');
  };

  const updateProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderField = (field, value) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={field} className="profile-field">
          <label>{field}:</label>
          {Object.keys(value).map(subField => renderField(`${field}.${subField}`, value[subField]))}
        </div>
      );
    } else {
      return (
        <div key={field} className="profile-field">
          <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
          <input
            type={field === 'password' ? 'password' : field === 'dob' ? 'date' : 'text'}
            id={field}
            value={value}
            onChange={handleChange}
            disabled={!editableFields[field]}
          />
          <span className="edit-icon" onClick={() => enableEdit(field)}>✏</span>
        </div>
      );
    }
=======
import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDeleteProfile = () => {
    localStorage.removeItem('user');
    window.location.reload();
>>>>>>> abd8dee31542bbbbd873954ce7c924a0b7329b87
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
<<<<<<< HEAD
      {message && <p>{message}</p>}
      {user ? (
        <div>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <input type="file" id="profilePicInput" hidden onChange={updateProfilePic} />
          <button className="upload-button" onClick={() => document.getElementById('profilePicInput').click()}>
            Upload
          </button>

          {Object.keys(user).map(field => renderField(field, user[field]))}

          <button className="save-button" onClick={saveChanges}>Save Changes</button>
          <button className="delete-button" onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
=======
      <p>Username: {user?.username}</p>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
>>>>>>> abd8dee31542bbbbd873954ce7c924a0b7329b87
    </div>
  );
};

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> abd8dee31542bbbbd873954ce7c924a0b7329b87
