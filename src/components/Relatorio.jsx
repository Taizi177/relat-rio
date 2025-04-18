import React from 'react';
import { Link } from 'react-router-dom';

const Relatorio = () => {
  return (

    <div className="page-content">
    <div className='titulo'>Relatório Missa de Páscoa</div>

      <p>   
            Durante a missa de páscoa, foi falado sobre a sexta-feira santa e o domingo de páscoa, e feita uma reflexão sobre comemorar e agradeçer a esse sacrifício feito por Jesus 
        por nossas vidas. Foi explicado que a sexta-feira santa é o dia em que lembramos o sacrifício de Jesus. Ele foi traído, julgado injustamente, sofreu tortura e foi crucificado. Morreu na cruz para pagar pelos pecados da humanidade, demonstrando um amor incondicional.
        E foi explicado também sobre a Páscoa, pois três dias depois, Jesus ressuscitou, vencendo a morte. Isso simboliza renascimento, esperança e vida nova. É a confirmação da 
        promessa de salvação e da vitória do bem sobre o mal.
      </p>
      <p>
            A reflexão feita foi para agradeçer Jesus por tudo que fez por nós, que em meio à correria do dia a dia, às vezes esquecemos o tamanho do amor que Deus tem por nós. 
        A Sexta-feira Santa nos lembra que Jesus, mesmo sendo inocente, escolheu o caminho da cruz. Ele sofreu por amor, se entregou por inteiro para que pudéssemos ter vida. 
        A ressurreição no Domingo de Páscoa mostra que o amor vence tudo, até a morte. E por isso, agradecer a Deus vai muito além de palavras, é reconhecer que, mesmo sem merecer, 
        fomos alcançados por uma graça infinita.
      </p>
      <p>
            Devemos ter gratidão, e gratidão é viver com o coração voltado para esse amor. É tentar ser luz, perdoar, amar mais, julgar menos e caminhar com fé. Agradecer é também 
        confiar — mesmo quando não entendemos tudo.
      </p>
      <div className='link'>
              <Link to="/">Home</Link>
        </div>
    </div>
    
  );
};

export default Relatorio;   