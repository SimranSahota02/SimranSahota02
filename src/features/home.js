import React, { useState } from 'react';
import '../styles/tcg-guides.css';
import FloatingTextBox from '../components/floatingTextBox';
import { useNavigate } from 'react-router-dom';

function Home() {

  const routes = ['', '2010', '2018', 'GLC'];
  const [selectedRoute, setSelectedRoute] = useState('');
  const navigate = useNavigate();

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
    navigate(`/${route.toLowerCase()}`);
  };

  return (
    <div className="content">
      <FloatingTextBox />
    </div>
  );
}

export default Home;