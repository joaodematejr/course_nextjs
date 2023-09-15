// JSX
export default function jsx5() {
  const subtitulo = "Estou no Javascript!";
  return (
    <div>
      <h1>INTEGRAÇÃO JS E jsx4</h1>
      <h2>{subtitulo}</h2>
      <h2>{3 * 4}</h2>
      <h2>{Math.max(13, 666)}</h2>
      <h5>{entre(3, 10, 2)}</h5>
    </div>
  );
}

// {{{ javascript}} duplo chave

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}

// HTML, CSS E JS TECNOLOGIAS

// COMPONENTES(HTML, CSS E JS)
