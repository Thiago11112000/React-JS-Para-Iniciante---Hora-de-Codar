import React, { useState, useEffect } from 'react';

const UseEffectExamples = () => {
  // useEffect sem dependências (executa em cada renderização)
  useEffect(() => {
    console.log("Rodou UE1");
  });

  // useEffect com dependências vazias (executa apenas uma vez)
  useEffect(() => {
    console.log("Rodou UE2");
  }, []);

  // useState para uma única contagem
  const [count, setCount] = useState(0);

  // useEffect com dependências na contagem
  useEffect(() => {
    console.log("Rodou E3");
  }, [count]);

  // Função para incrementar a contagem em 1
  const incrementar = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Função para incrementar a contagem em 5 (por exemplo)
  const incrementarCinco = () => {
    setCount(prevCount => prevCount + 5);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementar}>Aumentar contagem em 1</button>
      <button onClick={incrementarCinco}>Aumentar contagem em 5</button>
    </div>
  );
};

export default UseEffectExamples;
