import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const user = location.state && location.state.user;

  if (!user) {
    // If no user info, redirect to sign in
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Welcome, {user.name}!</h2>
        <p className="text-lg text-gray-700">You have successfully signed in.</p>
      </div>
    </div>
  );
};

export default Welcome;
