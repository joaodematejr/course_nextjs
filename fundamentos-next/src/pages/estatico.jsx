export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function estatico(props) {
  return (
    <div>
      <h1>Estático {props.numero}</h1>
    </div>
  );
}
