export function getStaticProps() {
  return {
    props: {
      num: Math.random(),
    },
  };
}

export default function Estatico2(props: any) {
  return (
    <>
      <h1>Estático #02</h1>
      <h1>{props.num}</h1>
    </>
  );
}
