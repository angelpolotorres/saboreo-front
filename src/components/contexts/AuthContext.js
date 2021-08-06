import React, { useContext, useEffect, useState } from 'react';

const initialContext = {
  userProfile: null,
  loading: true,
  userLogin: () => {},
  userLogout: () => {}
};

const AuthContext = React.createContext(initialContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(initialContext.loading);
  const [userProfile, setUserProfile] = useState(initialContext.userProfile);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const profile = localStorage.getItem('profile');
    if (!token) {
      setLoading(false);
      return;
    }
    setUserToken(token);
    setLoading(false);
    setUserProfile(profile);
  }, []);

  const userLogin = (token, profile) => {
    localStorage.setItem('token', token);
    localStorage.setItem('profile', JSON.stringify(profile));
    // El localstorage solo puede recibir strings
    setUserProfile(profile);
    setUserToken(token);
  };

  const userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    setUserProfile(null);
  };

  const value = {
    userProfile,
    userToken,
    loading,
    userLogin,
    userLogout
  };

  return (
    <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>
  );
};
