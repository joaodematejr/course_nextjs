import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idades, setIdades] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("http://localhost:3000/api/form", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        idades: idades,
      }),
    })
      .then((resposta) => resposta.json())
      .then((dados) => console.log(dados));

    const res = await fetch("http://localhost:3000/api/form");
    const usuarios = await res.json();
    setUsuarios(usuarios);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      return (
        <li key={i}>
          {usuario.nome} tem {usuario.idades} anos.
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        value={idades}
        onChange={(e) => setIdades(+e.target.value)}
      />
      <button onClick={salvarUsuario}>Enviar</button>
      <ul>{renderizarUsuarios()}</ul>
    </div>
  );
}
