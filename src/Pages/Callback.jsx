import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../spotify';

function Callback() {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      getAccessToken(code).then((token) => {
        navigate('/music');
      });
    }
  }, []);

  return <p>Logging in...</p>;
}

export default Callback;