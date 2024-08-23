import React from 'react';

function TabelaImc({ imc }) {
  let categoria = '';

  if (imc !== null) {
    if (imc < 18.5) {
      categoria = 'Abaixo do peso';
    } else if (imc < 25) {
      categoria = 'Peso normal';
    } else if (imc < 30) {
      categoria = 'Sobrepeso';
    }else if (imc < 35) {
      categoria = 'Obesidade Grau I';
    }else if (imc < 40) {
      categoria = 'Obesidade Grau II';
    } 
    else {
      categoria = 'Obesidade Grau III';
    }
  }

  return (
    <div>
      {imc !== null ? (
        <div>
          <h5>Seu IMC Resultante é de: {imc.toFixed(2)}</h5>
          <h5>Seu Estado Atual é: {categoria}</h5>
        </div>
      ) : (
        <h5>Por favor, insira valores válidos.</h5>
      )}
    </div>
  );
}

export default TabelaImc;
