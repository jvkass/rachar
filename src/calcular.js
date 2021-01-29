import React, { Component, useState, useEffect } from 'react';

function Example() {
   
    const [money, setMoney] = useState(0);
    const [people, setPeople] = useState(0);
    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
      // Atualiza o título do documento utilizando a API do navegador
      document.title = `You clicked ${money/people} times`;
    });
  
    return (
      <div>
        <text>{count}</text>
      </div>
    );
  }