import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './Img/img'; 
import React, { useState } from 'react';
import Calculo from './Componentes/IMC/Calculo'; 
import './styles.css';

function App() {
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados, se necessário.
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div id="z1" className="col-12">
            <Img imgKey="img1" alt="Imagem 1" />
            <h5>Uma calculadora de IMC (Índice de Massa Corporal) é uma ferramenta que ajuda a determinar se uma pessoa está dentro de uma faixa saudável de peso com base na sua altura e peso. O IMC é um indicador simples que pode dar uma ideia geral sobre o estado nutricional de uma pessoa, embora não leve em conta a composição corporal, como a proporção de músculo e gordura.</h5>
          </div>
          <div id="z2" className="col-12">
            <h2>Tabela</h2>
            <Img imgKey="img2" alt="Imagem 2" />
          </div>
          <div className="col-12 col-lg-3 col-md-6 a">
            <h5>Nome</h5>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col-12 col-lg-3 col-md-6 a">
            <h5>Altura</h5>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              step="0.01"
            />
          </div>
          <div className="col-12 col-lg-3 col-md-6 a">
            <h5>Peso</h5>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              step="0.1"
            />
          </div>
          <div className="col-12 col-lg-3 a2">
            <h5>Calculo Será Realizado Automaticamente</h5>
          </div>
          <div className="col-12">
            <h4>Nome: {nome}</h4>
            <Calculo altura={parseFloat(altura)} peso={parseFloat(peso)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
