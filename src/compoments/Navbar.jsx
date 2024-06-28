import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {currentUser ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
