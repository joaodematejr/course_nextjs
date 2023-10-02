export async function getStaticPaths() {
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
  const ids = await resp.json();

  const paths = ids.map((id: any) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true, // false => 400
    paths,
  };
}

export async function getStaticProps(context: any) {
  const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const aluno = await resp.json();

  return {
    props: {
      aluno,
    },
  };
}

export default function ALunoPorId(props: any) {
  return (
    <div>
      <h1>Detalhes do aluno</h1>
      <ul>
        <li>{props.aluno.id}</li>
        <li>{props.aluno.nome}</li>
        <li>{props.aluno.email}</li>
      </ul>
    </div>
  );
}
