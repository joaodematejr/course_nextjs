export function getServerSideProps() {
  console.log("[Server] gerando props para o componente...");
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Dinamico1(props: any) {
  return (
    <>
      <h1>Dinâmico #01</h1>
      <h1>{props.numero}</h1>
    </>
  );
}
