import React from 'react';

function JsxExamples() {
  const userName = "Carlos";
  const user = {
    name: "Ana",
    lastName: "Souza",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  const userIsLoggedIn = false;
  const userRole = "admin";

  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
  ];

  return (
    <div>
      <h2>Conteúdo que o usuário vai ver</h2>
      {/* Listando dados de usuário */}
      <p>O nome do usuário é: {userName}</p>
      <p>
        Usuário: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Matheus")}</p>

      {/* DIFERENÇAS DO HTML */}
      <div className="alguma-coisa">Este Cara</div>
      <div className="Teste">ok</div>

      <button onClick={() => alert("teste")}>Clique em mim</button>
      <input type="text" placeholder="Digite algo" />

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {userIsLoggedIn ? (
        <div>
          <p>Caso: Está logado</p>
        </div>
      ) : (
        <p>Caso: Não está logado</p>
      )}

      {userRole === "admin" && <p>Você é um admin</p>}

      {/* RENDERIZAÇÃO DE LISTAS */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JsxExamples;
