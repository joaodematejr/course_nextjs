export async function getServerSideProps() {
  console.log('[Server] gerando props para o componente...')
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();
  return {
    props: {
      produtos,
    },
  };
}

export default function Dinamico2(props: any) {
  console.log('[Client] renderizando o componente...')
  function renderizarProdutos() {
    return props.produtos.map((produto: any) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} tem preço de R$ {produto.preco}
        </li>
      );
    });
  }
  return (
    <>
      <h1>{renderizarProdutos()}</h1>
    </>
  );
}
