export function getStaticProps() {
  return {
    revalidate: 7,
    props: {
      num: Math.random(),
    },
  };
}

export default function Estatico3(props: any) {
  return (
    <>
      <h1>Estático #02</h1>
      <h1>{props.num}</h1>
    </>
  );
}
