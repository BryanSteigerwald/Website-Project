import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../spotify';

//handle the callback from the spotify api, for access and refresh tokens
function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      getAccessToken(code).then((token) => {
        navigate('/music');
      }).catch(err => console.log('Token exchange error:', err));
    }
  }, []);

  return <p>Logging in...</p>;
}

export default Callback;