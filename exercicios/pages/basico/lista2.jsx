// JSX
function gerarLista(final = 10) {
  let list = [];
  for (let i = 1; i < final; i++) {
    list.push(<span key={i}>{i},</span>);
  }
  return list;
}

export default function lista() {
  return (
    <div>
      <div>{gerarLista(50)}</div>
      <div>{gerarLista(20)}</div>
      <div>{gerarLista(10)}</div>
    </div>
  );
}

// {{{ javascript}} duplo chave

// HTML, CSS E JS TECNOLOGIAS

// COMPONENTES(HTML, CSS E JS)
