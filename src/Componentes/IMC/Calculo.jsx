import React from 'react';
import TabelaImc from './TabelaImc'; 

function Calculo({ altura, peso }) {
 
  const imc = peso / (altura * altura);

  return (
    <div>
      
      <TabelaImc imc={imc} />
    </div>
  );
}

export default Calculo;
