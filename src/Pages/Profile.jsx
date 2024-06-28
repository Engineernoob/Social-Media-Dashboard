import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Profile() {
  const { currentUser } = useAuth();
  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {currentUser.email}</p>
    </div>
  );
}

export default Profile;