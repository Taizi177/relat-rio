import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-content">
      <h1>Relatório 16/04</h1>
      <p>A Sexta-feira Santa e a Páscoa são celebrações centrais do cristianismo, marcando o sacrifício de Jesus Cristo e sua ressurreição.</p>
      <p>Celebrá-las é importante porque nos convida à reflexão sobre o amor, a fé, o perdão e a esperança de uma nova vida.</p>
      
      <div className='link'>
        <Link to="/Relatorio">Relatorio Páscoa</Link>
      </div>
      
   
    </div>
  );
};

export default Home;