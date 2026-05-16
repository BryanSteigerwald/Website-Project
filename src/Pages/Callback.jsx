import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../spotify';

//handle the callback from the spotify api, for access and refresh tokens
function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log('Code from URL:', code);
    console.log('Code verifier in storage:', localStorage.getItem('code_verifier'));

    if (code) {
      getAccessToken(code).then((token) => {
        console.log('Token received:', token);
        navigate('/music');
      }).catch(err => console.log('Token exchange error:', err));
    }
  }, []);

  return <p>Logging in...</p>;
}

export default Callback;