import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-content">
      <h1>Relatório 16/04</h1>
      
      <div className='link'>
        <Link to="/Relatorio">Relatorio Páscoa</Link>
      </div>
      
   
    </div>
  );
};

export default Home;